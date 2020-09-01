import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-bottom: 10px;
`;

const Text = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  padding: 10px;
  line-height: 150%;
`;

function Description({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

export default Description;
