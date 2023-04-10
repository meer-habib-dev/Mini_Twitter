import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import DescriptionText from '../../../common/text/DescriptionText';
import {margins} from '../../../../@lib/constants';
import Colors from '../../../../@lib/constants/theme/Colors';
import TitleText from '../../../common/text/TitleText';
import ShortText from '../../../common/text/ShortText';

const MyTwitte = () => {
  function _renderItem() {
    return (
      <Card
        style={{
          margin: margins.xs,
          backgroundColor: Colors.secondary,
          marginVertical: margins.sm,
        }}>
        <Card.Content>
          <DescriptionText
            textStyle={{}}
            text="aflkasdf als;dfjlo asdkfjla adflsalsdfja sdlfkjasdlfja sdlfkjasd fkjalkj asldfja sld kfjadffja sdf ljasldfjasld fjal sdfj"
          />
        </Card.Content>

        <Card.Content
          style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ShortText text="5 month age" textStyle={{marginRight: margins.xs}} />
          <TitleText text="@meerhabib" />
        </Card.Content>
      </Card>
    );
  }
  return (
    <View style={{marginTop: margins.sm}}>
      <FlatList
        data={[1, 2, 3, 2]}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyTwitte;

const styles = StyleSheet.create({});
