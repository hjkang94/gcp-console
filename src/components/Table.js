import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@material-ui/core';
import { MdCheckCircle } from 'react-icons/md';
import { TableMenuIcon } from 'utils/commonStyle';
import { TopTable } from 'components';
import styled from 'styled-components';
import theme from 'theme';

const THeadContainer = styled(TableHead)`
  background-color: ${props => props.color};
`;

function TableComponent(props) {
  const { headers, datas, setData, topTable, paging } = props;
  const [allData, setAllData] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {topTable && (
        <TopTable btnText="Is system object: False" inputText="Filter secrets and config maps" />
      )}
      <Table size="small" aria-label="a dense table">
        {headers && (
          <Thead
            headers={headers}
            datas={datas}
            setAllData={setAllData}
            setData={setData}
            allData={allData}
            color={topTable ? theme.danger : ''}
          />
        )}
        {datas && (
          <Tbody datas={datas} headers={headers} setAllData={setAllData} setData={setData} />
        )}
      </Table>
      {paging && (
        <TablePagination
          component="div"
          count={datas.length}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10, 30, 50]}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
}

function Thead(props) {
  const { allData, datas, headers, setAllData, setData, color } = props;
  return (
    <THeadContainer color={color}>
      <TableRow>
        <TableCell padding="checkbox">
          <input
            type="checkbox"
            onChange={e => {
              setAllData(!allData);
              setData(
                datas.map(item => {
                  item.isChecked = e.target.checked;
                  return item;
                })
              );
            }}
            checked={allData}
          ></input>
        </TableCell>
        {headers.map((item, i) => (
          <TableCell key={i}>{item.text}</TableCell>
        ))}
      </TableRow>
    </THeadContainer>
  );
}

function Tbody(props) {
  const { datas, headers, setAllData, setData } = props;
  return (
    <TableBody>
      {datas.map((row, i) => (
        <TableRow key={i}>
          <TableCell padding="checkbox">
            <input
              onChange={event => {
                const checked = event.target.checked;
                if (!checked) {
                  setAllData(false);
                }
                setData(
                  datas.map(item => {
                    if (item.id === row.id) {
                      item.isChecked = checked;
                    }
                    return item;
                  })
                );
              }}
              type="checkbox"
              checked={row.isChecked}
            ></input>
          </TableCell>
          {headers.map((item, i) => (
            <TableCell key={i}>
              {item.icon && (
                <TableMenuIcon>
                  <MdCheckCircle />
                </TableMenuIcon>
              )}
              {row[item.key]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TableComponent;
