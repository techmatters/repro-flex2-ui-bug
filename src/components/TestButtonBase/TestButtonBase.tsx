import React from 'react'
import { ButtonBase, withStyles } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    backgroundColor: 'red',
    width: 200,
    height: 40,
  },
})(ButtonBase);

const TestButtonBase = () => <StylesProvider injectFirst={true}><StyledButton onClick={() => console.log('Clicked!')}>Some button</StyledButton></StylesProvider>

export default TestButtonBase;
