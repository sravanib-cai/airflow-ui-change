<!--
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 -->

# Airflow UI

## Run new version using:
- Run airflow locally in another terminal using:
```
export AIRFLOW_HOME=~/airflow

AIRFLOW_VERSION=2.3.3
PYTHON_VERSION="$(python --version | cut -d " " -f 2 | cut -d "." -f 1-2)"
CONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"

pip install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"
```
- Replace the contents of the local version of ```~/airflow/airflow.cfg``` with the contents of ```airflow-ui-change/new_config.cfg```
- Run ```airflow standalone```. The Standalone command will initialise the database, make a user, and start all components for you.
- Open a new terminal and cd into the ```airflow-ui-change/airflow/ui/``` folder.
- Run the following:
```
cp .env.example .env

export WEBSERVER_URL=http://127.0.0.1:8080

echo $WEBSERVER_URL
``` 
Make sure $WEBSERVER_URL = http://127.0.0.1:8080
- Run
```
yarn install
yarn start
```
### Can now ignore the rest of the README
<br />

> **Warning**
> This is the work-in-progress UI for [AIP-38](https://cwiki.apache.org/confluence/display/AIRFLOW/AIP-38+Modern+Web+Application). The current UI can be found in [www](https://github.com/apache/airflow/tree/main/airflow/www).

## Built with:

- [React](https://reactjs.org/) - a JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - extends JavaScript by adding types.
- [Neutrino](https://neutrinojs.org/) - lets you build web and Node.js applications with shared presets or configurations.
- [Chakra UI](https://chakra-ui.com/) - a simple, modular and accessible component library that gives you all the building blocks you need to build your React applications.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - write tests that focus on functionality instead of implementation
- [React Query](https://react-query.tanstack.com/) - powerful async data handler. all API calls go through this

## Environment variables

To communicate with the API you need to adjust some environment variables for the webserver and this UI.

Be sure to allow CORS headers and set up an auth backend on your Airflow instance.

```
export AIRFLOW__API__AUTH_BACKENDS=airflow.api.auth.backend.basic_auth
export AIRFLOW__API__ACCESS_CONTROL_ALLOW_HEADERS=*
export AIRFLOW__API__ACCESS_CONTROL_ALLOW_METHODS=*
export AIRFLOW__API__ACCESS_CONTROL_ALLOW_ORIGIN=http://127.0.0.1:8080
```

Create your local environment and adjust the `WEBSERVER_URL` if needed.

```bash
cp .env.example .env
```

## Installation

Clone the repository and use the package manager [yarn](https://yarnpkg.com) to install dependencies and get the project running.

```bash
yarn install
yarn start
```

Other useful commands include:

```bash
yarn lint
```

```bash
yarn test
```

## Contributing

Be sure to check out our [contribution guide](docs/CONTRIBUTING.md)


