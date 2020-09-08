import React from 'react';
import PropTypes from 'prop-types';

import s from './Error.module.scss';

const Error = ({ error }) => (
  <div className={s.errorBox}>
    <p className={s.errorTitle}>Load error:</p>
    <p className={s.errorMessage}>{error}</p>
  </div>
);

Error.defaultProps = {
  error: 'Unknown error. Try later :(',
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
