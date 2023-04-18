import React from 'react';
import {StyleSheet} from 'react-native';
import {margins} from '../../../@lib/constants';
import SafeArea from '../../common/uiKits/SafeArea';
import PostCard from './components/PostCard';
import Search from './components/Search';
import {FAB} from 'react-native-paper';
import Colors from '../../../@lib/constants/theme/Colors';
import TBottomSheet from '../../common/modal/TBottomSheet';
import CardSkeleton from '../../common/loader/CardSkeleton';
import ReusableFlatList from '../../common/ScrollComponent/ReusableFlatList';
import HeaderText from '../../common/text/HeaderText';
import Text_Size from '../../../@lib/utils/functions/textScaling';
import {View} from 'react-native';
import NoSeachResult from '../../common/loader/NoSearch';
import PostATweet from './components/PostATweet';
import {useTimeline} from './utils/useTimeline';
const Timeline = () => {
  const {
    post,
    isLoading,
    handleFollow,
    hanldePost,
    handleLoadMore,
    handleSearchTextChange,
    onSubmit,
    isFetchingNextPage,
    tweetLoading,
    searchLoading,
    searchText,
    searchEnable,
    searchCount,
    flatlistData,
    seachError,
    setPost,
    timelineCount,
  } = useTimeline();
  return (
    <SafeArea style={styles.container}>
      {/* Search */}

      <Search
        handlePost={hanldePost}
        handleSearchTextChange={handleSearchTextChange}
        searchText={searchText}
        searchLoading={searchLoading}
      />

      {/* Card */}

      <ReusableFlatList
        data={flatlistData}
        renderItem={({item}) => (
          <PostCard
            item={item}
            handleFollow={() =>
              handleFollow(
                searchEnable ? item?.id : item?.user?.id,
                searchEnable ? item?.username : item?.user?.username,
              )
            }
            searchEnable={searchEnable}
            followText={'Follow'}
          />
        )}
        keyExtractor={(
          item: {id: any; username: string; content: string},
          ind: any,
        ) =>
          (
            item?.id +
            (searchEnable ? item.username : item?.content) +
            ind
          ).toString()
        }
        onEndReached={handleLoadMore}
        ListFooterComponent={isFetchingNextPage ? <CardSkeleton /> : null}
        ListEmptyComponent={
          searchCount === 0 ? (
            <View style={styles.searchCount}>
              <NoSeachResult />
            </View>
          ) : timelineCount === 0 ? (
            <View style={styles.searchError}>
              <HeaderText
                text={'Please follow users from your profile to your timeline'}
                textStyle={styles.textStyle}
              />
            </View>
          ) : seachError ? (
            <View style={styles.searchError}>
              <HeaderText text={seachError} textStyle={styles.textStyle} />
            </View>
          ) : !seachError && isLoading ? (
            <CardSkeleton />
          ) : null
        }
      />

      <FAB
        icon="twitter"
        color={Colors.secondary}
        customSize={70}
        style={styles.fab}
        onPress={() => setPost(true)}
      />
      <TBottomSheet isVisible={post} onClose={hanldePost}>
        <PostATweet
          onClose={hanldePost}
          onSubmit={onSubmit}
          tweetLoading={tweetLoading}
        />
      </TBottomSheet>
    </SafeArea>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: margins.md,
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 0,
    right: 10,
    bottom: 10,
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },
  searchCount: {marginTop: '45%'},
  searchError: {
    marginTop: '10%',
  },
  textStyle: {
    fontWeight: 'bold',
    color: Colors.primary,
    fontSize: Text_Size.Text_6,
    textAlign: 'center',
  },
});

export default Timeline;
