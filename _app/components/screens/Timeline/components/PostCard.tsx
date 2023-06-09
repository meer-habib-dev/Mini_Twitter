import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import TitleText from '../../../common/text/TitleText';
import ShortText from '../../../common/text/ShortText';
import Verified from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../../../@lib/constants/theme/Colors';
import {margins} from '../../../../@lib/constants';
import HeaderText from '../../../common/text/HeaderText';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {getTimeSince} from '../../../../@lib/utils/functions/getTimeSince';
import {getEmailDomain} from '../../../../@lib/utils/functions/getEmailDomain';
interface Props {
  item:
    | {
        id: number;
        email: string;
        username: string;
        active: boolean;
        join_date: string;
      }
    | any;
  handleFollow: () => void;
  followText: string;
  searchEnable: boolean;
}
const PostCard = ({
  item,
  handleFollow,
  followText = 'Follow',
  searchEnable,
}: Props) => {
  const username = searchEnable ? item?.username : item?.user?.username;
  const email = searchEnable ? item?.email : item?.user?.email;
  return (
    <Card style={styles.card}>
      <Card.Content>
        {/* User Info */}
        <View style={styles.imageContiner}>
          <Image
            source={{
              uri: 'https://placeimg.com/640/480/people',
              // uri: 'https://placeimg.com/640/480/people',
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <View style={styles.title}>
              <TitleText text={username} textStyle={styles.text} />
              <Verified name="verified" size={20} color={Colors.primary} />
            </View>
            <ShortText text={getEmailDomain(email)} />
          </View>
          <View>
            <TouchableOpacity onPress={handleFollow}>
              <HeaderText textStyle={styles.followtext} text={followText} />
            </TouchableOpacity>

            <ShortText
              textStyle={styles.shortText}
              text={getTimeSince(new Date(item?.published))}
            />
          </View>
        </View>
        {/* dummy Text */}

        <View style={styles.header}>
          <HeaderText text={item?.content} />
        </View>
        {/* image */}
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        {/* dummy bottons */}
        <View style={styles.btnCard}>
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.secondary,
    marginBottom: margins.md,
    marginHorizontal: 1.5,
  },
  imageContiner: {flexDirection: 'row', alignItems: 'center'},
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: margins.sm,
  },
  btnCard: {
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'space-between',
    marginTop: margins.md,
  },
  textContainer: {flex: 1},
  title: {flexDirection: 'row'},
  text: {fontWeight: 'bold', marginRight: margins.sm},
  shortText: {},
  header: {marginVertical: margins.md},
  followtext: {
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'right',
  },
});
