import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;

const Text = styled.div`
  color: ${props => (props.color ? props.theme.font.light : 'none')};
  white-space: pre-wrap;
  font-size: ${props => (props.color ? '12px' : '14px')};
  padding: 5px;
  line-height: 150%;
`;

function Description({ color, text }) {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
}

export default Description;
