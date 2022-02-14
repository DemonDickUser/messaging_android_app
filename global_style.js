import {Dimensions, StyleSheet} from 'react-native';

export const screen_width = Dimensions.get('window').width;
export const screen_height = Dimensions.get('window').height;

export const colors = {
  primary: '#ffffff',
  secondary: '#2D4DF4',
  tertiary: '#F57045',
};

export const styles = StyleSheet.create({
  button: {
    button_text: {
      backgroundColor: colors.secondary,
      padding: 15,
      marginVertical: 10,
      borderRadius: 20,
      textAlign: 'center',
      color: colors.primary,
      width: (screen_width / 100) * 80,
    },
  },
});
