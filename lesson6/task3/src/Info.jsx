import React from 'react';

const Info = ({ info }) => {
  if (!info) {
    return null;
  }

  return <div className="mesaage">{info}</div>;
};

export default Info;
