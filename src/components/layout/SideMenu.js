import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { lighten } from 'polished';
import { MenuIcon } from 'utils/CommonStyle';

const Container = styled.div`
  width: 240px;
  height: 100%;
`;

const NavLinkContainer = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.font.default};
  &.active {
    display: block;
    color: ${props => props.theme.default};
    div {
      background: #f0f5fe;
    }
  }
  &:hover {
    div {
      background: ${lighten(0.9, 'black')};
      transition: 0.5s;
    }
  }
`;

const List = styled.div`
  width: 240px;
  height: 100%;
  div {
    font-size: 14px;
  }
`;

const ListItem = styled.div`
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.border.default};
  }
`;

const MainListItem = styled.div`
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  align-items: center;
  color: #656565;
  font-weight: bold;
`;

const SubListItem = styled.div`
  width: 100%;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  padding: 0 23px;
  align-items: center;
`;

const MenuName = styled.div`
  display: inline-flex;
`;

function SideMenu({ menus }) {
  return (
    <Container>
      <List>
        {menus.items.map(menu => (
          <ListItem key={menu.name}>
            <MainListItem>
              <MenuName>{menu.name}</MenuName>
            </MainListItem>
            {menu.items.map((item, i) => (
              <NavLinkContainer key={i} to={item.path} activeClassName="active">
                <SubListItem key={item.name}>
                  <MenuIcon>{item.icon}</MenuIcon>
                  <MenuName>{item.name}</MenuName>
                </SubListItem>
              </NavLinkContainer>
            ))}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default SideMenu;
