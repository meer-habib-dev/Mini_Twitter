import React, {useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import useAuthApi from '../../../@lib/api/services/useAuthApi';
import {_IMAGE} from '../../../@lib/assets/images';
import TitleText from '../../common/text/TitleText';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
import {authenticationStyles as styles} from './styles/authenticationStyle';
const Authentication = () => {
  const [routes] = useState([
    {key: 'login', text: 'LOGIN'},
    {key: 'register', text: 'REGISTRATION'},
  ]);
  const {onSubmit, isLoading, index, setIndex} = useAuthApi();

  const _renderTitle = ({route}: any) => {
    return <TitleText textStyle={styles.tabText} text={route.text} />;
  };
  const _renderHeader = (props: any) => {
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
  const _renderScene = ({route}: any) => {
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
    <View style={styles.container}>
      <View style={styles.imageWrapperWrapper}>
        <View style={styles.imageWrapper}>
          <ImageBackground
            resizeMode={'contain'}
            style={styles.backgroundImage}
            source={_IMAGE.logo}
          />
        </View>
      </View>
      <View style={styles.tabViewContainer}>
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

export default Authentication;
