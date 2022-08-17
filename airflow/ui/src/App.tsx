import { hot } from 'react-hot-loader';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import PrivateRoute from 'providers/auth/PrivateRoute';


import HomePage from 'views/Home';

import Pipelines from 'views/Pipelines';

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

import ManageAndCreate from 'views/PipelineRuns/ManageAndCreate';
import PipelineStatus from 'views/PipelineRuns/PipelineStatus';
import PipelineDependencies from 'views/PipelineRuns/PipelineDependencies';
import Runs from 'views/PipelineRuns/Runs';
import TaskInstances from 'views/PipelineRuns/TaskInstances';
import Jobs from 'views/PipelineRuns/Jobs';

import DataLakeExplorer from 'views/Developer/DataLakeExplorer';
import Notebooks from 'views/Developer/Notebooks';
import AutoEDA from 'views/Developer/AutoEDA';
import CodeArtifacts from 'views/Developer/CodeArtifacts';
import ModelsandDatasets from 'views/Developer/ModelsandDatasets';

import EventLogs from 'views/Monitor/EventLogs';
import TaskReschedules from 'views/Monitor/TaskReschedules';
import SLAMisses from 'views/Monitor/SLAMisses';

import ClusterConfigGrps from 'views/ClusterConfig';

import Variables from 'views/Config';
import Configurations from 'views/Config/Configurations';
import Plugins from 'views/Config/Plugins';
import Providers from 'views/Config/Providers';
import Pools from 'views/Config/Pools';
import XComs from 'views/Config/XComs';
import Connections from 'views/Config/Connections';

import Security from 'views/Security';
import Users from 'views/Security/Users';
import Roles from 'views/Security/Roles';
import Statistics from 'views/Security/Statistics';

import NotFound from 'views/NotFound';

const webURL = process.env.WEBSERVER_URL;
const App = () => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <PrivateRoute exact path="/home" component={HomePage} />

    <PrivateRoute exact path="/pipelines" component={Pipelines} />
    <Redirect exact path="/pipelines/:dagId" to="/pipelines/:dagId/details" />
    <PrivateRoute exact path="/pipelines/:dagId/details" component={Details} />
    <PrivateRoute exact path="/pipelines/:dagId/code" component={Code} />
    <PrivateRoute exact path="/pipelines/:dagId/task-tries" component={TaskTries} />
    <PrivateRoute exact path="/pipelines/:dagId/task-duration" component={TaskDuration} />
    <PrivateRoute exact path="/pipelines/:dagId/landing-times" component={LandingTimes} />

    <Redirect exact path="/pipelines/:dagId/:dagRunId" to="/pipelines/:dagId/:dagRunId/graph" />
    <PrivateRoute exact path="/pipelines/:dagId/graph" component={Graph} />
    <PrivateRoute exact path="/pipelines/:dagId/gantt" component={Gantt} />

    <Redirect exact path="/pipelines/:dagId/:dagRunId/:taskId" to="/pipelines/:dagId/:dagRunId/:taskId/details" />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/details" component={TIDetails} />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/rendered-template" component={RenderedTemplate} />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/rendered-k8s" component={RenderedK8s} />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/log" component={Log} />
    <PrivateRoute exact path="/pipelines/:dagId/:dagRunId/:taskId/xcom" component={XCom} />

    <PrivateRoute exact path="/pipelineruns/manage-and-create" component={ManageAndCreate} />
    <PrivateRoute exact path="/pipelineruns/pipeline-status" component={PipelineStatus} />
    <PrivateRoute exact path="/pipelineruns/pipeline-dependencies" component={PipelineDependencies} />
    <PrivateRoute exact path="/pipelineruns/runs" component={Runs} />
    <PrivateRoute exact path="/pipelineruns/task-instances" component={TaskInstances} />
    <PrivateRoute exact path="/pipelineruns/jobs" component={Jobs} />


    <Redirect exact path="/pipelineruns/:dagId" to="/pipelineruns/:dagId/details" />
    <PrivateRoute exact path="/pipelineruns/:dagId/details" component={Details} />
    <PrivateRoute exact path="/pipelineruns/:dagId/code" component={Code} />
    <PrivateRoute exact path="/pipelineruns/:dagId/task-tries" component={TaskTries} />
    <PrivateRoute exact path="/pipelineruns/:dagId/task-duration" component={TaskDuration} />
    <PrivateRoute exact path="/pipelineruns/:dagId/landing-times" component={LandingTimes} />
    <PrivateRoute exact path="/pipelineruns/:dagId/graph" component={Graph} />
    <PrivateRoute exact path="/pipelineruns/:dagId/gantt" component={Gantt} />


    <PrivateRoute exact path="/developer/data-lake-explorer" component={DataLakeExplorer} />
    <PrivateRoute exact path="/developer/notebooks" component={Notebooks} />
    <PrivateRoute exact path="/developer/auto-eda" component={AutoEDA} />
    <PrivateRoute exact path="/developer/code-artifacts" component={CodeArtifacts} />
    <PrivateRoute exact path="/developer/models-datasets" component={ModelsandDatasets} />

    <PrivateRoute exact path="/monitor/event-logs" component={EventLogs} />
    <PrivateRoute exact path="/monitor/task-reschedules" component={TaskReschedules} />
    <PrivateRoute exact path="/monitor/sla-misses" component={SLAMisses} />

    <PrivateRoute exact path="/clusterconfig" component={ClusterConfigGrps} />

    <PrivateRoute exact path="/config" component={Variables} />
    <PrivateRoute exact path="/config/configurations" component={Configurations} />
    <PrivateRoute exact path="/config/plugins" component={Plugins} />
    <PrivateRoute exact path="/config/providers" component={Providers} />
    <PrivateRoute exact path="/config/pools" component={Pools} />
    <PrivateRoute exact path="/config/xcoms" component={XComs} />
    <PrivateRoute exact path="/config/connections" component={Connections} />

    <PrivateRoute exact path="/security" component={Security} />
    <PrivateRoute exact path="/security/users" component={Users} />
    <PrivateRoute exact path="/security/users/new" component={Users} />
    <PrivateRoute exact path="/security/users/:username" component={Users} />
    <PrivateRoute exact path="/security/users/:username/edit" component={Users} />
    <PrivateRoute exact path="/security/roles" component={Roles} />
    <PrivateRoute exact path="/security/statistics" component={Statistics} />

    <Route
      path="/doc-swagger"
      component={() => {
        window.location.replace(`${webURL}/api/v1/ui/`);
        return null;
      }}
    />
    <Route component={NotFound} />
  </Switch>
);

export default hot(module)(App);
