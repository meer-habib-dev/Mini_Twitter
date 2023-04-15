import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {margins} from '../../../../@lib/constants';
import {Avatar, Card, IconButton} from 'react-native-paper';
import Colors from '../../../../@lib/constants/theme/Colors';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {useGetFollowersApi} from '../../../../@lib/api/services/useGetFollowersApi';
import ReusableFlatList from '../../../common/ScrollComponent/ReusableFlatList';
import NoSeachResult from '../../../common/loader/NoSearch';

const Followrs = () => {
  const {data, isLoading, handleLoadMore} = useGetFollowersApi();
  console.log('follwer', data);
  const flatListData = data?.pages?.flatMap(page => page?.data?.followers)!;
  const followerCount = flatListData?.length;
  function _renderItem() {
    return (
      <Card
        style={{
          margin: margins.xs,
          backgroundColor: Colors.secondary,
          marginVertical: margins.sm,
        }}>
        <Card.Title
          title="Meer Habib"
          subtitle="meerhabib200@gmail.com"
          titleStyle={{
            fontWeight: '600',
          }}
          subtitleStyle={{
            fontSize: Text_Size.Text_8,
            color: Colors.gray,
          }}
          left={props => <Avatar.Icon {...props} icon="folder" />}
          // right={props => (
          //   <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
          // )}
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
          ) : null
        }
      />
    </View>
  );
};

export default Followrs;

const styles = StyleSheet.create({});
