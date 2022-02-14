import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Pressable, Text} from 'react-native';
import authContext from '../../context/Authentication';
import groupContext from '../../context/Group_context';
import Add_banner from '../../screen_components/add_banner';

const AddGroup = () => {
  //-----parent components to pass context provider

  const route = useRoute();
  const users = route.params?.users;
  const {userId} = useContext(authContext);
  const [group_users, setGroup_users] = useState([userId]);

  const navigation = useNavigation();

  return (
    <groupContext.Provider value={{group_users, setGroup_users}}>
      <Add_banner users={users} />
    </groupContext.Provider>
  );
};

export default AddGroup;
