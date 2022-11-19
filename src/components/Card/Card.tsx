/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { StyledCard, StyledTitle } from './Card-styles';

interface Props {
  title?: string;
  color?: string;
  children?: JSX.Element;
}

export const Card = ({ title, color, children }: Props) => {
  return (
    <StyledCard>
      <StyledTitle color={color}>{title}</StyledTitle>
      {children}
    </StyledCard>
  );
};
