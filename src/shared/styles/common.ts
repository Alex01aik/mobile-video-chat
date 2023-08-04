import { StyleSheet } from 'react-native';

export const commonStylesValues = {
  fontSizeLarge: 18,
  fontSizeMiddle: 16,
  fontSizeSmall: 14,
  fontSizeVerySmall: 12,
  borderRadiusSmall: 8,
  borderRadiusMiddle: 16,
  borderRadiusLarge: 26,
  marginVerySmall: 4,
  marginSmall: 8,
  marginMiddle: 16,
  marginLarge: 32,
  marginVeryLarge: 36,
  buttonHeight: 52,
  smallButtonHeight: 32,
};

export const commonColor = {
  white: '#F8F8F9',
  black: '#272633',
  gray: '#717171',
  darkBlue: '#09448E',
  green: '#33B0A4',
  red: '#EB5757',
};

export const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: commonStylesValues.marginLarge,
    paddingVertical: commonStylesValues.marginVeryLarge,
    backgroundColor: commonColor.green,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: commonColor.white,
    fontSize: commonStylesValues.fontSizeLarge,
    marginBottom: commonStylesValues.marginMiddle,
  },
  subTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: commonColor.white,
    fontSize: commonStylesValues.fontSizeSmall,
    marginBottom: commonStylesValues.marginMiddle,
  },
  block: {
    marginBottom: commonStylesValues.marginMiddle,
  },
  regularText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: commonColor.white,
    fontSize: commonStylesValues.fontSizeSmall,
  },
  error: {
    fontSize: commonStylesValues.fontSizeVerySmall,
    color: commonColor.red,
    position: 'absolute',
    bottom: -commonStylesValues.fontSizeSmall,
  },
  button: {
    display: 'flex',
    overflow: 'hidden',
    color: commonColor.white,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: commonStylesValues.fontSizeMiddle,
    backgroundColor: commonColor.darkBlue,
    fontWeight: 'bold',
  },
  submitButtonText: {
    borderRadius: commonStylesValues.borderRadiusLarge,
    height: commonStylesValues.buttonHeight,
    padding: commonStylesValues.marginMiddle,
  },
  buttonWrapper: {
    marginBottom: commonStylesValues.marginMiddle,
  },
});
