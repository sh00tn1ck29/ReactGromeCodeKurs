import React from 'react';
import moment from 'moment';

const Profile = props => {
  const formattedDate = moment(props.userData.birthDate).format('DD MMM YY');

  return (
    <div className="profile">
      <div className="profile__name">
        {`${props.userData.firstName} ${props.userData.lastName}`}
      </div>

      <div className="profile__birth">
        {`Was born ${formattedDate} in ${props.userData.birthPlace}`}
      </div>
    </div>
  );
};

export default Profile;
