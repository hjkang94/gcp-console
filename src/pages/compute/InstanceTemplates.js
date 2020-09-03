import React, { useState, useEffect } from 'react';
import { ContentContainer, TableContainer, Container } from 'utils/commonStyle';
import { Search, Table } from 'components';
import { templates } from 'data';
import { Topbar } from 'components/layout';

const headers = [
  {
    key: 'name',
    text: 'Name',
  },
  {
    key: 'machineType',
    text: 'Machine type',
  },
  {
    key: 'Image',
    text: 'image',
  },
  {
    key: 'diskType',
    text: 'Disk type',
  },
  {
    key: 'placementPolicy',
    text: 'Placement Policy',
  },
  {
    key: 'inUseBy',
    text: 'In use by',
  },
  {
    key: 'creationTime',
    text: 'Creation time',
  },
];

const topData = ['create', 'refresh', 'copy', 'delete', 'show', 'learn'];

function InstanceTemplates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      templates.map(data => {
        data.isChecked = false;
        return data;
      })
    );
  }, []);

  return (
    <Container>
      <Topbar data={topData} />
      <ContentContainer>
        <Search text="Filter instance templates" />
        <TableContainer>
          <Table headers={headers} datas={data} setData={setData} />
        </TableContainer>
      </ContentContainer>
    </Container>
  );
}

export default InstanceTemplates;
