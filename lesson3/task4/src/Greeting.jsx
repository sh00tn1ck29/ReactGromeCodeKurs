import React from 'react';
import moment from 'moment';

const Greeting = props => {
  const ageUser = moment().diff(moment(props.birthDate), 'years');

  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I am ${ageUser} years old`}
    </div>
  );
};

export default Greeting;
