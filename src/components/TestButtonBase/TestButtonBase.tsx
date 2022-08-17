import React from 'react'
import { ButtonBase } from '@material-ui/core';
import { styled } from '@twilio/flex-ui';

const StyledButton = styled(ButtonBase)`
  background-color: red;
  height: 40px;
  width: 200px;
`;

const TestButtonBase = () => <StyledButton onClick={() => console.log('Clicked!')}>Some button</StyledButton>

export default TestButtonBase;
