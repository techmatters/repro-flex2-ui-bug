import { Button } from '@twilio/flex-ui';
import styled from '@emotion/styled';

const StyledButton = styled(Button)`
  background-color: turquoise;
  width: 200px;
`;

const TestStyledButton = () => <StyledButton onClick={() => console.log('Clicked!')}>Another button</StyledButton>

export default TestStyledButton;