## Description

This repo serves to reproduce some existing issues that we are facing while migrating our project to Flex v2.
It is the resulting project of running
```
twilio flex:plugins:create repro-flex2-ui-bug --install --flexui2 --typescript
```
and adding two components to the plugin: `src/components/TestStyledButton` and `src/components/TestButtonBase`. Both have different issues:
- `src/components/TestStyledButton` uses `styled` method to add styles to a `Button` component, both imported from `@twilio/flex-ui`, but the styles are not taken into consideration. This issue is kinda fixed in [Import styled from @emotion #1](https://github.com/techmatters/repro-flex2-ui-bug/pull/1), as the given style is applied, but the original one, that should be the base style of `Button` component imported from `@twilio/flex-ui` are not there.
- `src/components/TestButtonBase` imports a component from `@material-ui/core` that seems to conflict with the internals of `@twilio/flex-ui`. Removing this conflicting import as in [Removed ButtonBase import #2](https://github.com/techmatters/repro-flex2-ui-bug/pull/2) not only fixes the above entirely, but also fixes the issues that we are seeing with the default buttons that comes with Flex (like accept/reject task).

Images are provided in the linked PRs to better understand the issue.


## Reproducing the issue

Assuming you have followed the [setup instructions of the Flex docs](https://www.twilio.com/docs/flex/quickstart/getting-started-plugin#prerequisites) and you are in a good place to run Flex plugins locally:
- Clone the repo.
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
- Run `npm install`.
- `git checkout main`.
- Run `npm start`.
- Once the Flex is running with the plugin, send a task and check that the styles looks like the "before" screenshots attached in the PRs [#1](https://github.com/techmatters/repro-flex2-ui-bug/pull/1) and [#2](https://github.com/techmatters/repro-flex2-ui-bug/pull/2).
- `git checkout fix-styled`.
- Send another task and check that the styles looks like the "after" in [#1](https://github.com/techmatters/repro-flex2-ui-bug/pull/1).
- `git checkout fix-flex_buttons`.
- Send another task and check that the styles looks like the "after" in [#2](https://github.com/techmatters/repro-flex2-ui-bug/pull/2).

Another thing that is worth checking, is in Chome Console -> Elements, inspect the page and see that in `main` branch, within the `<head>` tag some MUI `<style>` tags are repeated, but they are not in `fix-flex_buttons` branch. This is possibly related or similar to [this issue](https://github.com/mui/material-ui/issues/15610).