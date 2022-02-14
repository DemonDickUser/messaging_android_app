import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../screens/home/styles';
import {useSelector, useDispatch} from 'react-redux';
import {chatState} from '../../redux/chat_type_reducer';

const Banner = () => {
  //

  const group_state = useSelector(state => state.chat_state_reducer.group);

  const dispatch = useDispatch();

  const friends = () => {
    dispatch({
      type: chatState.SET_GROUP,
      group: false,
    });
  };

  const group = () => {
    dispatch({
      type: chatState.SET_GROUP,
      group: true,
    });
  };

  return (
    <SafeAreaView style={styles.banner_wrapper}>
      <TouchableOpacity
        style={[styles.category, !group_state && styles.underline]}
        onPress={() => friends()}>
        <Text style={styles.text}>Friends</Text>
      </TouchableOpacity>
      <View style={styles.banner_vertical_line} />
      <TouchableOpacity
        style={[styles.category, group_state && styles.underline]}
        onPress={() => group()}>
        <Text style={styles.text}>Groups</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Banner;
