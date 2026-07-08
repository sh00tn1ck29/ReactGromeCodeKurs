import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  render() {
    const copyTransactions = this.props.transactions.slice();

    return (
      <ul className="transactions">
        {copyTransactions.map(t => (
          <Transaction key={t.id} {...t} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
