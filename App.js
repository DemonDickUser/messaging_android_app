import React, {useEffect, useState} from 'react';
import {StreamChat} from 'stream-chat';
import {Chat, OverlayProvider} from 'stream-chat-react-native';
import {Dimensions, SafeAreaView, View} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './screen_navigation';
import authContext from './context/Authentication';

const App = () => {
  //global variables for loged in user
  const [userId, setUserId] = useState('');

  //get stream API keys

  const API_KEY = 'br6fc3z2bx7d';
  const client = StreamChat.getInstance(API_KEY);

  useEffect(() => {
    //

    return () => client.disconnectUser();
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
