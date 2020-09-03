import React from 'react';
import { ContentContainer, Container } from 'utils/commonStyle';
import { CardMessage } from 'components';
import { Topbar } from 'components/layout';

const topData = ['refresh', 'delete'];
const data = {
  subTitle: 'Kubernetes Engine',
  title: 'Persistent volume claims',
  description: 'Persistent volume claims are a way of letting pods access the persistent volumes.',
  button: 'LEARN MORE',
};

function Storage() {
  return (
    <Container>
      <Topbar data={topData} />
      <ContentContainer>
        <CardMessage data={data} />
      </ContentContainer>
    </Container>
  );
}

export default Storage;
