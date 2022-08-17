## Description

This repo serves to reproduce some existing issues that we are facing while migrating our project to Flex v2.
It is the resulting project of running 
```
twilio flex:plugins:create repro-flex2-ui-bug --install --flexui2 --typescript
```
and adding a single component to the plugin (`src/components/TestButtonBase`).

## Running the project

Assuming you have followed the [setup instructions of the Flex docs](https://www.twilio.com/docs/flex/quickstart/getting-started-plugin#prerequisites):
- Create a `public/appConfig.js` that points to an account sid with Flex v2
```
const appConfig = {
  sso: {
    accountSid: <account sid set with Flex v2>,
  },
  pluginService: {
    enabled: true,
    url: '/plugins',
  },
  logLevel: 'info',
};
```
-  Run `npm install`
-  Run `npm start`

