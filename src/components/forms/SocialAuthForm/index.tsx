import React from 'react';
import { View } from 'react-native';
import GoogleButton from '../../buttons/social/GoogleButton';
import FacebookButton from '../../buttons/social/FacebookButton';
import { styles } from './styles';

export type SocialAuthFormProps = {};

const SocialAuthForm: React.FC<SocialAuthFormProps> = () => {
  return (
    <View style={styles.root}>
      <GoogleButton />
      <FacebookButton />
    </View>
  );
};

export default SocialAuthForm;
