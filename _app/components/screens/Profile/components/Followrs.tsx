import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {margins} from '../../../../@lib/constants';
import {Avatar, Card, IconButton} from 'react-native-paper';
import Colors from '../../../../@lib/constants/theme/Colors';
import Text_Size from '../../../../@lib/utils/functions/textScaling';

const Followrs = () => {
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
      <FlatList
        data={[1, 2, 3, 2]}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Followrs;

const styles = StyleSheet.create({});
