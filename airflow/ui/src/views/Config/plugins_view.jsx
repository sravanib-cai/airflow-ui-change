import React from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const PluginsView = () => {
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
      <h4>
        1. CoutureLoopableBatchPlugin
      </h4>
      {/* {% for plugin in plugins %}
        <h4>{{ plugin["plugin_no"] }}. {{ plugin["plugin_name"] }}</h4>
        <table class="table table-striped table-bordered">
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
          {% for attr, value in plugin["attrs"].items() %}
            <tr>
              <td>{{ attr }}</td>
              <td class='code'>{{ value }}</td>
            </tr>
          {% endfor %}
        </table>
      {% endfor %} */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-head">
              <th colSpan="5">Attribute</th>
              <th colSpan="5">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="col-sm-5">
                hooks
              </td>
              <td colSpan="5" className="code col-sm-5">[]</td>
            </tr>
            <tr>
              <td colSpan="5" className="col-sm-5">
                source
              </td>
              <td colSpan="5" className="code col-sm-5">
                $PLUGINS_FOLDER/cai_loopable_batch_plugin.py
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PluginsView;
