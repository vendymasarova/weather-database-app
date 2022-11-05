import { StyledCard, StyledTitle } from './Card-styles';

interface Props {
	title: string;
  color: string
}

export const Card = ({ title, color }: Props) => {
  return (
    <StyledCard>
		<StyledTitle color={color}>{title}</StyledTitle>
	</StyledCard>
  )
	
};
