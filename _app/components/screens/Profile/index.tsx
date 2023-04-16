import React from 'react';
import {} from 'react-native';
import SafeArea from '../../common/uiKits/SafeArea';
import ProfileFollow from './components/ProfileFollow';
import ProfileInfo from './components/ProfileInfo';
import ProfileTop from './components/ProfileTop';
import ProfileTwitte from './components/ProfileTwitte';

const Profile = () => {
  return (
    <SafeArea>
      {/* Header Part */}
      <ProfileTop />
      {/* Profile Infos */}
      <ProfileInfo />
      {/* Follower Following Section */}
      <ProfileFollow />
      {/* Timeline Sectiokn */}
      <ProfileTwitte />
    </SafeArea>
  );
};
export default Profile;
