import { StyleSheet } from 'react-native';
import { commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderRadius: commonStylesValues.borderRadiusLarge,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: commonStylesValues.marginMiddle,
    marginBottom: commonStylesValues.marginMiddle,
  },
  name: {
    fontWeight: 'bold',
    fontSize: commonStylesValues.fontSizeSmall,
    marginBottom: commonStylesValues.marginMiddle,
  },
  message: {
    textAlign: 'center',
    marginBottom: commonStylesValues.marginMiddle,
  },
  cardDate: {
    fontSize: commonStylesValues.fontSizeVerySmall,
    width: '100%',
    textAlign: 'right',
  },
});
