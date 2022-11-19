/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Card } from '../../components/Card/Card';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { StyledBody, StyledGrid } from '../../App-styles';
import { StyledTitle } from './Home-styles';

const Home = () => {
  return (
    <StyledBody>
      <StyledTitle>Najdi své oblíbené město</StyledTitle>
      <SearchForm />
      <StyledGrid>
        <Card title='Praha' color='#fff' />
        <Card title='Loket' color='#fff' />
      </StyledGrid>
    </StyledBody>
  );
};

export default Home;
