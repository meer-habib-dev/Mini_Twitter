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
  // onRefresh,
  // refreshing = false,
  onEndReached,
  ListEmptyComponent,
  ListFooterComponent,
}) => {
  // const [isRefreshing, setIsRefreshing] = useState(refreshing);

  // useEffect(() => {
  //   setIsRefreshing(refreshing);
  // }, [refreshing]);

  // const handleRefresh = () => {
  //   setIsRefreshing(true);
  //   onRefresh && onRefresh();
  // };

  return (
    <FlatList
      style={styles.empty}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // onRefresh={handleRefresh}
      // refreshing={isRefreshing}
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
  empty: {},
});

export default ReusableFlatList;
