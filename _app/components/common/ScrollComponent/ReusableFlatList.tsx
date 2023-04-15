import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

interface Props {
  data: any[] | [];
  renderItem: ({item}: {item: any}) => JSX.Element;
  ListEmptyComponent?: (() => JSX.Element | null) | any;
  ListFooterComponent?: (() => JSX.Element | null) | any;
  keyExtractor: (item: any, index: number) => string;
  onRefresh?: () => void;
  refreshing?: boolean;
  onEndReached?: () => void;
}

const ReusableFlatList: React.FC<Props> = ({
  data,
  renderItem,
  keyExtractor,

  onEndReached,
  ListEmptyComponent,
  ListFooterComponent,
}) => {
  return (
    <FlatList
      style={styles.empty}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

const styles = StyleSheet.create({
  empty: {flexGrow: 1},
});

export default ReusableFlatList;
