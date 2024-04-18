export const config = {
  // runner: 'local',
   //port: 4723,

    user: 'oauth-josimari.fabri-192ff',
    key: '7427f4ec-a180-4beb-a4e0-12b30abfa932',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
       // {
      //  platformName: 'Android',
      //  'appium:deviceName': 'ebac-qe',
      //  'appium:platformVersion': '9.0',
      //  'appium:automationName': 'UiAutomator2',
      //  'appium:app': `${process.cwd()}/app/ebacshop.apks`,
      //  'appium:appWaitActivity': '.MainActivity',
      //  'appium:disableIdLocatorAutocompletion': true
      //   }

        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop (1).aab', 
            'appium:deviceName': 'Samsung.*',
            'appium:platformVersion': '10',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutocompletion': true,
            'sauce:options': {
               build: 'appium-build-teste-ebacshop',
               name: 'Ebac Shop teste',
               deviceOrientation: 'PORTRAIT',
               appiumVersion: 'latest'
            },
          }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
