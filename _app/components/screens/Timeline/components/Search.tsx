import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../@lib/constants/theme/Colors';
import Text_Size from '../../../../@lib/utils/functions/textScaling';
import {margins} from '../../../../@lib/constants';

import {ActivityIndicator} from 'react-native-paper';
const Search = ({
  hanldePost,
  searchText,
  handleSearchTextChange,
  searchLoading,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FIcon
          name="search"
          size={25}
          color={Colors.primary}
          style={styles.icon}
        />
        <TextInput
          value={searchText}
          onChangeText={handleSearchTextChange}
          style={styles.singleField}
          placeholder="Search users..."
        />
        {searchLoading ? (
          <ActivityIndicator
            color={Colors.primary}
            style={{marginRight: margins.sm}}
          />
        ) : null}
      </View>
      {hanldePost && (
        <TouchableOpacity onPress={hanldePost}>
          <Icon
            name="twitter"
            size={30}
            color={Colors.primary}
            style={styles.twitter}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: margins.md,
  },
  inputContainer: {
    flex: 1,
    borderWidth: 0.5,
    flexDirection: 'row',
    // marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    borderColor: Colors.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  singleField: {
    width: '80%',
    color: '#000000',
    height: 50,
    flex: 1,
    borderBottomColor: 'rgba(0,0,0,0.5)',
    fontSize: Text_Size.Text_0,
  },
  twitter: {
    marginLeft: margins.sm,
  },
});
