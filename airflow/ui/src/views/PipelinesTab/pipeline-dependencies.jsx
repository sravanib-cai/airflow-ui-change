import React, { useRef, useState } from 'react';
import '../../static/buttonstyle.css';
import {
  Button,
  Portal,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import 'reactjs-popup/dist/index.css';

import 'font-awesome/css/font-awesome.min.css';

const PipelineDepView = () => {
  const space = {
    width: '3px',
    height: 'auto',
    display: 'inline-block',
  };

  const padding = {
    paddingBottom: '15px',
  };
  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    // <div style={btnRight}>
    <div>
        <div>
        <div className="input-group" style={{ float: 'right' }}>
          <input type="text" id="searchbox" className="form-control-sm" placeholder="Search for..."/>
        </div>
        <div style={{float: 'right'}}>
          <label for="deps-filter" className="h5" style={{ marginRight: '5px' }}>
            <input type="checkbox" id="deps-filter" checked /> 
            <div style={space} />
            Only show Pipelines with dependencies
          </label>
        </div>
      </div>
      
      <div style={padding} />
      <br />
      <hr/>
      <div style={padding} />
      <div className="legend-row">
        <div>
          <span className="legend-item dag">pipeline</span>
          <span className="legend-item trigger">trigger</span>
          <span className="legend-item sensor">sensor</span>
        </div>
        <div style={{ float:'right' }}>Last refresh: 
          {/* <time datetime="{{ last_refresh }}">{{ last_refresh }}</time> */}
        </div>
      </div>
      {/* <div id="error" style={{ display: none; margin-top: 10px;" className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span id="error_msg">Oops.</span>
      </div> */}
      <br/>
      <div className="svg-wrapper">
        <div className="graph-svg-wrap">
          {/* <svg id="graph-svg" width="{{ width }}" height="{{ height }}">
            <g id="dig" transform="translate(20,20)"></g>
            <filter id="blur-effect-1">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
          </svg> */}
        </div>
      </div>
    </div>
  //   {% block tail %}
  //   {{ super() }}
  //   <script src="{{ url_for_asset('d3.min.js') }}"></script>
  //   <script src="{{ url_for_asset('dagre-d3.min.js') }}"></script>
  //   <script src="{{ url_for_asset('d3-shape.min.js') }}"></script>
  //   <script src="{{ url_for_asset('d3-tip.js') }}"></script>
  //   <script>
  //     let dagNodes = {{ nodes|tojson }};
  //     let edges = {{ edges|tojson }};
  //     const arrange = '{{ arrange }}';
  //   </script>
  //   <script src="{{ url_for_asset('dagDependencies.js') }}"></script>
  // {% endblock %}
  );
};

export default PipelineDepView;
