import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import CustomTaskList from './components/CustomTaskList/CustomTaskList';
import TestButtonBase from './components/TestButtonBase/TestButtonBase';
import TestStyledButton from './components/TestStyledButton/TestStyledButton';

const PLUGIN_NAME = 'ReproFlex2UiBugPlugin';

export default class ReproFlex2UiBugPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    Flex.setProviders({
      CustomProvider: (RootComponent) => (props) => {
          return (
            <StylesProvider generateClassName={createGenerateClassName({
              productionPrefix: 'pluginXYZ',
            })}>
                  <RootComponent {...props} />
              </StylesProvider>
          );
      }
});

    const options: Flex.ContentFragmentProps = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskList key="ReproFlex2UiBugPlugin-component" />, options);
    flex.TaskList.Content.add(<TestButtonBase key="ReproFlex2UiBugPlugin-TestButtonBase" />, options);
    flex.TaskList.Content.add(<TestStyledButton key="ReproFlex2UiBugPlugin-TestStyledButton" />, options);
  }
}
