import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {ChannelList, useChatContext} from 'stream-chat-react-native';
import authContext from '../../context/Authentication';
import {Add_icon} from '../../Global_files';
import {screen_width} from '../../global_style';
import Add_friend from '../../screen_components/add_friend';
import UserListItem from '../../screen_components/userlistitem';
import {styles} from './styles';

const Home = () => {
  //

  const {userId} = useContext(authContext);
  const {client} = useChatContext();
  const navigation = useNavigation();

  //state
  const [group, setGroup] = useState(true);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //-------fetch users
  const fetch_users = async () => {
    const response = await client.queryUsers({});
    setUsers(response.users);
    setIsLoading(false);
  };

  //
  useEffect(() => {
    fetch_users();
  }, []);

  //--------when a channel is loading
  const onChannel_pressed = channel => {
    navigation.navigate('Channel', {channel});
  };

  //
  return (
    <>
      {/* Friends or group */}
      <View style={styles.banner_wrapper}>
        <TouchableOpacity
          style={[styles.category, !group && styles.underline]}
          onPress={() => setGroup(false)}>
          <Text style={styles.text}>Add Friends</Text>
        </TouchableOpacity>
        <View style={styles.banner_vertical_line} />
        <TouchableOpacity
          style={[styles.category, group && styles.underline]}
          onPress={() => setGroup(true)}>
          <Text style={styles.text}>Friends</Text>
        </TouchableOpacity>
      </View>

      {/* display friends and groups */}

      {group ? (
        isLoading ? (
          <Text style={{width: screen_width, textAlign: 'center'}}>
            Loading
          </Text>
        ) : (
          <>
            <Pressable
              onPress={() => navigation.navigate('Add Group', {users})}
              style={styles.add_user_wrapper}>
              <Add_icon />
            </Pressable>
            <ChannelList
              filters={{members: {$in: [userId]}}}
              onSelect={onChannel_pressed}
            />
          </>
        )
      ) : (
        <>
          <Add_friend users={users} />
          <Text style={{width: screen_width, textAlign: 'center'}}>
            List of available users
          </Text>
          <FlatList
            style={{marginTop: 50}}
            data={users}
            renderItem={({item}) => <UserListItem user={item} />}
          />
        </>
      )}
    </>
  );
};

export default Home;
