import React from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const ProvidersView = () => {
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
      <div style={padding} />
      {/* {% if providers|length == 0 %}
        <p>No providers loaded. Learn more in the
          <a href="{{ doc_url }}" target="_blank">provider packages documentation</a>.
        </p>
      {% endif %}

      <table class="table table-striped table-bordered">
        <tr>
          <th>Package Name</th>
          <th>Version</th>
          <th>Description</th>
        </tr>

        {% for provider in providers %}
          <tr>
            <td><a href="{{ provider['documentation_url'] }}">
            {{ provider["package_name"] }}</a></td>
            <td>{{ provider["version"] }}</td>
            <td>{{ provider["description"]}}</td>
          </tr>
        {% endfor %}
      </table> */}

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th colSpan="5">Package Name</th>
              <th colSpan="1">Version</th>
              <th colSpan="5">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="col-sm-5">
                apache-airflow-providers-airbyte
              </td>
              <td colSpan="1" className="code col-sm-1">2.1.1</td>
              <td colSpan="5" className="code col-sm-5">Airbyte</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProvidersView;
