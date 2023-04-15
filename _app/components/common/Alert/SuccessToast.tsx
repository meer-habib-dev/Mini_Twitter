import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Toast from 'react-native-toast-message';
const SuccessToast = ({title, description}) => {
  return (
    <Toast
      type="success"
      position="top"
      text1={title}
      text2={description}
      visibilityTime={4000}
      autoHide={true}
      topOffset={60}
      bottomOffset={40}
    />
  );
};

export default SuccessToast;

const styles = StyleSheet.create({});
