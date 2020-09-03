import React, { useState, useEffect } from 'react';
import { ContentContainer, TableContainer, Container } from 'utils/commonStyle';
import { Search, CardMenu, Table } from 'components';
import { vmInstances, vmActions } from 'data';
import { MdCheckCircle } from 'react-icons/md';
import { Topbar } from 'components/layout';

const headers = [
  {
    key: 'name',
    text: 'Name',
    icon: <MdCheckCircle />,
  },
  {
    key: 'zone',
    text: 'Zone',
  },
  {
    key: 'recommendation',
    text: 'Recommendation',
  },
  {
    key: 'inUseBy',
    text: 'In Use By',
  },
  {
    key: 'internalIp',
    text: 'Internal IP',
  },
  {
    key: 'externalIp',
    text: 'External IP',
  },
];

const topData = [
  'create',
  'import',
  'refresh',
  'play',
  'stop',
  'pause',
  'rotate',
  'delete',
  'manage',
  'show',
  'learn',
];

function VmInstances() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      vmInstances.map(data => {
        data.isChecked = false;
        return data;
      })
    );
  }, []);

  return (
    <Container>
      <Topbar data={topData} />
      <ContentContainer>
        <Search text="Filter VM instances" />
        <TableContainer>
          <Table headers={headers} datas={data} setData={setData} />
        </TableContainer>
        <CardMenu data={vmActions} title="Related Actions" />
      </ContentContainer>
    </Container>
  );
}

export default VmInstances;
