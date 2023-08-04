import { StyleSheet } from 'react-native';
import { commonColor, commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: commonColor.green,
    paddingTop: commonStylesValues.marginVeryLarge,
  },
  participants: {
    flexGrow: 1,
  },
  participant: {
    flex: 0.5,
    minHeight: 120,
    padding: commonStylesValues.marginVerySmall,
  },
});
