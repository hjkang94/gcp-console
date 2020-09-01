import React from 'react';
import { VmInstances, About, Configuration, Applications, Storage } from 'pages';
import { MdDescription, MdDeviceHub } from 'react-icons/md';
import { SiNintendogamecube, SiJsonwebtokens } from 'react-icons/si';

export default {
  items: [
    {
      name: 'Compute Engine',
      path: '/vm',
      icon: <SiJsonwebtokens />,
      items: [
        {
          name: 'VM instances',
          path: '/vm',
          component: VmInstances,
          icon: <MdDescription />,
        },
        {
          name: 'Instances groups',
          path: '/about',
          component: About,
          icon: <MdDeviceHub />,
        },
        {
          name: 'Instances templates',
          path: '/about1',
          component: About,
          icon: <MdDescription />,
        },
      ],
    },
    {
      name: 'Kubernetes Engine',
      path: '/configuration',
      icon: <SiNintendogamecube />,
      items: [
        {
          name: 'Configuration',
          path: '/configuration',
          component: Configuration,
          icon: <MdDescription />,
        },
        {
          name: 'Applications',
          path: '/applications',
          component: Applications,
          icon: <MdDeviceHub />,
        },
        {
          name: 'Storage',
          path: '/storage',
          component: Storage,
          icon: <MdDescription />,
        },
      ],
    },
  ],
};
