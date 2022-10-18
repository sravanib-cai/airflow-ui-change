import React from 'react';
import '../../static/buttonstyle.css';
import AppContainer from 'components/AppContainer';

// import axios from 'axios';

const axios = require('axios');

// import HomeContainer from './HomeContainer';
const handleClick = () => {
  const config = {
    method: 'get',
    // url: 'https://login.microsoftonline.com/56ed7cf6-887d-4a15-8cab-9c5981b3c4e7/oauth2/authorize?response_type=code&client_id=e23e8da1-a627-437c-8a9f-f9e9e7d361cf&redirect_uri=http://exl.couture.workbench.ai/react-ui/&scope=openid+profile+email&state=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuZXh0IjpbImh0dHBzOi8vZXhsLndvcmtiZW5jaC5jb3V0dXJlLmFpL2RzY3cvaG9tZSJdfQ.LUdlnA2v-wOsUTPlVrViprGuHK0St60dDUfGiUf8HeY&nonce=ORhdlMwxD4eAOrplZ0ch',
    url: 'https://login.microsoftonline.com/56ed7cf6-887d-4a15-8cab-9c5981b3c4e7/oauth2/v2.0/authorize?client_id=ea324162-6863-43b0-b012-ea5bffcc0854&response_type=code&redirect_uri=https://exl.workbench.couture.ai/react-ui/&response_mode=query&scope=openid profile email',
    headers: {
      'Content-Type': 'application/json',

    },

  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  // setIsShown(true);
};

const OauthLogin = () => (
  <AppContainer>
    <br />
    <div>
      <button className="btn pull-right" type="submit" onClick={handleClick}>
        OauthLogin
      </button>
    </div>
  </AppContainer>
);

export default OauthLogin;
