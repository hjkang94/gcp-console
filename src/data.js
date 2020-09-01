import {
  MdCreditCard,
  MdEqualizer,
  MdReorder,
  MdSwapVerticalCircle,
  MdBorderClear,
} from 'react-icons/md';
import React from 'react';

export const vmInstanceData = [
  {
    name: 'gcp-console-test-hjkang',
    zone: 'asia-northeast1-b',
    recommendation: '',
    inUseBy: 'k8s-1-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
  {
    name: 'gcp-console-test',
    zone: 'asia-northeast1-b2',
    recommendation: '',
    inUseBy: 'k8s-2-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
  {
    name: 'gcp-console-test-aaa',
    zone: 'asia-northeast1-b3',
    recommendation: '',
    inUseBy: 'k8s-3-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
  {
    name: 'gcp-console-test-bbb',
    zone: 'asia-northeast1-b4',
    recommendation: '',
    inUseBy: 'k8s-4-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
  {
    name: 'gcp-console-test-ccc',
    zone: 'asia-northeast1-b5',
    recommendation: '',
    inUseBy: 'k8s-5-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
];

export const vmActionData = [
  {
    title: 'View Billing Report',
    description: 'View and manage your Compute Engine billing',
    icon: <MdCreditCard />,
  },
  {
    title: 'Monitor VMs',
    description: 'View outlier VMs across metrics like CPU and Network',
    icon: <MdEqualizer />,
  },
  {
    title: 'Explore VM Logst',
    description: 'View, search, analyze, and download VM instance logs',
    icon: <MdReorder />,
  },
  {
    title: 'Setup Firewall Rules',
    description: 'Control traffic to and from a VM instance',
    icon: <MdBorderClear />,
  },
  {
    title: 'Patch Management',
    description: 'Schedule patch updates and view patch compliance on VM instances',
    icon: <MdSwapVerticalCircle />,
  },
];

export const configurationData = [
  {
    name: 'hjkang-config-1',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster1',
  },
  {
    name: 'hjkang-config-2',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster2',
  },
  {
    name: 'hjkang-config-3',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster3',
  },
  {
    name: 'hjkang-config-4',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster4',
  },
  {
    name: 'hjkang-config-5',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster5',
  },
  {
    name: 'hjkang-config-6',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster6',
  },
  {
    name: 'hjkang-config-7',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster7',
  },
  {
    name: 'hjkang-config-8',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster8',
  },
  {
    name: 'hjkang-config-9',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster9',
  },
  {
    name: 'hjkang-config-10',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster10',
  },
];
