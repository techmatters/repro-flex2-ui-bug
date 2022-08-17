import React from 'react'
import { ButtonBase, withStyles } from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    width: 200,
    height: 40,
  },
})(ButtonBase);

const TestButtonBase = () => <StyledButton onClick={() => console.log('Clicked!')}>Some button</StyledButton>

export default TestButtonBase;
