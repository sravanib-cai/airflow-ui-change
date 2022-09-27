import React from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const SparkConfigView = () => {
  // const fileRef = useRef();
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
  const Headers = {
    // backgroundColor: '#90cdf4',
    // color: '#1A202C',
    fontWeight: '600',
    fontSize: '14px',
  };

  // const space = {
  //   width: '3px',
  //   height: 'auto',
  //   display: 'inline-block',
  // };
  const padding = {
    paddingBottom: '20px',
  };
  const paddingForm = {
    paddingBottom: '15px',
  };
  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    // <div style={btnRight}>
    <div>
      <div style={padding} />
      <div style={btnRight}>
        <button style={buttonStyle} type="submit">
          Add in Arguments
        </button>
      </div>
      <h5 style={Headers}>Arguments</h5>
      <br />
      <div>
        <div>
          <span className="input-form-addon spark-form-sep">master</span>
        </div>
        <div className="input-form form-width">
          <input type="text" className="form-control-addon shift-form-left" />
        </div>
      </div>
      <div>
        <div>
          <span className="input-form-addon spark-form-sep">jars</span>
        </div>
        <div className="input-form shift-form-left">
          <p>No files at location.</p>
        </div>
      </div>

      <div style={paddingForm} />
      <div>
        <div>
          <span className="input-form-addon spark-form-sep">py-files</span>
        </div>
        <div className="input-form shift-form-left">
          No files at location.
        </div>
      </div>

      <div style={paddingForm} />
      <div>
        <div>
          <span className="input-form-addon spark-form-sep">keytab</span>
        </div>
        <div className="input-form shift-form-left">
          No files at location.
        </div>
      </div>
      <div style={paddingForm} />

      <div style={padding} />
      <div style={btnRight}>
        <button style={buttonStyle} type="submit">
          Add in Configurations
        </button>
      </div>
      <h5 style={Headers}>Configurations</h5>
      <br />
      <div>
        <span className="input-form-addon spark-form-sep">spark.scheduler.mode</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <div>
        <span className="input-form-addon spark-form-sep">spark.pyspark.python</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <div>
        <span className="input-form-addon spark-form-sep">spark.dynamicAllocation.enabled</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <div>
        <span className="input-form-addon spark-form-sep">spark.shuffle.service.enabled</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <div>
        <span className="input-form-addon spark-form-sep">spark.dynamicAllocation.maxExecutors</span>
      </div>
      <div className="input-form form-width">
        <input type="text" className="form-control-addon shift-form-left" />
      </div>
      <br />

      <div style={padding} />
      <div className="buttonCenter">
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </div>

    </div>
  );
};

export default SparkConfigView;
