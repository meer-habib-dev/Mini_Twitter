import {StyleSheet, View} from 'react-native';
import React from 'react';
import Ant from 'react-native-vector-icons/AntDesign';
import Colors from '../../../../@lib/constants/theme/Colors';
import TitleText from '../../../common/text/TitleText';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {margins} from '../../../../@lib/constants';
const ProfileTop = () => {
  return (
    <View style={styles.container}>
      <Ant name="twitter" color={Colors.primary} size={30} />
      <TitleText text={'Profile'} textStyle={styles.text} />
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: margins.md,
  },
  text: {
    fontSize: Text_Size.Text_4,
    marginLeft: margins.sm,
  },
});
