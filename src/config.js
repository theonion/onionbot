require('dotenv').config();

module.exports = {
  apiToken: process.env.SLACK_API_TOKEN,
  baseUrl: 'http://www.theonion.com',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  debugEnabled: process.env.DEBUG_ENABLED,
  defaultArticle: {
    description: 'CHICAGO — Following several unsuccessful attempts to find a specific article on a national media website, readers confirmed Monday that the built-in search engine found in the upper-right-hand corner of the online publication is nothing short of useless.',
    published: 1374525528,
    title: "Website's Built-In Search Engine Just Pathetic",
    url: '/article/websites-built-in-search-engine-just-pathetic-33203',
  },
  faviconUrl: process.env.FAVICON_URL,
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  helpText: "It's really not that hard. Just try `@onionbot biden` or something.",
  iconUrl: process.env.ICON_URL,
  port: process.env.PORT || 3333,
  searchEndpoint: process.env.SEARCH_ENDPOINT || 'localhost:9200',
  utmParams: {
    utm_source: 'onionbot',
  },
};
