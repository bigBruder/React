import React, { Component } from 'react';
import Transaction from './Transaction';

const TransactionsList = ({transactions}) => {
    return (
      <div>
        <ul className="transactions">
          {transactions.map(transactions => (
            <Transaction key={transactions.id} {...transactions} />
          ))}
        </ul>
      </div>
    );
  }


export default TransactionsList;
