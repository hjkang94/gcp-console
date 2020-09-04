import React, { useState } from 'react';
import styled from 'styled-components';
import { MdHelp } from 'react-icons/md';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
const InputContainer = styled.input`
  flex: 1;
  padding: 5px 10px;
  border: 1px solid #bdbdbd;
  outline: none;
  &:focus {
    border: 1px solid #bdbdbd;
  }
`;
const SelectContainer = styled.select`
  padding: 5px 10px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

const MenuIcon = styled(MdHelp)`
  min-width: 40px;
  padding-top: 5px;
  color: ${props => props.theme.font.danger};
`;

function Search({ text }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <Container>
      <InputContainer type="text" placeholder={text} value={searchText} onChange={handleChange} />
      <MenuIcon />
      <SelectContainer>
        <option>Columns</option>
        <option>Columns2</option>
        <option>Columns3</option>
      </SelectContainer>
    </Container>
  );
}

export default Search;
