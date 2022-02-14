import {StyleSheet} from 'react-native';
import {colors} from '../../global_style';

export const styles = StyleSheet.create({
  header_wrapper: {
    backgroundColor: colors.secondary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 30,
    marginHorizontal: 10,
    borderRadius: 20,

    elevation: 20,
    shadowColor: 'black',
  },
  user_info: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.primary,
    paddingVertical: 5,
  },
});
