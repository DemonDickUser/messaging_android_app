import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {User_icon} from '../../Global_files';

const UserListItem = ({user}) => {
  //

  return (
    <View style={styles.list_wrapper}>
      <User_icon />
      <Text>{user.name}</Text>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  list_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    margin: 1,
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
  },
});
