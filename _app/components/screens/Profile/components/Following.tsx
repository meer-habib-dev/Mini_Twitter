/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Card} from 'react-native-paper';
import {margins} from '../../../../@lib/constants';
import Colors from '../../../../@lib/constants/theme/Colors';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {TouchableOpacity} from 'react-native';
import NoSeachResult from '../../../common/loader/NoSearch';
import ReusableFlatList from '../../../common/ScrollComponent/ReusableFlatList';
import {useGetFollowingApi} from '../../../../@lib/api/services/useGetFollowingApi';
import {_IMAGE} from '../../../../@lib/assets/images';
import CardTitleSkeleton from '../../../common/loader/CardTitleSkeleton';
import {setStorageItem} from '../../../../@lib/utils/functions/storage';

const Following = () => {
  const {data, isLoading, handleLoadMore, handleUnfollow} =
    useGetFollowingApi();
  const flatListData = data?.pages?.flatMap(page => page?.data?.followings)!;
  const followingCount = flatListData?.length;
  useEffect(() => {
    typeof followingCount === 'number' &&
      setStorageItem('following', followingCount);
  }, [followingCount]);

  function _renderItem({item}: any) {
    return (
      <Card style={styles.card}>
        <Card.Title
          title={item?.username}
          subtitle={item?.email}
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
          left={props => (
            <Image
              {...props}
              source={{
                uri: 'https://placeimg.com/640/480/people',
              }}
              style={styles.image}
            />
          )}
          right={props => (
            <TouchableOpacity
              onPress={() => handleUnfollow(item.id, item.username)}>
              <Image
                {...props}
                source={_IMAGE.unfollow}
                style={styles.unfollow}
              />
            </TouchableOpacity>
          )}
        />
      </Card>
    );
  }
  return (
    <View style={styles.container}>
      <ReusableFlatList
        data={flatListData || []}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        ListEmptyComponent={
          followingCount === 0 ? (
            <>
              <NoSeachResult />
            </>
          ) : isLoading ? (
            <>
              <CardTitleSkeleton />
            </>
          ) : (
            <NoSeachResult />
          )
        }
      />
    </View>
  );
};

export default Following;

const styles = StyleSheet.create({
  container: {marginTop: margins.sm},
  card: {
    margin: margins.xs,
    backgroundColor: Colors.secondary,
    marginVertical: margins.sm,
    paddingVertical: margins.sm,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 100,
    marginRight: margins.sm,
  },
  unfollow: {
    width: 30,
    height: 30,
    marginRight: margins.md,
  },
  title: {
    fontWeight: '600',
  },
  subtitle: {
    fontSize: Text_Size.Text_8,
    color: Colors.gray,
  },
});
