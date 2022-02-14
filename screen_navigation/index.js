import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import authContext from '../context/Authentication';
import AddGroup from '../screens/addgroup';
import ChannelScreen from '../screens/channelscreen';
import Home from '../screens/home';
import Sign_in from '../screens/signin';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const {userId} = useContext(authContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userId ? (
          <Stack.Screen
            name="Sing_in"
            component={Sign_in}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Channel"
              component={ChannelScreen}
              options={{headerTitle: 'Chats Room'}}
            />
            <Stack.Screen
              name="Add Group"
              component={AddGroup}
              options={{headerTitle: 'Add Group'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
