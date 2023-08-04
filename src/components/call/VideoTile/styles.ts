import { StyleSheet } from 'react-native';
import { commonColor, commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  username: {
    position: 'absolute',
    bottom: commonStylesValues.marginMiddle,
    right: commonStylesValues.marginSmall,
  },
  userIcon: {
    width: commonStylesValues.buttonHeight,
    height: commonStylesValues.buttonHeight,
    borderRadius: commonStylesValues.borderRadiusLarge,
    backgroundColor: commonColor.darkBlue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIconText: {
    color: 'white',
    fontWeight: 'bold',
  },
  micIcon: {
    position: 'absolute',
    zIndex: 1,
    bottom: commonStylesValues.marginSmall,
    right: commonStylesValues.marginSmall,
  },
});
