import {StyleSheet} from 'react-native';
import Colors from '../../../../@lib/constants/theme/Colors';

export const authenticationStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  mainContainer: {
    flex: 1,
  },
  tabBarIndicatorStyles: {
    backgroundColor: Colors.primary,
    width: '50%',
    height: 6,
  },

  tabStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  tabBarMainStyles: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  tabText: {
    fontFamily: 'SinewsSansProDEMO-Medium',
    fontSize: 20,
    color: '#454545',
    fontWeight: '900',
  },
  tabViewContainer: {flex: 0.45, backgroundColor: 'white'},
  backgroundImage: {width: '100%', height: '100%'},
  imageWrapper: {width: '70%', height: '70%'},
  imageWrapperWrapper: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});
