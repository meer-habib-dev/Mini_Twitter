import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {margins} from '../../../@lib/constants';
import SafeArea from '../../common/uiKits/SafeArea';
import PostCard from './components/PostCard';
import Search from './components/Search';
import {ActivityIndicator, FAB} from 'react-native-paper';
import Colors from '../../../@lib/constants/theme/Colors';
import TBottomSheet from '../../common/modal/TBottomSheet';
import TitleText from '../../common/text/TitleText';
import {useTimelineApi} from '../../../@lib/api/services/useTimelineApi';
// import {useLocalStorage} from '../../../@lib/Hooks/useLocalStorage';
const Timeline = () => {
  const {isLoading, data, handleLoadMore, isRefetching} = useTimelineApi();
  const [post, setPost] = useState(false);

  function hanldePost() {
    setPost(prev => !prev);
  }
  const renderLoader = () => <ActivityIndicator size="large" />;
  console.log(
    'c',
    data?.pages?.flatMap(page => page?.data?.users),
  );
  return (
    <SafeArea style={styles.container}>
      {/* Search */}
      <Search hanldePost={hanldePost} />

      {/* Card */}
      <FlatList
        data={data?.pages?.flatMap(page => page?.data?.users)}
        renderItem={({}) => <PostCard />}
        // keyExtractor={item => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        // ListFooterComponent={isRefetching ? renderLoader : null}
        ListEmptyComponent={isLoading ? renderLoader : null}
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
});

export default Timeline;
