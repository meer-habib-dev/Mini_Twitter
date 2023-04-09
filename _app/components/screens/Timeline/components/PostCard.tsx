import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import TitleText from '../../../common/text/TitleText';
import ShortText from '../../../common/text/ShortText';
import Verified from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../../../@lib/constants/theme/Colors';
import {margins} from '../../../../@lib/constants';
import HeaderText from '../../../common/text/HeaderText';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PostCard = () => {
  return (
    <Card style={{backgroundColor: Colors.secondary, marginBottom: margins.md}}>
      <Card.Content>
        {/* User Info */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              marginRight: margins.sm,
            }}
          />
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <TitleText
                text={'CrickBuzz'}
                textStyle={{fontWeight: 'bold', marginRight: margins.sm}}
              />
              <Verified name="verified" size={20} color={Colors.primary} />
            </View>
            <ShortText text={'@cricbuzz'} />
          </View>
          <ShortText textStyle={{marginRight: margins.md}} text={'2 min age'} />
        </View>
        {/* dummy Text */}

        <View style={{marginVertical: margins.md}}>
          <HeaderText
            text={
              'This is my twitter account do not spam in here. Otherwise i will knock Elon'
            }
          />
        </View>
        {/* image */}
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        {/* dummy bottons */}
        <View
          style={{
            flexDirection: 'row',
            flex: 0,
            justifyContent: 'space-between',
            marginTop: margins.md,
          }}>
          <TouchableOpacity>
            <Verified name="message" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Verified name="repeat" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="heart" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Verified name="ios-share" size={30} />
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
