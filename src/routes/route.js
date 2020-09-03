import React from 'react';
import {
  VmInstances,
  Configuration,
  Applications,
  Storage,
  InstanceTemplates,
  InstanceGroups,
} from 'pages';
import { MdDescription, MdDeviceHub } from 'react-icons/md';
import { SiNintendogamecube, SiJsonwebtokens } from 'react-icons/si';

export default {
  items: [
    {
      name: 'Compute Engine',
      path: '/compute/instance',
      icon: <SiJsonwebtokens />,
      items: [
        {
          name: 'VM instances',
          path: '/compute/instance',
          component: VmInstances,
          icon: <MdDescription />,
        },
        {
          name: 'Instances groups',
          path: '/compute/group',
          component: InstanceGroups,
          icon: <MdDeviceHub />,
        },
        {
          name: 'Instances templates',
          path: '/compute/template',
          component: InstanceTemplates,
          icon: <MdDescription />,
        },
      ],
    },
    {
      name: 'Kubernetes Engine',
      path: '/kubernetes/configuration',
      icon: <SiNintendogamecube />,
      items: [
        {
          name: 'Configuration',
          path: '/kubernetes/configuration',
          component: Configuration,
          icon: <MdDescription />,
        },
        {
          name: 'Applications',
          path: '/kubernetes/application',
          component: Applications,
          icon: <MdDeviceHub />,
        },
        {
          name: 'Storage',
          path: '/kubernetes/storage',
          component: Storage,
          icon: <MdDescription />,
        },
      ],
    },
  ],
};
