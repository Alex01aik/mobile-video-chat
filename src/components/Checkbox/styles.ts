import { StyleSheet } from 'react-native';
import { commonColor, commonStylesValues } from '../../shared/styles/common';

export const styles = StyleSheet.create({
  checkBox: {
    marginBottom: commonStylesValues.marginSmall,
  },
  checkBoxText: {
    fontSize: commonStylesValues.fontSizeVerySmall,
    textDecorationLine: 'none',
    color: commonColor.white,
  },
});
