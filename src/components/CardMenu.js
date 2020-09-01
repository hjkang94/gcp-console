import React from 'react';
import styled from 'styled-components';
import { CardItem, MenuIcon } from 'utils/CommonStyle';
import { Button } from 'components';

const Card = styled.div`
  margin-top: 80px;
  > div {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

const Li = styled.li`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: table-cell;
  padding: 15px 15px;
  width: 20%;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.border.default};
  }
  > div {
    display: flex;
  }
`;

const LiTitle = styled.div`
  font-weight: bold;
`;

const LiDescription = styled.div`
  color: ${props => props.theme.font.danger};
  padding-top: 10px;
`;

const LiGroup = styled.div`
  font-size: 12px;
`;

const LiIcon = styled(MenuIcon)`
  font-size: 20px;
  color: ${props => props.theme.default};
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CardContainer({ data, title }) {
  return (
    <Card>
      <CardTitle>
        <div>{title}</div>
        <Button name="Dismiss" />
      </CardTitle>
      <CardMenuContainer data={data} />
    </Card>
  );
}

function CardMenuContainer({ data }) {
  return (
    <CardItem>
      {data.map(row => (
        <Li key={row.title}>
          <div>
            <div>
              <LiIcon>{row.icon}</LiIcon>
            </div>
            <LiGroup>
              <LiTitle>{row.title}</LiTitle>
              <LiDescription>{row.description}</LiDescription>
            </LiGroup>
          </div>
        </Li>
      ))}
    </CardItem>
  );
}

function CardMenu({ data, title }) {
  return <CardContainer data={data} title={title} />;
}

export default CardMenu;
