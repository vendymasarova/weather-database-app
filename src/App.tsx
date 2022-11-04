import styled from 'styled-components'
import { SearchBar } from './components/Searchbar/Searchbar'
export const App = () => (

  <StyledWrapper>
    <StyledContainer>
      <StyledBody>
        <SearchBar />
      </StyledBody>
    </StyledContainer>
  </StyledWrapper>

)

const StyledWrapper = styled.div`
  background-color: #13185d;
`

const StyledContainer = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`