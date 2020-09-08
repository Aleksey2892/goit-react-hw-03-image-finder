import React from 'react';

import s from './Error.module.scss';

const Error = ({ error }) => {
  return (
    <div className={s.errorBox}>
      <p className={s.errorTitle}>Load error:</p>
      <p className={s.errorMessage}>{error}</p>
    </div>
  );
};

export default Error;
