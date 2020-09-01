import React from 'react';
import styled from 'styled-components';
import { IconButton } from 'components';
import theme from 'theme';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 55px;
  max-width: 512px;
  width: 100%;
  -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`;

const CardContainer = styled.div`
  padding: 20px 16px;
`;

const Text = styled.span`
  color: ${props => props.color || props.theme.font.default};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 16px;
  margin-bottom: 4px;
`;

const Title = styled.div`
  color: black;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 32px;
  margin-bottom: 12px;
`;

const Button = styled.div`
  border-top: 1px solid ${props => props.theme.border.default};
  padding: 12px;
`;

const MoreButton = styled.a`
  color: ${props => props.theme.default};
  font-size: 12px;
  margin-left: 5px;
`;

function CardMessage({ data }) {
  return (
    <Container>
      <CardContainer>
        <Text color={theme.font.light}>{data.subTitle}</Text>
        <Title>{data.title}</Title>
        <Text>{data.description}</Text>
        {data.descButton && <MoreButton href="">{data.descButton}</MoreButton>}
      </CardContainer>
      <Button>
        <IconButton name={data.button} color={theme.default} />
      </Button>
    </Container>
  );
}

export default CardMessage;
