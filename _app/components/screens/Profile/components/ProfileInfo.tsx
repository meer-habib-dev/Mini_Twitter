import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import TitleText from '../../../common/text/TitleText';
import ShortText from '../../../common/text/ShortText';
import {margins} from '../../../../@lib/constants';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {getStorageItem} from '../../../../@lib/utils/functions/storage';
import {splitEmail} from '../../../../@lib/utils/functions/splitEmail';

const ProfileInfo = () => {
  const email = getStorageItem('user-email', 'str');
  const [name, domain] = splitEmail(email);

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
        style={{width: 80, height: 80, borderRadius: 100}}
      />

      <TitleText
        textStyle={{
          fontWeight: 'bold',
          fontSize: Text_Size.Text_3,
          marginTop: margins.sm,
        }}
        text={name}
      />

      <ShortText text={domain} textStyle={{fontWeight: 'bold'}} />
      <ShortText text="React Native Developer | React Doctor" />
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({});
