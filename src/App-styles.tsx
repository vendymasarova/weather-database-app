import styled from 'styled-components'

export const StyledWrapper = styled.div`
  background-color: #a3d3ff;
`

export const StyledContainer = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const StyledGrid= styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  grid-gap: 20px;
  margin-top: 20px;
`