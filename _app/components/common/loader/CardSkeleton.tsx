import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {margins} from '../../../@lib/constants';

const CardSkeleton = () => {
  return [1, 1, 1].map((_, i) => (
    <Card style={styles.card} key={i}>
      <SkeletonPlaceholder>
        {/* // @ts-ignore */}
        <Card.Title>
          <View style={styles.title1}>
            <View style={styles.title2} />
            <View>
              <SkeletonPlaceholder>
                <View style={styles.title3} />
                <View style={styles.title4} />
              </SkeletonPlaceholder>
            </View>
          </View>
        </Card.Title>
      </SkeletonPlaceholder>
      <Card.Content>
        <SkeletonPlaceholder>
          <View style={styles.content1} />
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={styles.content2} />
        </SkeletonPlaceholder>
      </Card.Content>
      <SkeletonPlaceholder>
        <Card.Cover>
          <View style={styles.cover} />
        </Card.Cover>
      </SkeletonPlaceholder>
    </Card>
  ));
};

const styles = StyleSheet.create({
  card: {
    marginBottom: margins.md,
    marginHorizontal: 1.5,
  },
  title1: {flexDirection: 'row', alignItems: 'center', padding: 10},
  title2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  title3: {width: 120, height: 20, marginBottom: margins.sm},
  title4: {width: 80, height: 20},
  content1: {width: '100%', height: 20, marginBottom: 10},
  content2: {width: '40%', height: 20},
  cover: {
    width: '91%',
    height: 200,
    marginTop: margins.sm,
    alignSelf: 'center',

    borderRadius: margins.md,
    marginBottom: margins.md,
  },
});
export default CardSkeleton;
