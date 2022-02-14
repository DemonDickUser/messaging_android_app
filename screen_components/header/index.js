import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Logo_img} from '../../Global_files';
import {styles} from './styles';

const Header = () => {
  return (
    <SafeAreaView style={styles.header_wrapper}>
      <Logo_img />
      <View style={styles.user_info}>
        <Text style={styles.text}>Username</Text>
        <Text style={styles.text}>user@gmail.com</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
