import React, {useContext, useState} from 'react';
import {Button_press, Logo_img} from '../../Global_files';
import {styles} from './styles';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {useChatContext} from 'stream-chat-react-native';
import authContext from '../../context/Authentication';

const Sign_in = ({navigation}) => {
  //----states

  const {client} = useChatContext();

  const {setUserId} = useContext(authContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);

  //---function

  const connected_user = async username => {
    await client.connectUser(
      {
        id: username,
        name: username,
      },
      client.devToken(username),
    );

    // connect user to the defualt group
    const channel = await client.channel('gaming', 'welcome', {
      name: 'welcome',
    });

    if (!channel.state.members[username]) await channel.addMembers([username]);
    await channel.watch();

    console.log(true);

    setUserId(username);
  };

  //REMOVE FOR DEV ONLY

  const sign_up = () => {
    //----auht first

    connected_user(username);
    console.log(username + ' account created');
  };

  return (
    <SafeAreaView>
      <View style={styles.loginWrapper}>
        <Logo_img />
        <Text style={styles.signIn}>Sign in</Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            onChangeText={e => setUsername(e)}
            value={username}
          />

          <TextInput
            style={styles.input}
            placeholder={'Email Address'}
            onChange={e => setEmail(e)}
          />

          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            onChange={e => setPassword(e)}
          />
        </View>
        <Button_press button_pressed={sign_up} text="Submit" />
      </View>
    </SafeAreaView>
  );
};

export default Sign_in;
