import React from 'react';
import styled from 'styled-components';
import { Title, Container } from 'utils/CommonStyle';
import { IconButton } from 'components';
import {
  MdAddBox,
  MdPersonAdd,
  MdFileDownload,
  MdRefresh,
  MdPlayArrow,
  MdStop,
  MdPause,
  MdRotateRight,
  MdDelete,
} from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { matchPath } from 'react-router';
import routes from 'routes/route';
import { useLocation } from 'react-router-dom';

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 47px;
  position: relative;
  top: 0;
  z-index: 1000;
  background: white;
  border-bottom: 1px solid ${props => props.theme.border.default};
  line-height: 47px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LeftMenuGroup = styled.div`
  display: flex;
  margin-left: 20px;
`;

const CenterMenuGroup = styled.div`
  display: flex;
`;

const RightMenuGroup = styled.div`
  border-left: 1px solid ${props => props.theme.border.default};
  margin-right: 10px;
  display: flex;
  margin-left: auto;
`;

function Topbar({ data }) {
  const pathname = useLocation().pathname;
  let title = '';

  routes.items.forEach(route => {
    const check = route.items.find(item => matchPath(pathname, item.path));
    if (check) {
      title = check.name;
    }
  });

  return (
    <TopContainer>
      <Title>{title}</Title>
      <LeftMenuGroup>
        {data.button.create && <IconButton name="CREATE" icon={<MdAddBox />} />}
        {data.button.import && <IconButton name="IMPORT" icon={<MdFileDownload />} />}
        {data.button.refresh && <IconButton name="REFRESH" icon={<MdRefresh />} />}
      </LeftMenuGroup>

      <CenterMenuGroup>
        {data.button.play && <IconButton icon={<MdPlayArrow />} color="gray" />}
        {data.button.stop && <IconButton icon={<MdStop />} color="gray" />}
        {data.button.pause && <IconButton icon={<MdPause />} color="gray" />}
        {data.button.rotate && <IconButton icon={<MdRotateRight />} color="gray" />}
        {data.button.delete && <IconButton name="DELETE" icon={<MdDelete />} color="gray" />}
      </CenterMenuGroup>

      <RightMenuGroup>
        {data.button.manage && <IconButton name="MANAGE ACCESS" icon={<MdPersonAdd />} />}
        {data.button.show && <IconButton name="SHOW INFO PANEL" />}
        {data.button.learn && <IconButton name="LEARN" icon={<FaGraduationCap />} />}
      </RightMenuGroup>
    </TopContainer>
  );
}

export default Topbar;
