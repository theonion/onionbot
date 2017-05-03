const Botkit = require('botkit');

const config = require('./src/config');
const getNewsAndSend = require('./src/getNewsAndSend');
const printConfigTable = require('./src/printConfigTable');

const {
  DEBUG_ENABLED,
  HELP_TEXT,
  SLACK_API_TOKEN,
} = config;

if (DEBUG_ENABLED) {
  printConfigTable();
}

const controller = Botkit.slackbot({ debug: DEBUG_ENABLED });
controller.spawn({ token: SLACK_API_TOKEN }).startRTM();

controller.hears([''], 'direct_message,direct_mention,mention', (bot, message) => {
  const { text } = message;

  // If no text was supplied, treat it as a help command
  if (text === '' || text === 'help') {
    bot.reply(message, HELP_TEXT);
  } else { // Otherwise give the people their news!
    getNewsAndSend(message, bot);
  }
});
