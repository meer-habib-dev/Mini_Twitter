import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Avatar, Card} from 'react-native-paper';
import {margins} from '../../../../@lib/constants';
import Colors from '../../../../@lib/constants/theme/Colors';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native';
import NoSeachResult from '../../../common/loader/NoSearch';
import ReusableFlatList from '../../../common/ScrollComponent/ReusableFlatList';
import {useGetFollowingApi} from '../../../../@lib/api/services/useGetFollowingApi';

const Following = () => {
  const {data, isLoading, handleLoadMore} = useGetFollowingApi();
  console.log('following', data);
  const flatListData = data?.pages?.flatMap(page => page?.data?.followings)!;
  const followingCount = flatListData?.length;
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
          right={props => (
            // <IconButton {...props} icon="user-following" onPress={() => {}} />
            <TouchableOpacity>
              <Icon
                name="user-following"
                {...props}
                style={{marginRight: margins.md}}
                color={Colors.primary}
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
          followingCount === 0 ? (
            <>
              <NoSeachResult />
            </>
          ) : null
        }
      />
    </View>
  );
};

export default Following;

const styles = StyleSheet.create({});
