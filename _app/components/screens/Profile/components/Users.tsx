/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {margins} from '../../../../@lib/constants';
import Colors from '../../../../@lib/constants/theme/Colors';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {TouchableOpacity} from 'react-native';
import NoSeachResult from '../../../common/loader/NoSearch';
import ReusableFlatList from '../../../common/ScrollComponent/ReusableFlatList';
import {_IMAGE} from '../../../../@lib/assets/images';
import CardTitleSkeleton from '../../../common/loader/CardTitleSkeleton';
import Search from '../../Timeline/components/Search';
import {useUsers} from '../utils/useUsers';

const Users = () => {
  const {
    isLoading,
    handleLoadMore,
    handleFollow,
    handleSearchTextChange,
    userCount,
    searchLoading,
    seachError,
    flatListData,
    searchText,
    isFetchingNextPage,
  } = useUsers();
  function _renderItem({item}: any) {
    return (
      <Card style={styles.card}>
        <Card.Title
          title={item?.username}
          subtitle={item?.email}
          titleStyle={styles.titleStyle}
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
              onPress={() => handleFollow(item.id, item.username)}>
              <Image
                {...props}
                source={_IMAGE.following}
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
      <View style={styles.searchWrapper}>
        <Search
          handleSearchTextChange={handleSearchTextChange}
          searchText={searchText}
          searchLoading={searchLoading}
        />
      </View>
      <ReusableFlatList
        data={flatListData || []}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        ListFooterComponent={isFetchingNextPage ? <CardTitleSkeleton /> : null}
        ListEmptyComponent={
          userCount === 0 ? (
            <>
              <NoSeachResult />
            </>
          ) : !seachError && isLoading ? (
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

export default Users;

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
  titleStyle: {
    fontWeight: '600',
  },
  subtitle: {
    fontSize: Text_Size.Text_8,
    color: Colors.gray,
  },
  searchWrapper: {marginHorizontal: 3},
});
