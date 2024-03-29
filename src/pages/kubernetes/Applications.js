import React from 'react';
import { ContentContainer, Container } from 'utils/commonStyle';
import { CardMessage } from 'components';
import { Topbar } from 'components/layout';

const topData = ['refresh'];
const data = {
  subTitle: 'Kubernetes Engine',
  title: 'Applications',
  description:
    'Kubernetes Applications collect containers, services and configuration that are managed together.',
  descButton: 'Learn more',
  button: 'DEPLOY FROM MARKETPLACE',
};

function Applications() {
  return (
    <Container>
      <Topbar data={topData} />
      <ContentContainer>
        <CardMessage data={data} />
      </ContentContainer>
    </Container>
  );
}

export default Applications;
