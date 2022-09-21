import { hot } from 'react-hot-loader';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import PrivateRoute from 'providers/auth/PrivateRoute';

import HomePage from 'views/Home';

import ProjectOverview from 'views/ProjectMain/Overview';
import ProjectDocumentation from 'views/ProjectMain/Documentation';

import Details from 'views/Pipeline/runs/Details';
import Code from 'views/Pipeline/runs/Code';
import TaskTries from 'views/Pipeline/runs/TaskTries';
import TaskDuration from 'views/Pipeline/runs/TaskDuration';
import LandingTimes from 'views/Pipeline/runs/LandingTimes';

import Graph from 'views/Pipeline/runs/Graph';
import Gantt from 'views/Pipeline/runs/Gantt';

import TIDetails from 'views/Pipeline/ti/Details';
import RenderedTemplate from 'views/Pipeline/ti/RenderedTemplate';
import RenderedK8s from 'views/Pipeline/ti/RenderedK8s';
import Log from 'views/Pipeline/ti/Log';
import XCom from 'views/Pipeline/ti/XCom';

import CreateUpdate from 'views/PipelinesTab/CreateAndUpdate';
import ManageTrack from 'views/PipelinesTab/ManageAndTrack';
import PipelineDependencies from 'views/PipelinesTab/PipelineDependencies';
import Runs from 'views/PipelinesTab/Runs';
import TaskInstances from 'views/PipelinesTab/TaskInstances';
import Jobs from 'views/PipelinesTab/Jobs';
import CodeArtifacts from 'views/PipelinesTab/CodeArtifacts';
import Pools from 'views/PipelinesTab/Pools';
import XComs from 'views/PipelinesTab/XComs';

import DataLakeExplorer from 'views/Developer/DataLakeExplorer';
import Notebooks from 'views/Developer/Notebooks';
import AutoEDA from 'views/Developer/AutoEDA';
import ModelsandExpts from 'views/Developer/ModelsandExpts';
import AutoAPIBuilder from 'views/Developer/AutoAPIBuilder';
import Datasets from 'views/Developer/Datasets';

import AuditLogs from 'views/Monitor/AuditLogs';
import TaskReschedules from 'views/Monitor/TaskReschedules';
import SLAMisses from 'views/Monitor/SLAMisses';

import DataLakeConfiguration from 'views/Config/DataLakeConfiguration';
import SparkConfig from 'views/Config/SparkConfig';
import SparkDependency from 'views/Config/SparkDependency';
import KerberosConfig from 'views/Config/KerberosConfig';
import LivyConfig from 'views/Config/LivyConfig';

import ClusterConfigGrps from 'views/Config/ClusterConfigGrps';
import Variables from 'views/Config/Variables';
import Plugins from 'views/Config/Plugins';
import Connections from 'views/Config/Connections';

import Users from 'views/Security/Users';
import Roles from 'views/Security';
import Statistics from 'views/Security/Statistics';

import Providers from 'views/Docs/Providers';

import NotFound from 'views/NotFound';

const webURL = process.env.WEBSERVER_URL;
const App = () => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <PrivateRoute exact path="/home" component={HomePage} />

    {/* Change url to project name variable */}
    <PrivateRoute exact path="/ml-example/overview" component={ProjectOverview} />
    <PrivateRoute exact path="/ml-example/documentation" component={ProjectDocumentation} />

    <PrivateRoute exact path="/pipelines/create-and-update" component={CreateUpdate} />
    <PrivateRoute exact path="/pipelines/manage-and-track" component={ManageTrack} />
    <PrivateRoute exact path="/pipelines/pipeline-dependencies" component={PipelineDependencies} />
    <PrivateRoute exact path="/pipelines/runs" component={Runs} />
    <PrivateRoute exact path="/pipelines/task-instances" component={TaskInstances} />
    <PrivateRoute exact path="/pipelines/jobs" component={Jobs} />
    <PrivateRoute exact path="/pipelines/code-artifacts" component={CodeArtifacts} />
    <PrivateRoute exact path="/pipelines/pools" component={Pools} />
    <PrivateRoute exact path="/pipelines/xcoms" component={XComs} />

    <Redirect exact path="/pipelines/:dagId" to="/pipelines/:dagId/details" />
    <PrivateRoute exact path="/pipelines/:dagId/details" component={Details} />
    <PrivateRoute exact path="/pipelines/:dagId/code" component={Code} />
    <PrivateRoute exact path="/pipelines/:dagId/task-tries" component={TaskTries} />
    <PrivateRoute exact path="/pipelines/:dagId/task-duration" component={TaskDuration} />
    <PrivateRoute exact path="/pipelines/:dagId/landing-times" component={LandingTimes} />
    <PrivateRoute exact path="/pipelines/:dagId/graph" component={Graph} />
    <PrivateRoute exact path="/pipelines/:dagId/gantt" component={Gantt} />

    <Redirect exact path="/pipelines/:dagId/:dagRunId/:taskId" to="/pipelines/:dagId/:dagRunId/:taskId/details" />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/details" component={TIDetails} />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/rendered-template" component={RenderedTemplate} />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/rendered-k8s" component={RenderedK8s} />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/log" component={Log} />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/xcom" component={XCom} />

    <PrivateRoute exact path="/developer/data-lake-explorer" component={DataLakeExplorer} />
    <PrivateRoute exact path="/developer/models-expts" component={ModelsandExpts} />
    <PrivateRoute exact path="/developer/notebooks" component={Notebooks} />
    <PrivateRoute exact path="/developer/auto-eda" component={AutoEDA} />
    <PrivateRoute exact path="/developer/auto-api-builder" component={AutoAPIBuilder} />
    <PrivateRoute exact path="/developer/datasets" component={Datasets} />

    <PrivateRoute exact path="/monitor/audit-logs" component={AuditLogs} />
    <PrivateRoute exact path="/monitor/task-reschedules" component={TaskReschedules} />
    <PrivateRoute exact path="/monitor/sla-misses" component={SLAMisses} />

    <PrivateRoute exact path="/config/clusterconfig" component={ClusterConfigGrps} />
    <PrivateRoute exact path="/config/variables" component={Variables} />
    <PrivateRoute exact path="/config/plugins" component={Plugins} />
    <PrivateRoute exact path="/config/connections" component={Connections} />

    <PrivateRoute exact path="/config/clusterconfig/datalakeconfig" component={DataLakeConfiguration} />
    <PrivateRoute exact path="/config/clusterconfig/sparkconfig" component={SparkConfig} />
    <PrivateRoute exact path="/config/clusterconfig/sparkdependency" component={SparkDependency} />
    <PrivateRoute exact path="/config/clusterconfig/kerberosconfig" component={KerberosConfig} />
    <PrivateRoute exact path="/config/clusterconfig/Livyconfig" component={LivyConfig} />

    <PrivateRoute exact path="/security" component={Roles} />
    <PrivateRoute exact path="/security/users" component={Users} />
    <PrivateRoute exact path="/security/users/new" component={Users} />
    <PrivateRoute exact path="/security/users/:username" component={Users} />
    <PrivateRoute exact path="/security/users/:username/edit" component={Users} />
    {/* <PrivateRoute exact path="/security/roles" component={Roles} /> */}
    <PrivateRoute exact path="/security/statistics" component={Statistics} />

    <PrivateRoute exact path="/docs/providers" component={Providers} />
    <Route
      path="/docs/doc-swagger"
      component={() => {
        window.location.replace(`${webURL}/api/v1/ui/`);
        return null;
      }}
    />
    <Route component={NotFound} />
  </Switch>
);

export default hot(module)(App);
