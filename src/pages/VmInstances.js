import React, { useState, useEffect } from 'react';
import { ContentContainer, TableContainer, TableMenuIcon, Container } from 'utils/commonStyle';
import { Search, CardMenu } from 'components';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { vmInstanceData, vmActionData } from 'data';
import { MdCheckCircle } from 'react-icons/md';
import { Topbar } from 'components/layout';
import { allChecked, checked } from 'utils/util';

function TableComponent() {
  const [instanceData, setInstanceData] = useState([]);
  const [allData, setAllData] = useState(false);

  useEffect(() => {
    setInstanceData(
      vmInstanceData.map(data => {
        data.isChecked = false;
        return data;
      })
    );
  }, []);

  return (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <input
              type="checkbox"
              onChange={e => {
                setAllData(!allData);
                setInstanceData(allChecked(instanceData, e.target.checked));
              }}
              checked={allData}
            ></input>
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
        {instanceData.map(row => (
          <TableRow key={row.id}>
            <TableCell padding="checkbox">
              <input
                onChange={event => {
                  if (!event.target.checked) {
                    console.log('????????????');
                    setAllData(false);
                  }
                  setInstanceData(checked(instanceData, row.id, event.target.checked));
                }}
                type="checkbox"
                checked={row.isChecked}
              ></input>
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
