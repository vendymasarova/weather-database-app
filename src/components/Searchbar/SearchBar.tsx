import styled from 'styled-components'

export const SearchBar = () => {
  return (
    <>
      <StyledInput/>
    </>
  )
}

const StyledInput = styled.input`
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  background: #13185d;
  box-shadow:  20px 20px 60px #0b0e37,
              -20px -20px 60px #1b2283;
  border: none;
  outline: none;
`