import React, {useEffect, useState} from 'react';
import {StreamChat} from 'stream-chat';
import {Chat, OverlayProvider} from 'stream-chat-react-native';
import {Dimensions, SafeAreaView, View} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './screen_navigation';
import authContext from './context/Authentication';
import {LogBox} from 'react-native';
import {GESTREAM_API_KEY} from '@env';
import auth from '@react-native-firebase/auth';

const App = () => {
  //global variables for loged in user

  LogBox.ignoreAllLogs(true);
  const [userId, setUserId] = useState('');

  //get stream API keys

  const client = StreamChat.getInstance(GESTREAM_API_KEY);

  useEffect(() => {
    // DISCONNECT FROM GETSTREAM AND SIGN OUT FROM FIREBASE WHEN APPLICATION IS OFF

    return () => {
      client.disconnectUser();
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    };
  }, []);

  return (
    <SafeAreaView>
      <authContext.Provider value={{userId, setUserId}}>
        <View style={{height: Dimensions.get('window').height}}>
          <OverlayProvider>
            <Chat client={client}>
              <Navigation />
            </Chat>
          </OverlayProvider>
        </View>
      </authContext.Provider>
    </SafeAreaView>
  );
};

export default App;
