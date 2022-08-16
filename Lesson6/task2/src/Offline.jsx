import React from 'react';

const Offline = props => (
  <>
    <span className="status__text">Offline</span>
    <button onClick={props.onClick} className="status__btn">
      Reconnect
    </button>
  </>
);

export default Offline;
