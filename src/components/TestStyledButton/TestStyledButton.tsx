import { styled, Button } from '@twilio/flex-ui';

const StyledButton = styled(Button)`
  background-color: turquoise;
  width: 200px;
`;

const TestStyledButton = () => <StyledButton onClick={() => console.log('Clicked!')}>Another button</StyledButton>

export default TestStyledButton;