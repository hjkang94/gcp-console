import React from 'react';
import { TitleBar, SideMenu } from 'components/layout';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  &,
  & * {
    box-sizing: border-box;
  }
  border-right: 1px solid ${props => props.theme.border.default};
  @media (max-width: 768px) {
    * {
      display: none;
      height: 100%;
    }
  }
`;

const TopMenu = styled.div`
  display: flex;
  height: 47px;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  > div {
    background: white;
    border-bottom: 1px solid ${props => props.theme.border.default};
  }
  line-height: 47px;
  align-items: center;
`;

const SideContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  width: 240px;
`;

function Default({ items }) {
  return (
    <Container>
      <TopMenu>
        <TitleBar />
      </TopMenu>
      <SideContainer>
        <SideMenu menus={items} />
      </SideContainer>
    </Container>
  );
}

export default Default;
