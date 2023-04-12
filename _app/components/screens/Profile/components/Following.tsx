import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Avatar, Card} from 'react-native-paper';
import {margins} from '../../../../@lib/constants';
import Colors from '../../../../@lib/constants/theme/Colors';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native';

const Following = () => {
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
      <FlatList
        data={[1, 2, 3, 2]}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Following;

const styles = StyleSheet.create({});
