import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../../../../@lib/constants/theme/Colors';
import {margins} from '../../../../@lib/constants';
import HeaderText from '../../../common/text/HeaderText';
import {useProfileFollow} from '../utils/useProfileFollow';

const ProfileFollow = () => {
  const {followState, followingState} = useProfileFollow();
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <HeaderText textStyle={styles.headerText} text={followState} />
        <HeaderText textStyle={{color: Colors.secondary}} text={'Following'} />
      </View>
      <View style={styles.headerWrapper}>
        <HeaderText textStyle={styles.following} text={followingState} />
        <HeaderText textStyle={{color: Colors.secondary}} text={'Following'} />
      </View>
    </View>
  );
};

export default ProfileFollow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopRightRadius: margins.lg,
    borderTopLeftRadius: margins.lg,
  },
  textWrapper: {flexDirection: 'row', alignItems: 'center'},
  headerText: {
    fontWeight: 'bold',
    color: Colors.secondary,
    marginRight: margins.xs,
  },
  headerWrapper: {flexDirection: 'row', alignItems: 'center'},
  following: {
    fontWeight: 'bold',
    color: Colors.secondary,
    marginRight: margins.xs,
  },
});
