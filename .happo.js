const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: '3f753656fa',
    apiSecret: '4ca6911d669f2b0418334a628',
    targets: {
      chrome: new RemoteBrowserTarget('chrome', {
        viewport: '1920x1200',
      }),
      'chrome-mobile': new RemoteBrowserTarget('chrome', {
        viewport: '375x768',
      }),
      safari: new RemoteBrowserTarget('safari', {
        viewport: '1920x1200',
      }),
      firefox: new RemoteBrowserTarget('firefox', {
        viewport: '1920x1200',
      }),
      iossafari: new RemoteBrowserTarget('ios-safari', {
        viewport: '1334x750',
      }),
      'internet explorer': new RemoteBrowserTarget('internet explorer', {
        viewport: '1920x1200',
      }),
    },
  };