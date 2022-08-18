import React from 'react';
import moment from 'moment';

// moment.locale(en-gb);

const Transaction = ({ from, to, amount, rate, time}) => {
  return (
    <li className="transaction">
    <span className="transaction__date">{moment(time).format('ll')}</span>
    <span className="transaction__time">{moment(time).format('LT')}</span>
    <span className="transaction__assets">{from} → {to}</span>
    <span className="transaction__rate">{rate}</span>
    <span className="transaction__amount">{amount}</span>
  </li>
  );
};

export default Transaction;
