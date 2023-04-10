import React from 'react';
import {} from 'react-native';
import ProfileFollow from './components/ProfileFollow';
import ProfileInfo from './components/ProfileInfo';
import ProfileTop from './components/ProfileTop';
import ProfileTwitte from './components/ProfileTwitte';

const Profile = () => {
  return (
    <>
      {/* Header Part */}
      <ProfileTop />
      {/* Profile Infos */}
      <ProfileInfo />
      {/* Follower Following Section */}
      <ProfileFollow />
      {/* Timeline Sectiokn */}
      <ProfileTwitte />
    </>
  );
};

export default Profile;
