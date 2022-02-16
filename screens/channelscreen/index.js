import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Channel, MessageInput, MessageList} from 'stream-chat-react-native';
import {useRoute} from '@react-navigation/native';
import {ShareLocationIcon} from '../../Global_files';

const ChannelScreen = () => {
  const route = useRoute();
  const channel = route.params?.channel;

  //use your oen API KEY
  const MAPS_API_KEY = '';

  //channel attachment

  const goToGoogleMaps = (lat, long) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URI: ${url}`);
      }
    });
  };

  const prepareStaticMapUrl = (lat, long) => {
    let baseURL = 'https://maps.googleapis.com/maps/api/staticmap?';
    let url = new URL(baseURL);
    let params = url.searchParams;
    params.append('center', `${lat},${long}`);
    params.append('zoom', '15');
    params.append('size', '600x300');
    params.append('maptype', 'roadmap');
    params.append('key', MAPS_API_KEY);
    params.append('markers', `color:red|${lat},${long}`);

    return url.toString();
  };

  // Send your current location attachment, as message, on current channel.
  const sendCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      channel?.sendMessage({
        text: 'This is my location',
        attachments: [
          {
            type: 'location',
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
          },
        ],
      });
    });
  };

  // UI Component for rendering `location` type attachment
  const LocationCard = ({type, latitude, longitude}) => {
    if (type === 'location') {
      const mapApi = prepareStaticMapUrl(latitude, longitude);
      console.log(mapApi);
      return (
        <TouchableOpacity onPress={() => goToGoogleMaps(latitude, longitude)}>
          <Image source={{uri: mapApi}} style={{height: 200, width: 300}} />
        </TouchableOpacity>
      );
    }
  };

  // UI component to add Share Location button next to input box.
  const InputButtons = () => {
    const {channel: currentChannel} = useChannelContext();

    return (
      <TouchableOpacity
        onPress={() => sendCurrentLocation(currentChannel)}
        style={{marginRight: 10}}>
        <ShareLocationIcon />
      </TouchableOpacity>
    );
  };

  if (!channel) return <Text>No Chat Room Found</Text>;

  if (channel.data.member_count === 2)
    return (
      <Channel
        channel={channel}
        Card={LocationCard}
        InputButtons={InputButtons}>
        <View style={StyleSheet.absoluteFill}>
          <MessageList />
          <MessageInput />
        </View>
      </Channel>
    );

  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;
