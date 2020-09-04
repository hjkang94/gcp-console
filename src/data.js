import {
  MdCreditCard,
  MdEqualizer,
  MdReorder,
  MdSwapVerticalCircle,
  MdBorderClear,
} from 'react-icons/md';
import React from 'react';

export const vmInstances = [
  {
    id: '0',
    name: 'gcp-console-test-hjkang',
    zone: 'asia-northeast1-b',
    recommendation: '',
    inUseBy: 'k8s-1-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
  {
    id: '1',
    name: 'gcp-console-test',
    zone: 'asia-northeast1-b2',
    recommendation: '',
    inUseBy: 'k8s-2-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
  {
    id: '2',
    name: 'gcp-console-test-aaa',
    zone: 'asia-northeast1-b3',
    recommendation: '',
    inUseBy: 'k8s-3-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
  {
    id: '3',
    name: 'gcp-console-test-bbb',
    zone: 'asia-northeast1-b4',
    recommendation: '',
    inUseBy: 'k8s-4-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
  {
    id: '4',
    name: 'gcp-console-test-ccc',
    zone: 'asia-northeast1-b5',
    recommendation: '',
    inUseBy: 'k8s-5-hjkang',
    internalIp: '111.22.3.31',
    externalIp: '222.11.3.111',
  },
];

export const vmActions = [
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

export const configurations = [
  {
    id: '0',
    name: 'hjkang-config-1',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster1',
  },
  {
    id: '1',
    name: 'hjkang-config-2',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster2',
  },
  {
    id: '2',
    name: 'hjkang-config-3',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster3',
  },
  {
    id: '3',
    name: 'hjkang-config-4',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster4',
  },
  {
    id: '4',
    name: 'hjkang-config-5',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster5',
  },
  {
    id: '5',
    name: 'hjkang-config-6',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster6',
  },
  {
    id: '6',
    name: 'hjkang-config-7',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster7',
  },
  {
    id: '7',
    name: 'hjkang-config-8',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster8',
  },
  {
    id: '8',
    name: 'hjkang-config-9',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster9',
  },
  {
    id: '9',
    name: 'hjkang-config-10',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster10',
  },
  {
    id: '10',
    name: 'hjkang-config-11',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster11',
  },
  {
    id: '11',
    name: 'hjkang-config-12',
    type: 'Config',
    namespace: 'KHJTEST',
    cluster: 'hjkang-cluster12',
  },
];

export const templates = [
  {
    id: '0',
    name: 'hjkang-templates-1',
    machineType: '2 vCPUs, 4 GB',
    image: 'gke-00000-gke24-cos-u-11-11111-123-0-v123123-pre',
    diskType: 'Standard persistent disk',
    placementPolicy: 'No policy',
    inUseBy: 'hjkang-default-pool-123123',
    creationTime: 'Mar 1, 2020, 8:46:14 AM',
  },
  {
    id: '1',
    name: 'hjkang-templates-2',
    machineType: '2 vCPUs, 4 GB',
    image: 'gke-00000-gke24-cos-u-11-11111-123-0-v123123-pre',
    diskType: 'Standard persistent disk',
    placementPolicy: 'No policy',
    inUseBy: 'hjkang-default-pool-123123',
    creationTime: 'Mar 5, 2020, 8:46:14 AM',
  },
  {
    id: '2',
    name: 'hjkang-templates-3',
    machineType: '2 vCPUs, 4 GB',
    image: 'gke-11111-gke24-cos-u-11-11111-123-0-v123123-pre',
    diskType: 'Standard persistent disk',
    placementPolicy: 'No policy',
    inUseBy: 'hjkang-default-pool-123123',
    creationTime: 'Mar 10, 2020, 8:46:14 AM',
  },
  {
    id: '3',
    name: 'hjkang-templates-4',
    machineType: '2 vCPUs, 4 GB',
    image: 'gke-22222-gke24-cos-u-11-11111-123-0-v123123-pre',
    diskType: 'Standard persistent disk',
    placementPolicy: 'No policy',
    inUseBy: 'hjkang-default-pool-123123',
    creationTime: 'Mar 25, 2020, 8:46:14 AM',
  },
  {
    id: '4',
    name: 'hjkang-templates-5',
    machineType: '2 vCPUs, 4 GB',
    image: 'gke-33333-gke24-cos-u-11-11111-123-0-v123123-pre',
    diskType: 'Standard persistent disk',
    placementPolicy: 'No policy',
    inUseBy: 'hjkang-default-pool-123123',
    creationTime: 'Jun 23, 2020, 8:46:14 AM',
  },
  {
    id: '5',
    name: 'hjkang-templates-6',
    machineType: '2 vCPUs, 4 GB',
    image: 'gke-77777-gke24-cos-u-11-11111-123-0-v123123-pre',
    diskType: 'Standard persistent disk',
    placementPolicy: 'No policy',
    inUseBy: 'hjkang-default-pool-123123',
    creationTime: 'Mar 30, 2020, 8:46:14 AM',
  },
];

export const groups = [
  {
    id: '0',
    name: 'gke-cluste-default-pool-1',
    zone: 'asia-northeast1-b',
    instances: 2,
    template: 'gke-cluste-default-pool-1',
    groupType: 'Managed',
    creationTime: 'Jan 17, 2020, 2:51:49 PM',
    recommendation: '',
    autoscaling: 'No configuration',
    inUseBy: 'hjkang-cluster',
  },
  {
    id: '1',
    name: 'gke-cluste-default-pool-2',
    zone: 'asia-northeast1-b',
    instances: 2,
    template: 'gke-cluste-default-pool-2',
    groupType: 'Managed',
    creationTime: 'Jan 17, 2020, 5:51:49 PM',
    recommendation: '',
    autoscaling: 'No configuration',
    inUseBy: 'hjkang-cluster',
  },
  {
    id: '2',
    name: 'gke-cluste-default-pool-3',
    zone: 'asia-northeast1-c',
    instances: 2,
    template: 'gke-cluste-default-pool-3',
    groupType: 'Managed',
    creationTime: 'Jan 17, 2020, 7:51:49 PM',
    recommendation: '',
    autoscaling: 'No configuration',
    inUseBy: 'hjkang-cluster',
  },
  {
    id: '3',
    name: 'gke-cluste-default-pool-4',
    zone: 'asia-northeast1-a',
    instances: 2,
    template: 'gke-cluste-default-pool-4',
    groupType: 'Managed',
    creationTime: 'Jan 17, 2020, 8:51:49 PM',
    recommendation: '',
    autoscaling: 'No configuration',
    inUseBy: 'hjkang-cluster',
  },
  {
    id: '4',
    name: 'gke-cluste-default-pool-5',
    zone: 'asia-northeast1-a',
    instances: 2,
    template: 'gke-cluste-default-pool-5',
    groupType: 'Managed',
    creationTime: 'Jan 17, 2020, 9:51:49 PM',
    recommendation: '',
    autoscaling: 'No configuration',
    inUseBy: 'hjkang-cluster',
  },
  {
    id: '5',
    name: 'gke-cluste-default-pool-6',
    zone: 'asia-northeast1-c',
    instances: 2,
    template: 'gke-cluste-default-pool-6',
    groupType: 'Managed',
    creationTime: 'Jan 17, 2020, 2:51:49 PM',
    recommendation: '',
    autoscaling: 'No configuration',
    inUseBy: 'hjkang-cluster',
  },
];
