import React from 'react';
import styled from 'styled-components';
import { NoPaddingContainer, TableContainer, Container } from 'utils/CommonStyle';
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

const THeadContainer = styled(TableHead)`
  background-color: ${props => props.theme.danger};
`;

function TableComponent() {
  const [page, setPage] = React.useState(0);

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
              <input type="checkbox" />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Namespace</TableCell>
            <TableCell>Cluster</TableCell>
          </TableRow>
        </THeadContainer>
        <TableBody>
          {configurationData.map(row => (
            <TableRow key={row.name}>
              <TableCell padding="checkbox">
                <input type="checkbox" />
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
  const [dismiss, setDismiss] = React.useState(true);

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
