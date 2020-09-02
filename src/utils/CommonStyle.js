import styled from 'styled-components';

export const Title = styled.div`
  font-size: 17px;
  padding-left: 20px;
  font-weight: bold;
  color: #353535;
  display: flex;
  min-width: 150px;
`;

export const Container = styled.div`
  width: 100%;
  min-width: 700px;
`;

export const ContentContainer = styled.div`
  padding: 20px 30px 0 30px;
  overflow-y: auto;
  height: calc(100% - 70px);
`;

export const NoPaddingContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  height: calc(100% - 120px);
`;

export const MenuIcon = styled.div`
  display: inline-flex;
  min-width: 40px;
  flex-shrink: 0;
`;

export const TableContainer = styled.div`
  margin-top: 20px;
  th,
  td {
    font-size: 12px;
  }
  th {
    font-weight: bold;
  }
`;

export const CardItem = styled.ul`
  border: 1px solid #e7e7e7;
  margin: 0 0 20px;
  width: 100%;
  padding: 0px;
`;

export const TableMenuIcon = styled.span`
  padding-right: 10px;
  color: ${props => props.theme.font.success};
  font-size: 15px;
  position: relative;
  top: 3px;
`;

export const Icon = styled.div`
  position: relative;
  top: 2px;
  font-size: 17px;
`;

export const TopTable = styled.div`
  height: 40px;
  line-height: 40px;
  border-top: 1px solid ${props => props.theme.border.default};
  border-bottom: 1px solid ${props => props.theme.border.default};
`;
