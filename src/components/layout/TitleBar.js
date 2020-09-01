import React from 'react';
import styled from 'styled-components';
import { Title, Icon } from 'utils/commonStyle';
import { matchPath } from 'react-router';
import routes from 'routes/route';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    overflow: hidden;
  }
	body {
		padding: 0;
    margin: 0;
  }
  td, th {
    padding: 5px !important;
  }
`;

const TopContainer = styled.div`
  width: 240px;
`;

const Name = styled.div`
  padding-left: 10px;
`;

function TitleBar() {
  const pathname = useLocation().pathname;
  const title = routes.items.find(route =>
    route.items.includes(route.items.find(item => matchPath(pathname, item.path)))
  );

  return (
    <TopContainer>
      <GlobalStyle />
      <div>
        <Title>
          <Icon>{title && title.icon}</Icon>
          <Name>{title && title.name}</Name>
        </Title>
      </div>
    </TopContainer>
  );
}

export default TitleBar;
