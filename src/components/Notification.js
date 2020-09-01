import React from 'react';
import styled from 'styled-components';
import { MdInfo } from 'react-icons/md';
import { Icon } from 'utils/commonStyle';
import { IconButton } from 'components';
import theme from 'theme';

const NotificationContainer = styled.div`
  background-color: ${props => props.theme.danger};
  margin: 10px;
  padding: 20px;
  font-size: 13px;
  border-radius: 5px;
  display:flex;
}
`;

const Name = styled.div`
  padding-left: 10px;
  padding-top: 3px;
`;

const IconButtonContainer = styled.div`
  margin-left: auto;
`;

function Notification({ text, setDismiss }) {
  function handleClick(dismiss) {
    setDismiss(dismiss);
  }
  return (
    <NotificationContainer>
      <Icon>
        <MdInfo />
      </Icon>
      <Name>{text}</Name>
      <IconButtonContainer onClick={() => handleClick(false)}>
        <IconButton name="DISMISS" color={theme.default} />
      </IconButtonContainer>
    </NotificationContainer>
  );
}

export default Notification;
