import React, {useState} from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {margins} from '../../../@lib/constants';
import SafeArea from '../../common/uiKits/SafeArea';
import PostCard from './components/PostCard';
import Search from './components/Search';
import {FAB} from 'react-native-paper';
import Colors from '../../../@lib/constants/theme/Colors';
import TBottomSheet from '../../common/modal/TBottomSheet';
import TitleText from '../../common/text/TitleText';
import FA from 'react-native-vector-icons/FontAwesome';
const Timeline = () => {
  const [post, setPost] = useState(false);

  function hanldePost() {
    setPost(prev => !prev);
  }
  const [showContent, setShowContent] = useState(false);
  const scaleValue = useState(new Animated.Value(0))[0];
  const opacityValue = useState(new Animated.Value(0))[0];

  const handlePress = () => {
    setShowContent(!showContent);

    if (!showContent) {
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const animatedStyle = {
    transform: [{scale: scaleValue}],
    opacity: opacityValue,
  };
  return (
    <SafeArea style={styles.container}>
      {/* Search */}
      <Search hanldePost={hanldePost} />
      {/* <TouchableOpacity onPress={handlePress}>
        <Animated.View
          style={[
            styles.dcontainer,
            {backgroundColor: backgroundColorInterpolate},
          ]}>
          <FA name="user" />
          <Text style={styles.text}>Home</Text>
        </Animated.View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handlePress} style={styles.dcontainer}>
        <FA name="user" size={30} />
        {showContent && (
          <Animated.View style={[styles.contentContainer, animatedStyle]}>
            <FA name="user" size={30} />
            <Animated.View style={styles.textContainer}>
              <Animated.Text style={styles.text}>Hello, World!</Animated.Text>
            </Animated.View>
          </Animated.View>
        )}
      </TouchableOpacity>
      {/* Card */}
      <FlatList
        data={[1, 2, 2]}
        renderItem={({}) => <PostCard />}
        showsVerticalScrollIndicator={false}
      />
      <FAB
        // size="large"
        icon="twitter"
        color={Colors.secondary}
        customSize={70}
        style={styles.fab}
        onPress={() => setPost(true)}
      />
      <TBottomSheet isVisible={post} onClose={hanldePost}>
        <TitleText textStyle={{}} text={'hello'} />
      </TBottomSheet>
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: margins.md,
  },
  fab: {
    position: 'absolute',
    margin: 0,
    right: 10,
    bottom: 10,
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },
  dcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    position: 'absolute',
    backgroundColor: '#F8D7DA',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Timeline;
