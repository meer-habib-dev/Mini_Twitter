/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../../../../@lib/constants/theme/Colors';
import {margins} from '../../../../@lib/constants';
import HeaderText from '../../../common/text/HeaderText';

const ProfileFollow = () => {
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
          text={'139'}
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
          text={'139'}
        />
        <HeaderText textStyle={{color: Colors.secondary}} text={'Following'} />
      </View>
    </View>
  );
};

export default ProfileFollow;

const styles = StyleSheet.create({});
