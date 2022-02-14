import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import groupContext from '../../context/Group_context';
import {screen_width} from '../../global_style';
import {Button_press} from '../../Global_files';
import GroupList from '../groulist';
import {useChatContext} from 'stream-chat-react-native';
import {useNavigation} from '@react-navigation/native';

const Add_banner = ({users}) => {
  //

  const navigation = useNavigation();
  const {group_users} = useContext(groupContext);
  const [group_name, setGroup_name] = useState('');
  const {client} = useChatContext();

  const create_group_handler = async () => {
    // console.log('go back worked');
    // navigation.goBack();
    // console.log('.push() worked');
    // navigation.push('Home');
    // console.log('navigate() worked');
    //create group and monitor chats

    console.log('group name is ' + group_name);
    console.log('group list is');
    console.log(group_users);

    const channel = client.channel('messaging', group_name, {
      name: group_name,
      members: [...group_users],
    });

    await channel.watch();
    console.log(group_name + ' added navigation to home now');

    // //navigate to group whene done

    navigation.navigate('Channel', {channel});

    // console.log('nav failed added');
  };

  return (
    <View>
      <View style={styles.group_header}>
        <TextInput
          style={styles.textInput}
          onChangeText={e => setGroup_name(e)}
          placeholder="Group Name"
          value={group_name}
        />

        <Button_press
          button_pressed={create_group_handler}
          text="Create Group"
        />
      </View>
      <FlatList
        style={{marginTop: 50}}
        data={users}
        renderItem={({item}) => <GroupList onPress={group_users} user={item} />}
      />
      <Text>Create</Text>
    </View>
  );
};

export default Add_banner;

export const styles = StyleSheet.create({
  group_header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginHorizontal: 'auto',
    textAlign: 'center',
    color: '#1f1f1f',
    borderBottomColor: '#1f1f1f',
    borderBottomWidth: 1,
    width: (screen_width / 100) * 80,
  },
});
