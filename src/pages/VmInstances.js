import React from 'react';
import { ContentContainer, TableContainer, TableMenuIcon, Container } from 'utils/CommonStyle';
import { Search, CardMenu } from 'components';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { vmInstanceData, vmActionData } from 'data';
import { MdCheckCircle } from 'react-icons/md';
import { Topbar } from 'components/layout';

function TableComponent() {
  return (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <input type="checkbox" />
          </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Zone</TableCell>
          <TableCell>Recommendation</TableCell>
          <TableCell>In use by</TableCell>
          <TableCell>Internal IP</TableCell>
          <TableCell>External IP</TableCell>
          <TableCell>Connect</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {vmInstanceData.map(row => (
          <TableRow key={row.name}>
            <TableCell padding="checkbox">
              <input type="checkbox" />
            </TableCell>
            <TableCell>
              <TableMenuIcon>
                <MdCheckCircle />
              </TableMenuIcon>
              {row.name}
            </TableCell>
            <TableCell>{row.zone}</TableCell>
            <TableCell>{row.recommendation}</TableCell>
            <TableCell>{row.inUseBy}</TableCell>
            <TableCell>{row.internalIp}</TableCell>
            <TableCell>{row.externalIp}</TableCell>
            <TableCell>ssh</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function VmInstances() {
  const topData = {
    name: 'Configuration',
    button: {
      create: true,
      import: true,
      play: true,
      stop: true,
      pause: true,
      rotate: true,
      refresh: true,
      delete: true,
      manage: true,
      show: true,
      learn: true,
    },
  };
  return (
    <Container>
      <Topbar data={topData} />
      <ContentContainer>
        <Search text="Filter VM instances" />
        <TableContainer>
          <TableComponent />
        </TableContainer>
        <CardMenu data={vmActionData} title="Related Actions" />
      </ContentContainer>
    </Container>
  );
}

export default VmInstances;
