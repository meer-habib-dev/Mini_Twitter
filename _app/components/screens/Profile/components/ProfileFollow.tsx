/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../../../@lib/constants/theme/Colors';
import {margins} from '../../../../@lib/constants';
import HeaderText from '../../../common/text/HeaderText';
import {getStorageItem} from '../../../../@lib/utils/functions/storage';

const ProfileFollow = () => {
  const follower = getStorageItem('follower', 'num');
  const following = getStorageItem('following', 'num');
  const [followState, setFollowState] = useState(0);
  const [followingState, setFollowingState] = useState(0);
  useEffect(() => {
    setFollowState(follower);
    setFollowingState(following);
  }, [follower, following]);
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopRightRadius: margins.lg,
        borderTopLeftRadius: margins.lg,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <HeaderText
          textStyle={{
            fontWeight: 'bold',
            color: Colors.secondary,
            marginRight: margins.xs,
          }}
          text={followState}
        />
        <HeaderText textStyle={{color: Colors.secondary}} text={'Following'} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <HeaderText
          textStyle={{
            fontWeight: 'bold',
            color: Colors.secondary,
            marginRight: margins.xs,
          }}
          text={followingState}
        />
        <HeaderText textStyle={{color: Colors.secondary}} text={'Following'} />
      </View>
    </View>
  );
};

export default ProfileFollow;

const styles = StyleSheet.create({});
