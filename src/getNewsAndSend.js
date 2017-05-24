const request = require('request');
const ua = require('universal-analytics');

const config = require('./config');
const generatePayload = require('./generatePayload');

function getNewsAndSend(message, bot) {
  const {
    channel,
    text,
    ts,
    user,
  } = message;

  const type = 'core_article';
  const query = text.replace(' ', '+');
  const queryUrl = `${config.searchEndpoint}?q=${query}&type=${type}`;

  const uniqueVisitor = ua(config.googleAnalyticsId, user);

  const analyticsParams = {
    ec: `Channel: ${channel}`,
    ea: `Query: ${text}`,
    el: `User: ${user}`,
  };

  uniqueVisitor.event(analyticsParams).send();

  request(queryUrl, (err, response, result) => {
    let articles;

    if (response.statusCode !== 500) {
      articles = JSON.parse(result).results;
    }

    const randomIndex = Math.floor(Math.random() * articles.length);
    const article = articles[randomIndex];

    const payload = generatePayload(article);

    bot.api.reactions.add({
      timestamp: ts,
      channel,
      name: 'newspaper',
    }, (botErr) => {
      if (botErr) {
        bot.botkit.log('Failed to add emoji reaction :(', botErr);
      }
    });

    bot.reply(message, payload);
  });
}

module.exports = getNewsAndSend;
