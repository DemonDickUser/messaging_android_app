import {StyleSheet} from 'react-native';
import {colors, screen_width} from '../../global_style';

export const styles = StyleSheet.create({
  banner_wrapper: {
    backgroundColor: colors.secondary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
    borderRadius: 20,
    height: 80,
    elevation: 20,
    shadowColor: 'black',
  },
  user_list_wrapper: {
    marginTop: 30,
    padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: colors.tertiary,
    width: screen_width,
    display: 'flex',
  },
  add_user_wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 1,
  },
  category: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexGrow: 1,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  text: {
    color: colors.primary,
    paddingVertical: 5,
  },
  banner_vertical_line: {
    width: 1,
    backgroundColor: colors.primary,
    height: 60,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
