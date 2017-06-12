  const config = require('./config');
const querystring = require('querystring');

function stripTags(s) {
  return s.replace(/<(?:.|\n)*?>/gm, '');
}

function symbolize(s) {
  return s.replace(/&mdash;/g, ' - ')
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rdquo;/g, '”')
    .replace(/&ldquo;/g, '“')
    .replace(/&quot;/g, '"');
}

function formatDesc(s) {
  return symbolize(stripTags(s));
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
    username: 'The Onion Bot',
  };
}

module.exports = generatePayload;
