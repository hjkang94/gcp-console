import React from 'react';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';

const ChipContainer = styled.button`
  background-color: ${props => props.theme.default};
  color: white;
  border-radius: 10px;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  font-size: ${props => props.theme.font.xs};
  padding: 0 10px;
  outline: none;
  border: none;
  > div {
    padding-left: 5px;
  }
  &:focus {
    outline: none;
  }
  display: flex;
`;

function ChipButton({ name, setFilter }) {
  return (
    <ChipContainer>
      {name}
      <div>
        <MdCancel onClick={() => setFilter(false)} />
      </div>
    </ChipContainer>
  );
}

export default ChipButton;
