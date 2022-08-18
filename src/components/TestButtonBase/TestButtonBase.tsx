import React from 'react'
import { withStyles } from '@material-ui/core';

// Dummy replacement to avoid importing this component from @material-ui/core
const ButtonBase: React.FC<any> = props => <button {...props}>{props.children}</button>

const StyledButton = withStyles({
  root: {
    width: 200,
    height: 40,
  },
})(ButtonBase);

const TestButtonBase = () => <StyledButton onClick={() => console.log('Clicked!')}>Some button</StyledButton>

export default TestButtonBase;
