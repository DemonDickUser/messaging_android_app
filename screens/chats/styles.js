import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../global_style';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  chats_wrapper: {
    backgroundColor: colors.tertiary,
    height: screen_height,
    flex: 1,
  },
  text: {
    color: colors.primary,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    margin: 70,
    textAlign: 'center',
  },
  user_text: {
    color: colors.primary,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignSelf: 'flex-end',
    marginLeft: 50,
    marginRight: 10,
    marginBottom: 20,
  },
  left_user: {alignSelf: 'flex-start', marginRight: 50, marginLeft: 10},
});
