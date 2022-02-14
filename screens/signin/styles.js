import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../global_style';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  loginWrapper: {
    backgroundColor: colors.primary,
    width: screen_width,
    height: screen_height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signIn: {
    fontSize: 36,
    color: colors.secondary,
  },
  input_wrapper: {
    marginVertical: 30,
  },
  input: {
    color: '#1f1f1f',
    borderBottomColor: '#1f1f1f',
    borderBottomWidth: 1,
    width: (screen_width / 100) * 80,
    textAlign: 'center',
  },
});
