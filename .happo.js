const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: '3f753656fa',
    apiSecret: '4ca6911d669f2b0418334a628',
  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },
};