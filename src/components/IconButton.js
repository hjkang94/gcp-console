import React from 'react';
import styled from 'styled-components';
import { Icon } from 'utils/CommonStyle';
import { lighten } from 'polished';

const IconButtonContainer = styled.button`
  background: ${props => props.inverse || 'none'};
  color: ${props => props.color || props.theme.default};
  border: none;
  cursor: pointer;
  font-size: 12px;
  flex-shrink: 0;
  line-height: 25px;
  height: 25px;
  display: flex;
  margin-left: 5px;
  padding-left: 1px;
  &:hover {
    background: ${lighten(0.9, 'black')};
    transition: 0.5s;
  }
  &:focus {
    outline: none;
  }
  font-weight: bold;
`;

const Name = styled.div`
  padding-left: 5px;
`;

function IconButton({ name, icon, color, inverse }) {
  return (
    <IconButtonContainer color={color} inverse={inverse}>
      <Icon>{icon && icon}</Icon>
      <Name>{name && name}</Name>
    </IconButtonContainer>
  );
}

export default IconButton;
