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
          height={200}
          width={200}
          timeout={3000}
        />
      </div>
    );
  }
}