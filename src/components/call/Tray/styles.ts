import { StyleSheet } from 'react-native';
import { commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: commonStylesValues.marginLarge,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: commonStylesValues.marginMiddle,
  },
});
