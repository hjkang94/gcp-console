import React from 'react';
import { ContentContainer, Container } from 'utils/commonStyle';
import { Topbar } from 'components/layout';

const topData = ['refresh'];
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
