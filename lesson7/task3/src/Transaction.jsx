import React from 'react';
import moment from 'moment';

const numberFormatter = new Intl.NumberFormat('en-GB');

const Transaction = ({ from, to, amount, rate, time }) => {
  const formattedDate = moment(time).format('DD MMM');
  const formattedTime = moment(time).format('HH:mm');
  const formattedAmount = numberFormatter.format(amount);

  return (
    <li className="transaction">
      <span className="transaction__date">{formattedDate}</span>
      <span className="transaction__time">{formattedTime}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formattedAmount}</span>
    </li>
  );
};

export default Transaction;
