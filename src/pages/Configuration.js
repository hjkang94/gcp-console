import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NoPaddingContainer, TableContainer, Container } from 'utils/commonStyle';
import { SubToolbar, Description, Notification, TopTable } from 'components';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@material-ui/core';
import { configurationData } from 'data';
import { Topbar } from 'components/layout';
import { allChecked, checked } from 'utils/util';

const THeadContainer = styled(TableHead)`
  background-color: ${props => props.theme.danger};
`;

function TableComponent() {
  const [page, setPage] = useState(0);
  const [confData, setConfData] = useState([]);
  const [allData, setAllData] = useState(false);

  useEffect(() => {
    setConfData(
      configurationData.map(data => {
        data.isChecked = false;
        return data;
      })
    );
  }, []);

  const handleChangePage = newPage => {
    setPage(newPage);
  };

  return (
    <div>
      <TopTable name="Is system object: False" text="Filter secrets and config maps" />
      <Table size="small" aria-label="a dense table">
        <THeadContainer>
          <TableRow>
            <TableCell padding="checkbox">
              <input
                type="checkbox"
                onChange={e => {
                  setAllData(!allData);
                  setConfData(allChecked(confData, e.target.checked));
                }}
                checked={allData}
              ></input>
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Namespace</TableCell>
            <TableCell>Cluster</TableCell>
          </TableRow>
        </THeadContainer>
        <TableBody>
          {confData.map(row => (
            <TableRow key={row.name}>
              <TableCell padding="checkbox">
                <input
                  onChange={event => {
                    if (!event.target.checked) {
                      setAllData(false);
                    }
                    setConfData(checked(confData, row.id, event.target.checked));
                  }}
                  type="checkbox"
                  checked={row.isChecked}
                ></input>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.namespace}</TableCell>
              <TableCell>{row.cluster}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={100}
        rowsPerPage={5}
        page={page}
        onChangePage={handleChangePage}
      />
    </div>
  );
}

const topData = { name: 'Configuration', button: { refresh: true, delete: true } };
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

  return (
    <Container>
      <Topbar data={topData} />
      <SubToolbar />
      <NoPaddingContainer>
        <Description text={description} />
        {dismiss && <Notification text={notification} dismiss={dismiss} setDismiss={setDismiss} />}
        <TableContainer>
          <TableComponent />
        </TableContainer>
      </NoPaddingContainer>
    </Container>
  );
}

export default Configuration;
