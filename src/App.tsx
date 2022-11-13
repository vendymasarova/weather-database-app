import { BrowserRouter } from 'react-router-dom';
import { StyledWrapper, StyledContainer } from './App-styles';
import Pages from './Pages/Pages';

export const App = () => (
	<StyledWrapper>
		<StyledContainer>
			<BrowserRouter>
				<Pages />
			</BrowserRouter>
		</StyledContainer>
	</StyledWrapper>
);
