import { StyleSheet } from 'react-native';
import { commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: commonStylesValues.borderRadiusMiddle,
    marginBottom: commonStylesValues.marginMiddle,
  },
});
