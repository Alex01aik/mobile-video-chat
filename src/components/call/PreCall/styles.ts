import { StyleSheet } from 'react-native';
import { commonStylesValues } from '../../../shared/styles/common';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  joinButton: {
    position: 'absolute',
    alignSelf: 'center',
    alignContent: 'center',
    top: '70%',
  },
  joinButtonText: {
    paddingHorizontal: commonStylesValues.marginLarge,
  },
  testMediaView: {
    width: '100%',
    height: '100%',
    borderRadius: commonStylesValues.borderRadiusMiddle,
  },
});
