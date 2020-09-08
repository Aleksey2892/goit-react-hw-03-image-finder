import React, { Component } from 'react';

import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className="BtnBox">
        <Spinner
          type="Grid"
          color="#3f51b5"
          height={50}
          width={50}
          timeout={0}
        />
      </div>
    );
  }
}
