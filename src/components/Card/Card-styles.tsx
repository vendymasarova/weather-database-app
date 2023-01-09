import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 20px;
  background: #a3d3ff;
  box-shadow: 20px 20px 41px #8bb3d9, -20px -20px 41px #bbf3ff;
  padding: 20px;
  width: 100%;

  .perex {
    text-align: center;
    margin-top: 20px;
  }
`;

export const StyledTitle = styled.div`
  font-size: 36px;
  text-align: center;
  color: ${(props) => props.color};
`;
