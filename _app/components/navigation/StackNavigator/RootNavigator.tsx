import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator/TabNavigator';
import HeaderWithBack from '../../common/uiKits/HeaderWithBack';
import Authentication from '../../screens/Authentication';
import Profile from '../../screens/Profile';
import Timeline from '../../screens/Timeline';
import {useLocalStorage} from '../../../@lib/Hooks/useLocalStorage';

export type RootStackParamList = {
  Main: undefined;
  Authentication: undefined;
  Profile: undefined;
  Timeline: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  const {value} = useLocalStorage('auth-token');
  // const value = storage.getValue('auth-token');
  return (
    <RootStack.Navigator
      initialRouteName={value ? 'Main' : 'Authentication'}
      screenOptions={{
        gestureDirection: 'horizontal',
      }}>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
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
          title: 'Timeline',
          header: () => (
            <HeaderWithBack navigation={navigation} title="Post Planet" />
          ),
        })}
        name="Timeline"
        component={Timeline}
      />
      <RootStack.Group>
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="Authentication"
          component={Authentication}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
