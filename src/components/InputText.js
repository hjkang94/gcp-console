import React from 'react';
import styled from 'styled-components';

const InputTextContainer = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  padding-left: 10px;
  width: 210px;
`;

function InputText({ placeholder }) {
  return (
    <div>
      <InputTextContainer placeholder={placeholder} />
    </div>
  );
}

export default InputText;
