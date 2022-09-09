import React from 'react';
import '../../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const PipelineBarView = () => {
  const buttonStyle = {
    backgroundColor: '#90cdf4',
    color: '#1A202C',
    borderRadius: '0.375rem',
    fontWeight: '600',
    height: '2rem',
    minWidth: '2rem',
    fontSize: '12px',
    width: 'auto',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
  };
  const btnRight = {
    cssFloat: 'right',
  };
  // const space = {
  //   width: '3px',
  //   height: 'auto',
  //   display: 'inline-block',
  // };
  const padding = {
    paddingBottom: '20px',
  };
  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    // <div style={btnRight}>
    <div>
      <div className="row dag-view-tools">
        <div className="col-md-10">
          {/* <form method="get" className="form-inline"> */}
          <input type="hidden" name="root" value="root" />
          <input type="hidden" value="dag_id" name="dag_id" />
          {/* <input type="hidden" name="_csrf_token" value="{{ csrf_token() }}"> */}
          <div className="form-group">
            <label className="sr-only" htmlFor="base_date">Base date</label>
            <div className="input-group">
              2022-09-07T00:00:01Z
              {/* {{ form.base_date(class_="form-control", disabled=not(dag.has_dag_runs())) }} */}
            </div>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="num_runs">Number of runs</label>
            <div className="input-group">
              <div className="input-group-addon">Runs</div>
              25
              {/* {{ form.num_runs(class_="form-control", disabled=not(dag.has_dag_runs())) }} */}
            </div>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="execution_date">Run</label>
            <div className="input-group">
              <div className="input-group-addon">Run</div>
              scheduled_2022-09-07T00:00:00+00:00
              {/* {{ form.execution_date(class_="form-control", disabled=not(dag.has_dag_runs())) }} */}
            </div>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="arrange">Layout</label>
            <div className="input-group">
              <div className="input-group-addon">Layout</div>
              Left -gt Right
              {/* {{ form.arrange(class_="form-control") }} */}
            </div>
          </div>
          <button type="submit" className="btn">Update</button>
            {/* {% if not dag.has_dag_runs() %}<span className="text-warning" style="margin-left:16px;">No DAG runs yet.</span>{% endif %} */}
          {/* </form> */}
        </div>
        <div className="col-md-2 text-right">
          <label className="sr-only" htmlFor="searchbox">Search</label>
          <input type="search" className="form-control" id="searchbox" placeholder="Find Task…" />
        </div>
      </div>

      <div className="legend-row">
        {/* <div>
          {% for op in operators %}<span className="legend-item" style="color: {{ op.ui_fgcolor }};background: {{ op.ui_color }};">
            {{ op.task_type }}</span>{% endfor %}
        </div> */}
        <div>
          {/* {% for state, state_color in state_color_mapping.items() %}
            <span className="legend-item legend-item--interactive js-state-legend-item" data-state="{{state}}" style="border-color: {{state_color}};">
              {{state}}
            </span>
          {% endfor %} */}
          <span className="legend-item legend-item--interactive legend-item--no-border" data-state="no_status" style={{borderColor:"white"}}>
          {/* <span className="legend-item legend-item--interactive legend-item--no-border js-state-legend-item" data-state="no_status" style={{borderColor:"white"}}> */}
            no_status
          </span>
        </div>
      </div>
      <div id="error" style={{ display: "none", marginTop: "10px" }} className="alert alert-danger" role="alert">
        <span className="material-icons" aria-hidden="true">error</span>
        <span id="error_msg">Oops.</span>
      </div>
      <br />
      <div className="refresh-actions">
        {/* {{ loading_dots(id='loading-dots', classes='refresh-loading') }} */}
        <label className="switch-label">
          <input className="switch-input" id="auto_refresh" type="checkbox" />
          {/* {% if dag_run_state == 'running' %}checked{% endif %}> */}
          <span className="switch" aria-hidden="true"></span>
          Auto-refresh
        </label>
        <i class="fa fa-refresh" style={{ color: '#90cdf4' }} aria-hidden="true" />
        {/* <button className="btn btn-default btn-sm" id="refresh_button">
          <span className="material-icons" aria-hidden="true">refresh</span>
        </button> */}
      </div>
    </div>
  );
};

export default PipelineBarView;
