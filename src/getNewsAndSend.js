const config = require('./config');
const generatePayload = require('./generatePayload');
const request = require('request');
const ua = require('universal-analytics');

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
    let emojiName = 'fire';
    let article;

    if (response.statusCode !== 500) {
      article = JSON.parse(result);
      emojiName = 'wave';
    }

    const payload = generatePayload(article);

    bot.api.reactions.add({
      timestamp: ts,
      channel,
      name: emojiName,
    }, (botErr) => {
      if (botErr) {
        bot.botkit.log('Failed to add emoji reaction :(', botErr);
      }
    });

    bot.reply(message, payload);
  });
}

module.exports = getNewsAndSend;
