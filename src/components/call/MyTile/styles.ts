import { StyleSheet } from 'react-native';
import { commonColor, commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    right: commonStylesValues.marginVerySmall,
    top: commonStylesValues.marginVeryLarge + commonStylesValues.marginSmall,
    zIndex: 2,
    borderRadius: commonStylesValues.borderRadiusMiddle,
    borderColor: commonColor.darkBlue,
    borderWidth: commonStylesValues.marginVerySmall,
    overflow: 'hidden',
  },
  horizontal: {
    width: 120,
    height: 90,
  },
  vertical: {
    width: 90,
    height: 120,
  },
});
