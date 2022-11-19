import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  background: #a3d3ff;
  box-shadow: 20px 20px 41px #8bb3d9, -20px -20px 41px #bbf3ff;
  border: none;
  outline: none;
  font-size: 20px;
  color: #f5f5f5;
`;

export const StyledForm = styled.form`
  width: 100%;
  position: relative;
`;

export const StyledList = styled.ul`
  padding: 10px;
  border-radius: 20px;
  background: #a3d3ff;
  box-shadow: 20px 20px 41px #8bb3d9, -20px -20px 41px #bbf3ff;
  position: absolute;
  width: 100%;
`;

export const StyledItem = styled.ul`
  padding-block: 10px;
  background: #a3d3ff;
  border-bottom: 1px solid rgba(225, 225, 225, 0.7);
  /* box-shadow: 10px 10px 21px #8bb3d9, -10px -10px 21px #bbf3ff; */
  list-style: none;
  color: #fff;

  &:hover {
    background-color: #a4c8e9;
  }

`;
