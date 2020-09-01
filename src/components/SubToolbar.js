import React from 'react';
import styled from 'styled-components';
import { SelectBox, IconButton } from 'components';

const Container = styled.div`
  select {
    margin-left: 20px;
  }
  display: flex;
  border-bottom: 1px solid ${props => props.theme.border.default};
  padding-bottom: 20px;
  position: relative;
  background: white;
  border-bottom: 1px solid ${props => props.theme.border.default};
  line-height: 47px;
  background-color: white;
  width: 100%;
  padding-top: 20px;
`;

const ButtonContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const clusters = ['Cluster1', 'Cluster2', 'Cluster3'];
const namespaces = ['Namespace1', 'Namespace2', 'Namespace3'];

function SubToolbar() {
  return (
    <Container>
      <SelectBox items={clusters} />
      <SelectBox items={namespaces} />
      <ButtonContainer>
        <IconButton name="RESET" color="gray" />
        <IconButton name="SAVE" color="gray" />
        <IconButton name="BETA" color="white" inverse="#455a64" />
      </ButtonContainer>
    </Container>
  );
}

export default SubToolbar;
