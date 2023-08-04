import { StyleSheet } from 'react-native';
import { commonColor, commonStylesValues } from '../../shared/styles/common';

export const styles = StyleSheet.create({
  label: {
    color: commonColor.white,
    fontSize: commonStylesValues.fontSizeMiddle,
    marginBottom: commonStylesValues.marginSmall,
    fontWeight: 'bold',
  },
  inputWrapper: {
    marginBottom: commonStylesValues.marginMiddle,
  },
  input: {
    borderRadius: commonStylesValues.borderRadiusSmall,
    padding: commonStylesValues.marginSmall,
    backgroundColor: commonColor.white,
    borderColor: commonColor.white,
    borderWidth: 2,
  },
  invalid: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: commonColor.red,
  },
});
