import React from 'react';
import styled from 'styled-components';

const SelectBox = styled.select`
  min-width: 180px;
  padding: 5px 5px 5px 5px;
  border: 1px solid #ccc;
  height: 34px;
  border-radius: 5px;
  font-size: ${props => props.theme.font.xs};
  color: gray;
}
`;

function SubToolbar({ items }) {
  return (
    <SelectBox>
      {items.map(item => (
        <option key={item}>{item}</option>
      ))}
    </SelectBox>
  );
}

export default SubToolbar;
