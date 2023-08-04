import { StyleSheet } from 'react-native';
import { commonColor, commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  roleButtonsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: commonStylesValues.marginMiddle,
  },
  roleButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: commonStylesValues.borderRadiusLarge,
    width: '100%',
  },
  roleButton: {
    flex: 1,
    padding: commonStylesValues.marginMiddle,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonColor.white,
    height: commonStylesValues.buttonHeight,
  },
  left: {
    borderTopLeftRadius: commonStylesValues.borderRadiusLarge,
    borderBottomLeftRadius: commonStylesValues.borderRadiusLarge,
  },
  right: {
    borderTopRightRadius: commonStylesValues.borderRadiusLarge,
    borderBottomRightRadius: commonStylesValues.borderRadiusLarge,
  },
  active: {
    backgroundColor: commonColor.darkBlue,
  },
  activeText: {
    color: commonColor.white,
  },
  text: {
    fontSize: commonStylesValues.fontSizeMiddle,
  },
});
