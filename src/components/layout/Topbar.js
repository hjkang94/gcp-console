import React from 'react';
import styled from 'styled-components';
import { Title } from 'utils/commonStyle';
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
  MdContentCopy,
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

const RightMenuGroup = styled.div`
  border-left: 1px solid ${props => props.theme.border.default};
  margin-right: 10px;
  display: flex;
  margin-left: auto;
`;

const items = [
  {
    key: 'create',
    text: 'CREATE',
    icon: <MdAddBox />,
  },
  {
    key: 'import',
    text: 'IMPORT',
    icon: <MdFileDownload />,
  },
  {
    key: 'refresh',
    text: 'REFRESH',
    icon: <MdRefresh />,
  },
  {
    key: 'copy',
    text: 'COPY',
    icon: <MdContentCopy />,
  },
  {
    key: 'play',
    text: undefined,
    icon: <MdPlayArrow />,
    color: 'gray',
  },
  {
    key: 'stop',
    text: undefined,
    icon: <MdStop />,
    color: 'gray',
  },
  {
    key: 'pause',
    text: undefined,
    icon: <MdPause />,
    color: 'gray',
  },
  {
    key: 'rotate',
    text: undefined,
    icon: <MdRotateRight />,
    color: 'gray',
  },
  {
    key: 'delete',
    text: 'DELETE',
    icon: <MdDelete />,
    color: 'gray',
  },
  {
    key: 'manage',
    text: 'MANAGE ACCESS',
    icon: <MdPersonAdd />,
    align: 'right',
  },
  {
    key: 'show',
    text: 'SHOW INFO PANEL',
    icon: <MdAddBox />,
    align: 'right',
  },
  {
    key: 'learn',
    text: 'LEARN',
    icon: <FaGraduationCap />,
    align: 'right',
  },
];

function Topbar({ data }) {
  const buttons = data ? items.filter(item => data.includes(item.key)) : [];
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
        {buttons
          .filter(button => button.align !== 'right')
          .map((button, i) => (
            <IconButton key={i} name={button.text} icon={button.icon} color={button.color} />
          ))}
      </LeftMenuGroup>

      <RightMenuGroup>
        {buttons
          .filter(button => button.align === 'right')
          .map((button, i) => (
            <IconButton key={i} name={button.text} icon={button.icon} color={button.color} />
          ))}
      </RightMenuGroup>
    </TopContainer>
  );
}

export default Topbar;
