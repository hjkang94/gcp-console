import React, { useState, useEffect } from 'react';
import { NoPaddingContainer, TableContainer, Container } from 'utils/commonStyle';
import { SubToolbar, Description, Notification, Table } from 'components';
import { configurationData } from 'data';
import { Topbar } from 'components/layout';

const headers = [
  {
    key: 'name',
    text: 'Name',
  },
  {
    key: 'type',
    text: 'Type',
  },
  {
    key: 'namespace',
    text: 'Namespace',
  },
  {
    key: 'cluster',
    text: 'Cluster',
  },
];

const topData = ['refresh', 'delete'];

const description = `
  Secrets are sensitive pieces of information, such as passwords, keys, and tokens.
  ConfigMaps are designed to store information that is not sensitive, such as environment
  variables, command-line arguments, and configuration files.
`;

const notification = `
  Secrets respect access control and are not visible to users without read permissions
`;

function Configuration() {
  const [dismiss, setDismiss] = useState(true);
  const [confData, setData] = useState([]);

  useEffect(() => {
    setData(
      configurationData.map(data => {
        data.isChecked = false;
        return data;
      })
    );
  }, []);

  return (
    <Container>
      <Topbar data={topData} />
      <SubToolbar />
      <NoPaddingContainer>
        <Description text={description} />
        {dismiss && <Notification text={notification} dismiss={dismiss} setDismiss={setDismiss} />}
        <TableContainer>
          <Table
            headers={headers}
            datas={confData}
            setData={setData}
            topTable={true}
            paging={true}
          />
        </TableContainer>
      </NoPaddingContainer>
    </Container>
  );
}

export default Configuration;
