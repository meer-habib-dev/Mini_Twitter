import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {margins} from '../../../../@lib/constants';
import {Card} from 'react-native-paper';
import Colors from '../../../../@lib/constants/theme/Colors';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {useGetFollowersApi} from '../../../../@lib/api/services/useGetFollowersApi';
import ReusableFlatList from '../../../common/ScrollComponent/ReusableFlatList';
import NoSeachResult from '../../../common/loader/NoSearch';
import CardTitleSkeleton from '../../../common/loader/CardTitleSkeleton';
import {setStorageItem} from '../../../../@lib/utils/functions/storage';

const Followrs = () => {
  const {data, isLoading, handleLoadMore} = useGetFollowersApi();
  const flatListData = data?.pages?.flatMap(page => page?.data?.followers)!;
  const followerCount = flatListData?.length;
  useEffect(() => {
    typeof followerCount === 'number' &&
      setStorageItem('follower', followerCount);
  }, [followerCount]);
  function _renderItem({item}) {
    return (
      <Card
        style={{
          margin: margins.xs,
          backgroundColor: Colors.secondary,
          marginVertical: margins.sm,
        }}>
        <Card.Title
          title={item?.username}
          subtitle={item?.email}
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
          followerCount === 0 ? (
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

export default Followrs;

const styles = StyleSheet.create({});
