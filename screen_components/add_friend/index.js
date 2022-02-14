import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import {Button_press} from '../../Global_files';
import authContext from '../../context/Authentication';
import {useChatContext} from 'stream-chat-react-native';
import {useNavigation} from '@react-navigation/native';
import {screen_width} from '../../global_style';
import {styles} from '../add_banner';

const Add_friend = ({users}) => {
  //
  const [isValid, setIsValid] = useState(true);
  const [user_name, setUser_name] = useState('');
  const {userId} = useContext(authContext);
  const {client} = useChatContext();
  const navigation = useNavigation();

  //

  const create_group_handler = async () => {
    const user_names = users.map(user => user.name);

    if (user_names.includes(user_name)) {
      const channel = client.channel('messaging', {
        members: [user_name, userId],
      });

      await channel.watch();
      navigation.navigate('Channel', {channel});
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.group_header}>
      <TextInput
        style={styles.textInput}
        onChangeText={e => {
          setUser_name(e);
          setIsValid(true);
        }}
        placeholder="User Name"
        value={user_name}
      />
      <Button_press
        button_pressed={create_group_handler}
        text={isValid ? 'Add Friend' : 'Invalid Name'}
      />
    </View>
  );
};

export default Add_friend;
