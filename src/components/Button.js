import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: white;
  height: 25px;
  border: 1px solid ${props => props.theme.danger};
  cursor: pointer;
  &:hover {
    border-color: #ccc;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

function Button({ name }) {
  return <ButtonContainer>{name}</ButtonContainer>;
}

export default Button;
