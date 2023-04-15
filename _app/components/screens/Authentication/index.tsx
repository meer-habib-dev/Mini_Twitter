import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  PressableAndroidRippleConfig,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  _Image,
} from 'react-native';
import {
  TabView,
  TabBar,
  NavigationState,
  Route,
  SceneRendererProps,
  TabBarIndicatorProps,
  TabBarItemProps,
} from 'react-native-tab-view';
import {Scene, Event} from 'react-native-tab-view/lib/typescript/src/types';
import useAuthApi from '../../../@lib/api/services/useAuthApi';
import {_IMAGE} from '../../../@lib/assets/images';
import Colors from '../../../@lib/constants/theme/Colors';
import TitleText from '../../common/text/TitleText';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';

const Authentication = () => {
  const [routes] = useState([
    {key: 'login', text: 'LOGIN'},
    {key: 'register', text: 'REGISTRATION'},
  ]);
  const {onSubmit, isLoading, data, index, setIndex} = useAuthApi();

  const _renderTitle = ({route}) => {
    return (
      <TitleText
        textStyle={{
          fontFamily: 'SinewsSansProDEMO-Medium',
          fontSize: 20,
          color: '#454545',
          fontWeight: '900',
        }}
        text={route.text}
      />
    );
  };
  const _renderHeader = (
    props: JSX.IntrinsicAttributes &
      SceneRendererProps & {
        navigationState: NavigationState<Route>;
        scrollEnabled?: boolean | undefined;
        bounces?: boolean | undefined;
        activeColor?: string | undefined;
        inactiveColor?: string | undefined;
        pressColor?: string | undefined;
        pressOpacity?: number | undefined;
        getLabelText?:
          | ((scene: Scene<Route>) => string | undefined)
          | undefined;
        getAccessible?:
          | ((scene: Scene<Route>) => boolean | undefined)
          | undefined;
        getAccessibilityLabel?:
          | ((scene: Scene<Route>) => string | undefined)
          | undefined;
        getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined;
        renderLabel?:
          | ((
              scene: Scene<Route> & {focused: boolean; color: string},
            ) => React.ReactNode)
          | undefined;
        renderIcon?:
          | ((
              scene: Scene<Route> & {focused: boolean; color: string},
            ) => React.ReactNode)
          | undefined;
        renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined;
        renderIndicator?:
          | ((props: TabBarIndicatorProps<Route>) => React.ReactNode)
          | undefined;
        renderTabBarItem?:
          | ((
              props: TabBarItemProps<Route> & {key: string},
            ) => React.ReactElement<
              any,
              string | React.JSXElementConstructor<any>
            >)
          | undefined;
        onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined;
        onTabLongPress?: ((scene: Scene<Route>) => void) | undefined;
        tabStyle?: StyleProp<ViewStyle>;
        indicatorStyle?: StyleProp<ViewStyle>;
        indicatorContainerStyle?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<TextStyle>;
        contentContainerStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        gap?: number | undefined;
        testID?: string | undefined;
        android_ripple?: PressableAndroidRippleConfig | undefined;
      },
  ) => {
    return (
      <TabBar
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
      case 'register':
        return (
          <RegistrationComponent onSubmit={onSubmit} isLoading={isLoading} />
        );
      case 'login':
        return <LoginComponent isLoading={isLoading} onSubmit={onSubmit} />;

      default:
        return null;
    }
  };
 

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0.55,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.primary,
        }}>
        <View style={{width: '70%', height: '70%'}}>
          <ImageBackground
            resizeMode={'contain'}
            style={{width: '100%', height: '100%'}}
            source={_IMAGE.logo}
          />
        </View>
      </View>
      <View style={{flex: 0.45, backgroundColor: 'white'}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={_renderScene}
          renderTabBar={_renderHeader}
          onIndexChange={setIndex}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default Authentication;
