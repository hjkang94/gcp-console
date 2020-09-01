import React from 'react';
import { ContentContainer, Container } from 'utils/CommonStyle';
import { Topbar } from 'components/layout';

const topData = { button: { refresh: true } };
function About() {
  return (
    <Container>
      <Topbar data={topData} />
      <ContentContainer>
        <div>dddddddddddddddd</div>
      </ContentContainer>
    </Container>
  );
}

export default About;
