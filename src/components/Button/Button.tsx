/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { StyledButton } from './Button-styles';

const Button = (onSubmitFn: any) => {
  return (
    <StyledButton onSubmit={onSubmitFn}>Button</StyledButton>
  );
};

export default Button;
