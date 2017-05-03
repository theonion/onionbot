require('dotenv').config();

module.exports = {
  BASE_URL: 'http://www.theonion.com',
  CATCH_ALL_ERRORS: process.env.CATCH_ALL_ERRORS,
  DEBUG_ENABLED: process.env.DEBUG_ENABLED,
  DEFAULT_ARTICLE: {
    description: 'CHICAGO — Following several unsuccessful attempts to find a specific article on a national media website, readers confirmed Monday that the built-in search engine found in the upper-right-hand corner of the online publication is nothing short of useless.',
    published: 1374525528,
    title: "Website's Built-In Search Engine Just Pathetic",
    url: '/article/websites-built-in-search-engine-just-pathetic-33203',
  },
  FAVICON_URL: process.env.FAVICON_URL,
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  HELP_TEXT: "It's really not that hard. Just try `@onionbot biden` or something.",
  ICON_URL: process.env.ICON_URL,
  PORT: process.env.PORT || 3333,
  REQUESTS_PER_SECOND: process.env.REQUESTS_PER_SECOND || 5,
  SEARCH_ENDPOINT: process.env.SEARCH_ENDPOINT || 'localhost:9200',
  SLACK_CLIENT_ID: process.env.SLACK_CLIENT_ID,
  SLACK_CLIENT_SECRET: process.env.SLACK_CLIENT_SECRET,
  SLACK_API_TOKEN: process.env.SLACK_API_TOKEN,
  UTM_PARAMS: {
    utm_source: 'onionbot',
  },
};
