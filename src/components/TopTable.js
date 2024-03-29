import React, { useState } from 'react';
import styled from 'styled-components';
import { ChipButton, InputText } from 'components';
import { MdFilterList, MdClear, MdHelp, MdViewWeek } from 'react-icons/md';

const TopTableContainer = styled.div`
  height: 40px;
  line-height: 35px;
  border-top: 1px solid ${props => props.theme.border.default};
  border-bottom: 1px solid ${props => props.theme.border.default};
  display: inline-flex;
  font-size: ${props => props.theme.font.sm};
  width: 100%;
`;

const Icon = styled.div`
  margin-right: 10px;
  padding-left: 20px;
`;

const Button = styled.div`
  padding-top: 8px;
`;

const RightButton = styled.div`
  margin-left: auto;
  padding-top: 5px;
  > span {
    padding: 0 10px;
    cursor: pointer;
    &:last-child {
      border-left: 1px solid ${props => props.theme.border.default};
      padding-right: 20px;
    }
  }
`;

function TopTable({ btnText, inputText }) {
  const [filter, setFilter] = useState(true);

  return (
    <TopTableContainer>
      <Icon>
        <MdFilterList />
      </Icon>
      {filter && (
        <Button>
          <ChipButton name={btnText} setFilter={setFilter} />
        </Button>
      )}
      <InputText placeholder={inputText} />
      <RightButton>
        <span>
          <MdClear />
        </span>
        <span>
          <MdHelp />
        </span>
        <span>
          <MdViewWeek />
        </span>
      </RightButton>
    </TopTableContainer>
  );
}

export default TopTable;
