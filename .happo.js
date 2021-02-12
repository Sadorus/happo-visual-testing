const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET, 
    targets: {
      chrome: new RemoteBrowserTarget('chrome', {
        viewport: '1920x1200',
        useFullPageFallbackForTallScreenshots: false,
        maxHeight: 10000,
      }),
      'chrome-mobile': new RemoteBrowserTarget('chrome', {
        viewport: '375x768',
        useFullPageFallbackForTallScreenshots: false,
        maxHeight: 10000,
      }),
      safari: new RemoteBrowserTarget('safari', {
        viewport: '1920x1200',
        scrollStitch: true,
      }),
      firefox: new RemoteBrowserTarget('firefox', {
        viewport: '1920x1200',
        useFullPageFallbackForTallScreenshots: false,
        maxHeight: 10000,
      }),
      iossafari: new RemoteBrowserTarget('ios-safari', {
        viewport: '1334x750',
      }),
      'internet explorer': new RemoteBrowserTarget('internet explorer', {
        viewport: '1280x720',
        scrollStitch: true,
      }),
    },
  };