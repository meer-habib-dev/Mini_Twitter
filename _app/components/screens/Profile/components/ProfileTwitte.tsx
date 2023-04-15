/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../../../../@lib/constants/theme/Colors';
import {margins} from '../../../../@lib/constants';
import {TabBar, TabView} from 'react-native-tab-view';
import TitleText from '../../../common/text/TitleText';
import MyTwitte from './MyTwitte';
import Followrs from './Followrs';
import Following from './Following';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import Users from './Users';
import {_IMAGE} from '../../../../@lib/assets/images';

const ProfileTwitte = ({}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'mytwitte', text: 'My Twitte'},
    {key: 'followers', text: 'Followers'},
    {key: 'following', text: 'Following'},
    {key: 'users', text: 'Users'},
  ]);
  const _renderTitleIcon = ({key}) => {
    switch (key) {
      case 'mytwitte':
        return _IMAGE.mytweet;
      case 'followers':
        return _IMAGE.followers;
      case 'following':
        return _IMAGE.following;
      case 'users':
        return _IMAGE.user;

      default:
        return null;
    }
  };
  const _renderTitle = ({route}) => {
    // console.log('r', route);
    return (
      // <TitleText
      //   textStyle={{
      //     fontSize: Text_Size.Text_0,
      //     color: routes[index].key === route.key ? Colors.primary : Colors.text,
      //     fontWeight: routes[index].key === route.key ? 'bold' : 'normal',
      //   }}
      //   text={route.text}
      // />
      <Image style={{width: 30, height: 30}} source={_renderTitleIcon(route)} />
    );
  };
  const _renderHeader = props => {
    return (
      <TabBar
        inactiveColor={'#CECECE'}
        indicatorStyle={styles.tabBarIndicatorStyles}
        tabStyle={styles.tabStyles}
        style={styles.tabBarMainStyles}
        renderIcon={_renderTitle}
        {...props}
      />
    );
  };
  const _renderScene = ({route}) => {
    switch (route.key) {
      case 'mytwitte':
        return <MyTwitte />;
      case 'followers':
        return <Followrs />;
      case 'following':
        return <Following />;
      case 'users':
        return <Users />;

      default:
        return null;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        borderTopRightRadius: margins.lg,
        borderTopLeftRadius: margins.lg,
        marginTop: -margins.lg,
        paddingHorizontal: margins.lg,
      }}>
      <TabView
        navigationState={{index, routes}}
        renderScene={_renderScene}
        renderTabBar={_renderHeader}
        onIndexChange={setIndex}
      />
    </View>
  );
};

export default ProfileTwitte;

const styles = StyleSheet.create({
  tabBarIndicatorStyles: {
    backgroundColor: Colors.primary,
    height: 4,
  },

  tabStyles: {
    // justifyContent: 'center',
    marginTop: margins.md,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  tabBarMainStyles: {
    backgroundColor: 'transparent',
    // height: 10,

    justifyContent: 'center',
  },
});
