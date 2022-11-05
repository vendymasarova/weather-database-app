import { SearchForm } from './components/SearchForm/SearchForm';
import { StyledWrapper, StyledContainer, StyledBody, StyledTitle, StyledGrid } from './App-styles';
import { Card } from './components/SearchForm/Card/Card';

export const App = () => (
	<StyledWrapper>
		<StyledContainer>
			<StyledBody>
				<StyledTitle>Najdi své oblíbené město</StyledTitle>
				<SearchForm />
        <StyledGrid>
          <Card title="Praha" color="#fff"/>
          <Card title="Loket" color="#fff"/>
        </StyledGrid>
			</StyledBody>
		</StyledContainer>
	</StyledWrapper>
);
