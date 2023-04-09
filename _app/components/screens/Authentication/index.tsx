import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View, _Image} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {_IMAGE} from '../../../@lib/assets/images';
import Colors from '../../../@lib/constants/theme/Colors';
import TitleText from '../../common/text/TitleText';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';

const Authentication = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'login', text: 'LOGIN'},
    {key: 'register', text: 'REGISTRATION'},
  ]);
  const _renderTitle = ({route}) => {
    return (
      <TitleText
        textStyle={{
          fontFamily: 'SinewsSansProDEMO-Medium',
          fontSize: 14,
          color: '#454545',
          fontWeight: '900',
        }}
        text={route.text}
      />
    );
  };
  const _renderHeader = props => {
    return (
      <TabBar
        inactiveColor={'#CECECE'}
        indicatorStyle={styles.tabBarIndicatorStyles}
        tabStyle={styles.tabStyles}
        style={styles.tabBarMainStyles}
        // labelStyle={styles.tabBarLabelStyles}
        // swipeEnabled={false}
        renderIcon={_renderTitle}
        {...props}
        // {...this.props}
      />
    );
  };
  const _renderScene = ({route}) => {
    switch (route.key) {
      case 'register':
        return <RegistrationComponent />;
      case 'login':
        return <LoginComponent />;

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
    height: '7rem',
  },

  tabStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  tabBarMainStyles: {
    backgroundColor: 'transparent',
    height: '50rem',
    justifyContent: 'center',
  },
});
export default Authentication;
