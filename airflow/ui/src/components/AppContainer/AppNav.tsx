/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import {
  FiActivity,
  FiTool,
  FiBookOpen,
  FiGlobe,
  FiSettings,
  FiUsers,
} from 'react-icons/fi';

import { useAuthContext } from 'providers/auth/context';

import PinwheelLogo from 'components/icons/PinwheelLogo';
import PipelineIcon from 'components/icons/PipelineIcon';

import AppNavBtn from './AppNavBtn';

interface Props {
  bodyBg: string;
  overlayBg: string;
}

const AppNav: React.FC<Props> = ({ bodyBg, overlayBg }) => {
  const { hasValidAuthToken } = useAuthContext();

  const navItems = [
    {
      label: 'Pipelines',
      icon: PipelineIcon,
      path: '/pipelines/create-and-update',
      activePath: '/pipelines',
    },
    {
      label: 'Developer',
      icon: FiTool,
      path: '/developer/data-lake-explorer',
      activePath: '/developer',
    },
    {
      label: 'Monitor',
      icon: FiActivity,
      path: '/monitor/audit-logs',
      activePath: '/monitor',
    },
    // {
    //   label: 'Cluster Config',
    //   icon: FiGlobe,
    //   path: '/clusterconfig',
    //   activePath: '/clusterconfig',
    // },
    {
      label: 'Configurations',
      icon: FiSettings,
      path: '/config/clusterconfig',
      activePath: '/config',
    },
    {
      label: 'Security',
      icon: FiUsers,
      path: '/security',
      activePath: '/security',
    },
    {
      label: 'Docs',
      icon: FiBookOpen,
      path: '/docs/providers',
      activePath: '/docs',
    },
  ];

  return (
    <Box
      as="nav"
      role="navigation"
      width="56px"
      backgroundColor={overlayBg}
      borderRightWidth="1px"
      borderRightColor={bodyBg}
      display="flex"
      flexDirection="column"
    >
      <Box
        as={Link}
        to="/"
        aria-label="Back to home"
        width="56px"
        height="56px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{
          transformOrigin: '28px 28px',
        }}
      >
        <PinwheelLogo />
      </Box>
      {hasValidAuthToken && navItems.map((item) => (
        <AppNavBtn key={item.label} navItem={item} />
      ))}
    </Box>
  );
};

export default AppNav;
