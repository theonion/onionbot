require('dotenv').config();

module.exports = {
  baseUrl: 'http://www.theonion.com',
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  debugEnabled: process.env.DEBUG_ENABLED,
  defaultArticle: {
    description: 'CHICAGO — Following several unsuccessful attempts to find a specific article on a national media website, readers confirmed Monday that the built-in search engine found in the upper-right-hand corner of the online publication is nothing short of useless.',
    published: 1374525528,
    title: 'Website\'s Built-In Search Engine Just Pathetic',
    url: '/article/websites-built-in-search-engine-just-pathetic-33203',
  },
  faviconUrl: process.env.FAVICON_URL,
  firebaseServiceAccount: {
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    private_key: process.env.PRIVATE_KEY,
    private_key_id: process.env.PRIVATE_KEY_ID,
    project_id: process.env.PROJECT_ID,
    token_uri: 'https://accounts.google.com/o/oauth2/token',
    type: 'service_account',
  },
  firebaseUri: process.env.FIREBASE_URI,
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  helpText: 'It\'s really not that hard. Just try `@onionbot biden` or something.',
  iconUrl: process.env.ICON_URL,
  port: process.env.PORT || 3333,
  redirectUri: process.env.REDIRECT_URI,
  searchEndpoint: process.env.SEARCH_ENDPOINT || 'localhost:9200',
  utmParams: {
    utm_source: 'onionbot',
  },
};
