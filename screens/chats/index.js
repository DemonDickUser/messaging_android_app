import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Logo_img} from '../../Global_files';
import {styles} from './styles';

const Chats = () => {
  const user_text = true;

  return (
    <SafeAreaView style={styles.chats_wrapper}>
      <Text style={styles.text}>Group or Username</Text>
      <ScrollView>
        <Text style={styles.user_text}>Hello</Text>
        <Text style={[styles.user_text, styles.left_user]}>
          ;Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a
          assumenda hic temporibus cupiditate illum animi aliquid ullam ipsa
          quidem.
        </Text>
        <Text style={styles.user_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          nesciunt in, voluptates ad, iure molestias minus quos quo inventore
          magni debitis et quidem autem blanditiis odio. Necessitatibus
          excepturi exercitationem eveniet.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
