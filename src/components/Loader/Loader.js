import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';

export default class LoaderSpinner extends Component {
  render() {
    return (
      <div className={style.loaderWrapper}>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
}
