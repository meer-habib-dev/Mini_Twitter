import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {margins} from '../../../@lib/constants';
import SafeArea from '../../common/uiKits/SafeArea';
import PostCard from './components/PostCard';
import Search from './components/Search';
import {FAB} from 'react-native-paper';
import Colors from '../../../@lib/constants/theme/Colors';
import TBottomSheet from '../../common/modal/TBottomSheet';
import {useTimelineApi} from '../../../@lib/api/services/useTimelineApi';
import CardSkeleton from '../../common/loader/CardSkeleton';
import ReusableFlatList from '../../common/ScrollComponent/ReusableFlatList';
import {useSearchUser} from '../../../@lib/api/services/useSearchUser';
import HeaderText from '../../common/text/HeaderText';
import Text_Size from '../../../@lib/utils/functions/textScaling';
import {View} from 'react-native';
import NoSeachResult from '../../common/loader/NoSearch';
import PostATweet from './components/PostATweet';
import {useFollowApi} from '../../../@lib/api/services/useFollowApi';
const Timeline = () => {
  const [post, setPost] = useState(false);
  const {
    isLoading,
    data,
    handleLoadMore,
    isFetchingNextPage,
    onSubmit,
    tweetLoading,
  } = useTimelineApi();
  const {
    searchLoading,

    searchedUser,
    searchText,
    handleSearchTextChange,
  } = useSearchUser();
  const {handleFollow} = useFollowApi();
  function hanldePost() {
    setPost(prev => !prev);
  }
  const searchEnable = searchText?.length > 0;
  const flatlistData = searchEnable
    ? searchedUser?.data?.search_results
    : data?.pages?.flatMap(page => page?.data?.timeline)! || [];
  const seachError = searchedUser?.response?.data?.error
    ? searchedUser?.response?.data?.error
    : null;
  const searchCount = searchedUser?.data?.count;
  return (
    <SafeArea style={styles.container}>
      {/* Search */}

      <Search
        hanldePost={hanldePost}
        handleSearchTextChange={handleSearchTextChange}
        searchText={searchText}
        searchLoading={searchLoading}
      />

      {/* Card */}

      <ReusableFlatList
        // style={{flex: 1}}
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
        keyExtractor={(item: {id: any}, ind: any) =>
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
            <View style={{marginTop: '45%'}}>
              <NoSeachResult />
            </View>
          ) : seachError ? (
            <View
              style={{
                marginTop: '10%',
              }}>
              <HeaderText
                text={seachError}
                textStyle={{
                  fontWeight: 'bold',
                  color: Colors.primary,
                  fontSize: Text_Size.Text_6,
                  textAlign: 'center',
                }}
              />
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
});

export default Timeline;
