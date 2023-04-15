import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import Colors from '../../../../@lib/constants/theme/Colors';
import TitleText from '../../../common/text/TitleText';
import ShortText from '../../../common/text/ShortText';
import {useMyTweetApi} from '../../../../@lib/api/services/useMyTweetApi';
import ReusableFlatList from '../../../common/ScrollComponent/ReusableFlatList';
import NoSeachResult from '../../../common/loader/NoSearch';
import {getTimeSince} from '../../../../@lib/utils/functions/getTimeSince';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {margins} from '../../../../@lib/constants';
import CardContentSkeleton from '../../../common/loader/CardContentSkeleton';

const MyTwitte = () => {
  const {data, isLoading, handleLoadMore} = useMyTweetApi();
  console.log('tweetdata', data);
  const flatListData = data?.pages?.flatMap(page => page?.data?.my_tweets)!;
  const tweetCount = flatListData?.length;
  function _renderItem({item}) {
    return (
      <Card
        style={{
          margin: margins.xs,
          backgroundColor: Colors.secondary,
          marginVertical: margins.sm,
        }}>
        <Card.Content>
          <TitleText
            textStyle={{marginBottom: margins.md, fontSize: Text_Size.Text_2}}
            text={item?.content}
          />
        </Card.Content>

        <Card.Content
          style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ShortText
            text={getTimeSince(new Date(item?.published))}
            textStyle={{marginRight: margins.xs}}
          />
          <TitleText text={'@' + item?.user?.username} />
        </Card.Content>
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
          tweetCount === 0 ? (
            <>
              <NoSeachResult />
            </>
          ) : isLoading ? (
            <CardContentSkeleton />
          ) : (
            <NoSeachResult />
          )
        }
      />
    </View>
  );
};

export default MyTwitte;

const styles = StyleSheet.create({});
