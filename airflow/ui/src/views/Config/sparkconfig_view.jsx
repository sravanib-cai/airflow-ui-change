import React, { useState, useEffect } from 'react';
import '../../static/buttonstyle.css';
// import { Link } from 'react-router-dom';
import {
  Button,
  Heading,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
// import Popup from 'reactjs-popup';
import 'font-awesome/css/font-awesome.min.css';

const SparkConfigView = () => {
  // const fileRef = useRef();
  // const [configdata, setConfig] = useState([]);
  const [configdata, setData] = useState({});
  // const fetchData = async () => {
  //   try {
  //     // const token = userStore.user.access;
  //     // const token = 'read';
  //     const config = {
  //       method: 'GET',
  //       url: `${process.env.API_URL}/sparkconfigurationview/config_group_1`,
  //       // headers: {
  //       //   Authorization: `Bearer ${token}`,
  //       // },
  //     };

  //     const response = await axios(config);
  //     // setConfig(response.data.response);
  //     setConfig(response.data.data);
  //     console.log(response.data.data);
  //     //   setConfig(defaultProjects);
  //   } catch (e) {
  //   //   setConfig(defaultProjects);
  //     console.log('exception', e);
  //     // TODO: handle error here
  //   }
  // };


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
  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line
  //     }, []);

  // useEffect(() => {
  //   // fetchProjects();
  //   console.log('configdata', configdata);
  //   // eslint-disable-next-line
  //         }, [config]);

  useEffect(() => {
    axios
      // .get(`https://exl.workbench.couture.ai/workbench-expt/sparkconfigurationview/config_group_1`)
      .get(`${process.env.API_URL}/sparkconfigurationview/config_group_1`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        console.log(res.data.arguments.master);
      });
  },[]);

  // const linkColor = useColorModeValue('blue.200', 'blue.300');
  // const dividerColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <div>
      <Heading mb="20px" as="h5" size="md">config_group_1</Heading>
      <Button
        colorScheme="blue"
        size="sm"
        mr="2"
        float="right"
        mb="20px"
        // onClick={() => fetchData()}
      >
        Add in Arguments
      </Button>
      <h5 style={Headers}>Arguments</h5>
      <br />
      <div>
        <div>
          <span className="input-form-addon spark-form-sep">master</span>
        </div>
        <div className="input-form form-width">
          <Input
            mb={2}
            placeholder={configdata.arguments ? configdata.arguments.master : ""}
            _placeholder={{ color: 'white' }}
              // autoFocus
            color="white"
            bgColor="gray.900"
            h="34px"
            padding="6px 12px"
            fontSize="14px"
            lineHeight="1.428571429"
            borderRadius="4px"
            ml="20"
          />
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
      <Button
        colorScheme="blue"
        size="sm"
        mr="2"
        float="right"
        mb="20px"
      >
        Add in Configurations
      </Button>
      <h5 style={Headers}>Configurations</h5>
      <br />
      <div>
        <span className="input-form-addon spark-form-sep">spark.scheduler.mode</span>
      </div>
      <div className="input-form form-width">
        <Input
          mb={2}
          placeholder="s3a://"
              // autoFocus
          bgColor="gray.900"
          h="34px"
          padding="6px 12px"
          fontSize="14px"
          lineHeight="1.428571429"
          borderRadius="4px"
          ml="20"
        />
      </div>
      <div>
        <span className="input-form-addon spark-form-sep">spark.pyspark.python</span>
      </div>
      <div className="input-form form-width">
        <Input
          mb={2}
          placeholder="s3a://"
              // autoFocus
          bgColor="gray.900"
          h="34px"
          padding="6px 12px"
          fontSize="14px"
          lineHeight="1.428571429"
          borderRadius="4px"
          ml="20"
        />
      </div>
      <div>
        <span className="input-form-addon spark-form-sep">spark.dynamicAllocation.enabled</span>
      </div>
      <div className="input-form form-width">
        <Input
          mb={2}
          placeholder="s3a://"
              // autoFocus
          bgColor="gray.900"
          h="34px"
          padding="6px 12px"
          fontSize="14px"
          lineHeight="1.428571429"
          borderRadius="4px"
          ml="20"
        />
      </div>
      <div>
        <span className="input-form-addon spark-form-sep">spark.shuffle.service.enabled</span>
      </div>
      <div className="input-form form-width">
        <Input
          mb={2}
          placeholder="s3a://"
              // autoFocus
          bgColor="gray.900"
          h="34px"
          padding="6px 12px"
          fontSize="14px"
          lineHeight="1.428571429"
          borderRadius="4px"
          ml="20"
        />
      </div>
      <div>
        <span className="input-form-addon spark-form-sep">spark.dynamicAllocation.maxExecutors</span>
      </div>
      <div className="input-form form-width">
        <Input
          mb={2}
          placeholder="s3a://"
              // autoFocus
          bgColor="gray.900"
          h="34px"
          padding="6px 12px"
          fontSize="14px"
          lineHeight="1.428571429"
          borderRadius="4px"
          ml="20"
        />
      </div>
      <br />

      <div style={padding} />
      <div className="buttonCenter">
        <Button
          colorScheme="blue"
          size="sm"
          mr="2"
          float="right"
          mb="20px"
        >
          Submit
        </Button>
      </div>

    </div>
  );
};

export default SparkConfigView;
