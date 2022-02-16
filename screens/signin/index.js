import React, {useContext, useState} from 'react';
import {Button_press, Logo_img} from '../../Global_files';
import {styles} from './styles';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {useChatContext} from 'stream-chat-react-native';
import authContext from '../../context/Authentication';
import auth from '@react-native-firebase/auth';
import Geolocation from '@react-native-community/geolocation';

const Sign_in = ({navigation}) => {
  //----states

  const {client} = useChatContext();

  const {setUserId} = useContext(authContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    //----auht first.

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        // User account created & signed in, in with firebase auth!', connect to getstream api
        connected_user(username);
        console.log(username + ' account created in gestream database');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          // try signIn in instead
          auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
              console.log(
                'User account created & signed in, in with firebase auth!',
              );

              // connect to getstream api

              connected_user(username);
              console.log(username + ' account created in gestream database');
            });
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error('error');
        console.error(error);
      });
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
            onChange={e => setUsername(e.nativeEvent.text)}
            value={username}
          />

          <TextInput
            style={styles.input}
            placeholder={'Email Address'}
            onChange={e => setEmail(e.nativeEvent.text)}
          />

          <TextInput
            style={styles.input}
            placeholder={'Password'}
            // secureTextEntry={true}
            onChange={e => setPassword(e.nativeEvent.text)}
          />
        </View>
        <Button_press button_pressed={sign_up} text="Submit" />
      </View>
    </SafeAreaView>
  );
};

export default Sign_in;
