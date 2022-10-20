import { hot } from 'react-hot-loader';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
// import AzureAuth from 'views/AzureAuth';
import PrivateRoute from 'providers/auth/PrivateRoute';

// import OauthLogin from 'views/OauthLogin';
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
import Trace from 'views/Monitor/Trace';
import CLogs from 'views/Monitor/CLogs';
import Metrics from 'views/Monitor/Metrics';

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
// import CaiML from './views/Microfrontends/CaiML';

const App = () => (
  <Switch>
    {/* <Redirect exact path="/" to="/login-oauth" />
    <PrivateRoute exact path="/login-oauth" component={OauthLogin} /> */}

    {/* <Route path="/auth" component={AzureAuth} /> */}
    <Redirect exact path="/" to="/home" />
    <PrivateRoute exact path="/home" component={HomePage} />

    {/* Change url to project name variable */}
    {/* <PrivateRoute exact path="/ml-example/overview" component={ProjectOverview} />
    <PrivateRoute exact path="/ml-example/documentation" component={ProjectDocumentation} /> */}

    <PrivateRoute exact path="/:id/:name/overview" component={ProjectOverview} />
    <PrivateRoute exact path="/:id/:name/documentation" component={ProjectDocumentation} />

    <PrivateRoute exact path="/:id/:name/pipelines/create-and-update" component={CreateUpdate} />
    <PrivateRoute exact path="/:id/:name/pipelines/manage-and-track" component={ManageTrack} />
    <PrivateRoute exact path="/:id/:name/pipelines/pipeline-dependencies" component={PipelineDependencies} />
    <PrivateRoute exact path="/:id/:name/pipelines/runs" component={Runs} />
    <PrivateRoute exact path="/:id/:name/pipelines/task-instances" component={TaskInstances} />
    <PrivateRoute exact path="/:id/:name/pipelines/jobs" component={Jobs} />
    <PrivateRoute exact path="/:id/:name/pipelines/code-artifacts" component={CodeArtifacts} />
    <PrivateRoute exact path="/:id/:name/pipelines/pools" component={Pools} />
    <PrivateRoute exact path="/:id/:name/pipelines/xcoms" component={XComs} />

    {/* <PrivateRoute exact path="/pipelines/create-and-update" component={CreateUpdate} />
    <PrivateRoute exact path="/pipelines/manage-and-track" component={ManageTrack} />
    <PrivateRoute exact path="/pipelines/pipeline-dependencies" component={PipelineDependencies} />
    <PrivateRoute exact path="/pipelines/runs" component={Runs} />
    <PrivateRoute exact path="/pipelines/task-instances" component={TaskInstances} />
    <PrivateRoute exact path="/pipelines/jobs" component={Jobs} />
    <PrivateRoute exact path="/pipelines/code-artifacts" component={CodeArtifacts} />
    <PrivateRoute exact path="/pipelines/pools" component={Pools} />
    <PrivateRoute exact path="/pipelines/xcoms" component={XComs} /> */}

    <Redirect exact path="/:id/:name/pipelines/:dagId" to="/:id/:name/pipelines/:dagId/details" />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/details" component={Details} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/code" component={Code} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/task-tries" component={TaskTries} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/task-duration" component={TaskDuration} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/landing-times" component={LandingTimes} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/graph" component={Graph} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/gantt" component={Gantt} />

    <Redirect exact path="/:id/:name/pipelines/:dagId/:dagRunId/:taskId" to="/:id/:name/pipelines/:dagId/:dagRunId/:taskId/details" />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/:dagRunId/:taskId/details" component={TIDetails} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/:dagRunId/:taskId/rendered-template" component={RenderedTemplate} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/:dagRunId/:taskId/rendered-k8s" component={RenderedK8s} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/:dagRunId/:taskId/log" component={Log} />
    <PrivateRoute exact path="/:id/:name/pipelines/:dagId/:dagRunId/:taskId/xcom" component={XCom} />

    <PrivateRoute exact path="/:id/:name/developer/data-lake-explorer" component={DataLakeExplorer} />
    <PrivateRoute exact path="/:id/:name/developer/models-expts" component={ModelsandExpts} />
    <PrivateRoute exact path="/:id/:name/developer/notebooks" component={Notebooks} />
    <PrivateRoute exact path="/:id/:name/developer/auto-eda" component={AutoEDA} />
    <PrivateRoute exact path="/:id/:name/developer/auto-api-builder" component={AutoAPIBuilder} />
    <PrivateRoute exact path="/:id/:name/developer/datasets" component={Datasets} />

    <PrivateRoute exact path="/:id/:name/monitor/audit-logs" component={AuditLogs} />
    <PrivateRoute exact path="/:id/:name/monitor/task-reschedules" component={TaskReschedules} />
    <PrivateRoute exact path="/:id/:name/monitor/sla-misses" component={SLAMisses} />
    <PrivateRoute exact path="/:id/:name/monitor/trace" component={Trace} />
    <PrivateRoute exact path="/:id/:name/monitor/logs" component={CLogs} />
    <PrivateRoute exact path="/:id/:name/monitor/metrics" component={Metrics} />

    <PrivateRoute exact path="/:id/:name/config/clusterconfig" component={ClusterConfigGrps} />
    <PrivateRoute exact path="/:id/:name/config/variables" component={Variables} />
    <PrivateRoute exact path="/:id/:name/config/plugins" component={Plugins} />
    <PrivateRoute exact path="/:id/:name/config/connections" component={Connections} />

    <PrivateRoute exact path="/:id/:name/config/clusterconfig/datalakeconfig" component={DataLakeConfiguration} />
    <PrivateRoute exact path="/:id/:name/config/clusterconfig/sparkconfig" component={SparkConfig} />
    <PrivateRoute exact path="/:id/:name/config/clusterconfig/sparkdependency" component={SparkDependency} />
    <PrivateRoute exact path="/:id/:name/config/clusterconfig/kerberosconfig" component={KerberosConfig} />
    <PrivateRoute exact path="/:id/:name/config/clusterconfig/Livyconfig" component={LivyConfig} />

    <PrivateRoute exact path="/:id/:name/security" component={Roles} />
    <PrivateRoute exact path="/:id/:name/security/users" component={Users} />
    <PrivateRoute exact path="/:id/:name/security/users/new" component={Users} />
    <PrivateRoute exact path="/:id/:name/security/users/:username" component={Users} />
    <PrivateRoute exact path="/:id/:name/security/users/:username/edit" component={Users} />
    {/* <PrivateRoute exact path="/:id/:name/security/roles" component={Roles} /> */}
    <PrivateRoute exact path="/:id/:name/security/statistics" component={Statistics} />

    <PrivateRoute exact path="/:id/:name/docs/providers" component={Providers} />
    <Route
      path="/docs/doc-swagger"
      component={() => {
        window.location.replace(`${process.env.WEBSERVER_URL}/api/v1/ui/`);
        return null;
      }}
    />
    {/* <Route exact path="/cai-ml" component={CaiML} /> */}
    <Route component={NotFound} />
  </Switch>
);

export default hot(module)(App);
