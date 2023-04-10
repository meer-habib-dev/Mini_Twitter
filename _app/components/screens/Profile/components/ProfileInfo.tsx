import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleText from '../../../common/text/TitleText';
import ShortText from '../../../common/text/ShortText';
import {margins} from '../../../../@lib/constants';

const ProfileInfo = () => {
  return (
    <View
      style={{
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: margins.md,
      }}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        }}
        style={{width: 70, height: 70, borderRadius: 100}}
      />
      <TitleText textStyle={{}} text={'Meer Habib'} />
      <ShortText text={'@meerhabib'} textStyle={{fontWeight: 'bold'}} />
      <ShortText text="React Native Developer | React Doctor" />
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({});
