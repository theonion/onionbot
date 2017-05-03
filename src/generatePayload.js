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
    BASE_URL,
    DEFAULT_ARTICLE,
    FAVICON_URL,
    ICON_URL,
    UTM_PARAMS,
  } = config;

  const {
    description,
    image,
    published,
    title,
    url,
  } = (article || DEFAULT_ARTICLE);

  return {
    attachments: [
      {
        color: article ? '#006B3A' : '#A7A7A7',
        image_url: image,
        footer: 'The Onion',
        footer_icon: FAVICON_URL,
        text: formatDesc(description),
        title,
        title_link: `${BASE_URL}${url}?${querystring.stringify(UTM_PARAMS)}`,
        ts: published,
      },
    ],
    icon_url: ICON_URL,
    username: 'The Onion Bot',
  };
}

module.exports = generatePayload;
