import {Text, StyleSheet, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {User_icon} from '../../Global_files';
import groupContext from '../../context/Group_context';

const GroupList = ({user}) => {
  //
  const {group_users, setGroup_users} = useContext(groupContext);
  const [selected, setSelected] = useState(false);

  return (
    <Pressable
      onPress={() => {
        //   add or remove from group list

        if (group_users.includes(user.id))
          setGroup_users(users => users.filter(e => e === user.id));
        else setGroup_users(users => [...users, user.id]);

        setSelected(!selected);
        console.log(!selected ? 'added ' : 'removed ' + user.id);
      }}
      style={[
        styles.list_wrapper,
        {backgroundColor: selected ? '#cfcfcf' : '#f7f7f7'},
      ]}>
      <User_icon />
      <Text>{user.name}</Text>
    </Pressable>
  );
};

export default GroupList;

const styles = StyleSheet.create({
  list_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    margin: 1,

    borderRadius: 20,
  },
});
