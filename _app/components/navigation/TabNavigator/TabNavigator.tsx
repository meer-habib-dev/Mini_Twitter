import {Platform, StyleSheet, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {useNavigation} from '@react-navigation/native';

import {SCREEN_WIDTH} from '../../../@lib/utils/functions/WindowSize';
import Colors from '../../../@lib/constants/theme/Colors';
import Timeline from '../../screens/Timeline';
import Profile from '../../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {FadeInUp, FadeOutDown, Layout} from 'react-native-reanimated';

export type TabStackParamList = {
  Timeline: undefined;
  Profile: undefined;
  ShowMore: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
const TabNavigator = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const transitionAnimation = ({current, next}) => {
    return {
      transitionSpec: {
        duration: 300,
        easing: Animated.Easing.out(Animated.Easing.ease),
        timing: Animated.timing,
      },
      screenInterpolator: ({position, scene}) => {
        const {index} = scene;
        const opacity = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 0],
        });
        return {opacity};
      },
    };
  };
  const height =
    SCREEN_WIDTH <= 380
      ? Platform.OS !== 'ios'
        ? 60
        : 60
      : Platform.OS === 'ios'
      ? 80
      : 70;

  return (
    <Tab.Navigator
      initialRouteName="Timeline"
      tabBar={props => (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOutDown}
          layout={Layout.duration(100)}
          style={{
            height: 80,
          }}>
          <BottomTabBar {...props} />
        </Animated.View>
      )}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.iosBG,
          height: height,
          borderTopWidth: 0,
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarActiveTintColor: Colors.primaryDeep,
        transitionSpec: transitionAnimation,
        tabBarInactiveTintColor: Colors.gray,
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Timeline') {
            return focused ? (
              <MatIcon
                size={30}
                name="home"
                color={focused ? Colors.black : Colors.gray}
              />
            ) : (
              <MatIcon
                size={30}
                name="home-outline"
                color={focused ? Colors.black : Colors.gray}
              />
            );
          } else if (route.name === 'Search') {
            return focused ? (
              <MatIcon
                size={30}
                name="heart"
                color={focused ? Colors.black : Colors.gray}
              />
            ) : (
              <MatIcon
                size={30}
                name="heart-outline"
                color={focused ? Colors.black : Colors.gray}
              />
            );
          } else if (route.name === 'Profile') {
            return focused ? (
              <Icon
                size={30}
                name="user"
                color={focused ? Colors.black : Colors.gray}
              />
            ) : (
              <Icon
                size={25}
                name="user-o"
                color={focused ? Colors.black : Colors.gray}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
