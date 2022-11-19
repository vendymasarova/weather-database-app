import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 20px;
  background: #a3d3ff;
  box-shadow: 20px 20px 41px #8bb3d9, -20px -20px 41px #bbf3ff;
  padding: 20px;
  width: 100%;
`;

export const StyledTitle = styled.div`
  font-size: 24px;
  color: ${(props) => props.color};
`;
