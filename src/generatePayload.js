const config = require('./config');
const querystring = require('querystring');

function stripTags(string) {
  return string.replace(/<(?:.|\n)*?>/gm, '');
}

function replaceDash(string) {
  return string.replace('&mdash;', ' - ');
}

function formatDesc(string) {
  return replaceDash(stripTags(string));
}

function generatePayload(article = null) {
  const {
    baseUrl,
    defaultArticle,
    faviconUrl,
    iconUrl,
    utmParams,
  } = config;

  const {
    description,
    image,
    published,
    title,
    url,
  } = (article || defaultArticle);

  return {
    attachments: [
      {
        color: article ? '#006B3A' : '#A7A7A7',
        image_url: image,
        footer: 'The Onion',
        footer_icon: faviconUrl,
        text: formatDesc(description),
        title,
        title_link: `${baseUrl}${url}?${querystring.stringify(utmParams)}`,
        ts: published,
      },
    ],
    icon_url: iconUrl,
    username: 'The Onion Bot',
  };
}

module.exports = generatePayload;
