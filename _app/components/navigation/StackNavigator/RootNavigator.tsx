import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator/TabNavigator';
import HeaderWithBack from '../../common/uiKits/HeaderWithBack';
import Authentication from '../../screens/Authentication';
import Profile from '../../screens/Profile';
import Timeline from '../../screens/Timeline';

export type RootStackParamList = {
  Main: undefined;
  Authentication: undefined;
  Profile: undefined;
  Timeline: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
      }}>
      {/* <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group> */}
      <RootStack.Group>
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="Authentication"
          component={Authentication}
        />
        <RootStack.Screen
          options={({navigation}) => ({
            title: 'Details',
            header: () => (
              <HeaderWithBack navigation={navigation} title="Details" />
            ),
          })}
          name="Profile"
          component={Profile}
        />
        <RootStack.Screen
          options={({navigation}) => ({
            title: 'Post Planet',
            header: () => (
              <HeaderWithBack navigation={navigation} title="Post Planet" />
            ),
          })}
          name="Timeline"
          component={Timeline}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
