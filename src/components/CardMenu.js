import React from 'react';
import styled from 'styled-components';
import { CardItem, MenuIcon } from 'utils/commonStyle';
import { Button } from 'components';

const Card = styled.div`
  margin-top: 30px;
  > div {
    font-size: ${props => props.theme.font.xs};
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
  font-size: ${props => props.theme.font.xs};
`;

const LiIcon = styled(MenuIcon)`
  font-size: ${props => props.theme.font.md};
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
      {data.map((row, i) => (
        <Li key={i}>
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
