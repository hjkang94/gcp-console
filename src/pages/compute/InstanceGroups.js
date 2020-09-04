import React, { useState, useEffect } from 'react';
import { ContentContainer, TableContainer, Container } from 'utils/commonStyle';
import { Search, Table, Description } from 'components';
import { groups } from 'data';
import { MdCheckCircle } from 'react-icons/md';
import { Topbar } from 'components/layout';
import theme from 'theme';

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
    key: 'instances',
    text: 'Instances',
  },
  {
    key: 'template',
    text: 'Template',
  },
  {
    key: 'groupType',
    text: 'Group type',
  },
  {
    key: 'creationTime',
    text: 'Creation time',
  },
  {
    key: 'recommendation',
    text: 'Recommendation',
  },
  {
    key: 'autoscaling',
    text: 'Autoscaling',
  },
  {
    key: 'inUseBy',
    text: 'In use by',
  },
];

const topData = ['create', 'refresh', 'delete', 'learn'];
const description = `
  Instance groups are collections of VM instances that use load balancing and
  automated services, like autoscaling and autohealing.
`;

function InstanceGroups() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      groups.map(data => {
        data.isChecked = false;
        return data;
      })
    );
  }, []);

  return (
    <Container>
      <Topbar data={topData} />
      <ContentContainer>
        <Description color={theme.font.light} text={description} />
        <Search text="Filter resources" />
        <TableContainer>
          <Table headers={headers} datas={data} setData={setData} />
        </TableContainer>
      </ContentContainer>
    </Container>
  );
}

export default InstanceGroups;
