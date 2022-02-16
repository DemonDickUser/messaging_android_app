import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {Button, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './global_style';

export const Logo_img = () => (
  <Svg width={84} height={84} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle
      cx={42}
      cy={42}
      r={32.5}
      stroke="#CCD2E3"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Circle
      cx={31.5}
      cy={31.5}
      r={3.75}
      fill="#CCD2E3"
      stroke="#CCD2E3"
      strokeWidth={0.5}
      strokeLinecap="round"
    />
    <Circle
      cx={52.5}
      cy={31.5}
      r={3.75}
      fill="#CCD2E3"
      stroke="#CCD2E3"
      strokeWidth={0.5}
      strokeLinecap="round"
    />
    <Path
      d="M52.5 54.25C52.5 59.083 47.799 63 42 63s-10.5-3.917-10.5-8.75S36.201 45.5 42 45.5s10.5 3.917 10.5 8.75Z"
      fill="#CCD2E3"
    />
  </Svg>
);

export const Add_icon = () => (
  <Svg width={117} height={117} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={58.5} cy={58.5} r={43.875} fill="#7E869E" fillOpacity={0.25} />
    <Path
      d="M58.5 39v39M78 58.5H39"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </Svg>
);

export const User_icon = () => (
  <Svg width={50} height={50} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx={25} cy={25} r={19.25} stroke="#fff" strokeLinecap="round" />
    <Path
      d="M17.456 31.628c.802.695 1.926 1.249 3.239 1.627 1.316.38 2.8.578 4.305.578s2.989-.197 4.305-.578c1.313-.378 2.437-.932 3.24-1.627"
      stroke="#fff"
      strokeLinecap="round"
    />
    <Circle
      cx={18.75}
      cy={20.833}
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      r={2.083}
    />
    <Circle
      cx={31.25}
      cy={20.833}
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      r={2.083}
    />
  </Svg>
);
export const Group_icon = () => (
  <Svg width={50} height={46} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.174 6a1 1 0 0 0-1 1v6.105a1 1 0 0 0 2 0V8h20.384v30.558H18.174v-5.105a1 1 0 1 0-2 0v6.105a1 1 0 0 0 1 1h22.384a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H17.174Zm8.847 10.467a1 1 0 0 0-1.414 1.415l4.397 4.397H7a1 1 0 1 0 0 2h22.004l-4.397 4.398a1 1 0 1 0 1.414 1.414l6.105-6.105a1 1 0 0 0 0-1.414l-6.105-6.105Z"
      fill="#EAEAEA"
    />
  </Svg>
);

export const ShareLocationIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 12c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.655-1.346 3-3 3zm0-4a1.001 1.001 0 101 1c0-.551-.449-1-1-1z"
      fill="#000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22s7-5.455 7-12.727C19 5.636 16.667 2 12 2S5 5.636 5 9.273C5 16.545 12 22 12 22zm1.915-4.857C15.541 15.032 17 12.277 17 9.273c0-1.412-.456-2.75-1.27-3.7C14.953 4.664 13.763 4 12 4s-2.953.664-3.73 1.573C7.456 6.523 7 7.86 7 9.273c0 3.004 1.459 5.759 3.085 7.87.678.88 1.358 1.614 1.915 2.166a21.689 21.689 0 001.915-2.166zm-.683 3.281s0 .001 0 0z"
      fill="#000"
    />
  </Svg>
);

export const Button_press = ({button_pressed, text, margin = 50}) => (
  <TouchableOpacity
    onPress={button_pressed}
    style={[styles.button, {marginVertical: margin}]}>
    <Text style={styles.button.button_text}>{text}</Text>
  </TouchableOpacity>
);
