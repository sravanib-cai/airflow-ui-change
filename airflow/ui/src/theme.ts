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

/*
  Global themes for all Chakra UI components in the app
*/

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  fontSizes: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '20px',
    '3xl': '24px',
    '4xl': '28px',
    '5xl': '36px',
    '6xl': '48px',
  },
  styles: {
    global: {
      body: {
        overflow: 'hidden',
      },
    },
  },
  components: {
    Button: {
      variants: {
        icon: {
          bg: 'inherit',
          color: 'white',
          _hover: {
            color: 'gray.400'
          },
          _focus: {
            boxShadow: 'none',
          },
          _active: {
            bg: 'gray.300',
          },
          _disabled: {
            color: 'gray.600'
          }
    },
    list: {
      bg: 'gray.600',
      color: 'white',
      fontWeight: '500',
      height: 'auto',
      borderRadius: 0,
      px: 5,
      py: 1,
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        bg: 'gray.900'
      },
      _active: {
        bg: 'gray.800'
      },
    }
      },
      defaultProps: {
        colorScheme: 'blue',
      },
    },
    IconButton: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
    Switch: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
  },
});

export default theme;
