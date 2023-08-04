import { StyleSheet } from 'react-native';
import { commonColor, commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  button: {
    borderRadius: commonStylesValues.borderRadiusLarge,
    display: 'flex',
    flexDirection: 'row',
    gap: commonStylesValues.marginSmall,
    paddingVertical: commonStylesValues.marginSmall,
    alignSelf: 'center',
    width: 176,
  },
  icon: {
    width: 32,
    height: 32,
  },
  text: {
    color: commonColor.white,
    fontWeight: 'bold',
  },
});
