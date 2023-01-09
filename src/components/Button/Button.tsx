/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { StyledButton } from './Button-styles';

interface Props {
  onSubmit?: any;
  text?: string;
  onClick?: any;
  disabled?: boolean;
}

const Button = ({ onSubmit, text }: Props) => {
  return (
    <StyledButton onSubmit={onSubmit}>{text}</StyledButton>
  );
};

export default Button;
