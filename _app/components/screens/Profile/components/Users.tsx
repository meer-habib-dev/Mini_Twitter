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
import {useUsersApi} from '../../../../@lib/api/services/useUserApi';
import {useFollowApi} from '../../../../@lib/api/services/useFollowApi';

const Users = () => {
  const {data, isLoading, handleLoadMore} = useUsersApi();
  const {handleFollow} = useFollowApi();
  const flatListData = data?.pages?.flatMap(page => page?.data?.users)!;

  const userCount = flatListData?.length;
  console.log('user', flatListData);
  function _renderItem({item}: any) {
    return (
      <Card
        style={{
          margin: margins.xs,
          backgroundColor: Colors.secondary,
          marginVertical: margins.sm,
          paddingVertical: margins.sm,
        }}>
        <Card.Title
          title={item?.username}
          subtitle={item.email}
          titleStyle={{
            fontWeight: '600',
          }}
          subtitleStyle={{
            fontSize: Text_Size.Text_8,
            color: Colors.gray,
          }}
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
    <View style={{marginTop: margins.sm}}>
      <ReusableFlatList
        data={flatListData || []}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        ListEmptyComponent={
          userCount === 0 ? (
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

export default Users;

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
    // width: '110%',
    // height: '110%',
    borderRadius: 100,
    marginRight: margins.sm,
  },
  unfollow: {
    width: 30,
    height: 30,
    // width: '110%',
    // height: '110%',
    // borderRadius: 100,
    marginRight: margins.md,
  },
});
