import {Text} from 'react-native';
import React from 'react';
import {Channel, MessageInput, MessageList} from 'stream-chat-react-native';
import {useRoute} from '@react-navigation/native';

const ChannelScreen = () => {
  const route = useRoute();

  const channel = route.params?.channel;
  if (!channel) return <Text>No Chat Room Found</Text>;
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;
