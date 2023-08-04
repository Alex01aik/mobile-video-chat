import { StyleSheet } from 'react-native';
import { commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: commonStylesValues.buttonHeight,
    width: commonStylesValues.buttonHeight,
    borderRadius: commonStylesValues.borderRadiusLarge,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
