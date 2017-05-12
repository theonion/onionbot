const Botkit = require('botkit');
const path = require('path');
const config = require('./src/config');
const getNewsAndSend = require('./src/getNewsAndSend');
const printConfigTable = require('./src/printConfigTable');

const {
  clientId,
  clientSecret,
  debugEnabled,
  helpText,
  port,
  apiToken,
} = config;

const _activeBots = {};

if (debugEnabled) {
  printConfigTable();
}

const controller = Botkit.slackbot({
  debug: debugEnabled,
  json_file_store: './db/',
}).configureSlackApp({
  clientId,
  clientSecret,
  scopes: ['bot'],
});

controller.setupWebserver(port, (err, webserver) => {
  webserver.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
  });

  controller.createOauthEndpoints(controller.webserver, (oauthErr, req, res) => {
    if (oauthErr) {
      res.status(500).send(`ERROR: ${oauthErr}`);
    } else {
      res.send('Success!');
    }
  });

  controller.storage.teams.all((loadErr, teams) => {
    teams.forEach((team) => {
      controller.spawn(team.bot).startRTM((teamErr, bot) => {
        if (err) {
          console.log('Error connecting bot to Slack:', teamErr);
        } else {
          _activeBots[bot.config.token] = bot;
        }
      });
    });
  });

  controller.hears([''], 'direct_message,direct_mention,mention', (bot, message) => {
    const { text } = message;

    // If no text was supplied, treat it as a help command
    if (text === '' || text === 'help') {
      bot.reply(message, helpText);
    } else { // Otherwise give the people their news!
      getNewsAndSend(message, bot);
    }
  });
});
