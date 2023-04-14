import {Alert, StyleSheet, View} from 'react-native';
import React from 'react';
import Ant from 'react-native-vector-icons/AntDesign';
import Colors from '../../../../@lib/constants/theme/Colors';
import TitleText from '../../../common/text/TitleText';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {margins} from '../../../../@lib/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import {deleteStorageItem} from '../../../../@lib/utils/functions/storage';
import {useNavigation} from '@react-navigation/native';
const ProfileTop = () => {
  const navigation = useNavigation();
  async function hanldeLogout() {
    Alert.alert('Log Out', 'Are you sure you want to logout', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: async () => {
          deleteStorageItem('auth-token');
          navigation.navigate('Authentication');
        },
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.leftWrapper}>
        <Ant name="twitter" color={Colors.primary} size={30} />
        <TitleText text={'Profile'} textStyle={styles.text} />
      </View>
      <TouchableOpacity onPress={hanldeLogout}>
        <Icon name="log-out" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: margins.md,
  },
  leftWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: Text_Size.Text_4,
    marginLeft: margins.sm,
  },
});
