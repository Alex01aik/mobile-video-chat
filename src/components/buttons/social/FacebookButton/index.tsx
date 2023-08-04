import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles';
import { useEffect } from 'react';
import { commonStyles } from '../../../../shared/styles/common';

WebBrowser.maybeCompleteAuthSession();

export type FacebookButtonProps = {};

const FacebookButton: React.FC<FacebookButtonProps> = () => {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_FACEBOOK_CLIENT_ID,
  });

  useEffect(() => {
    if (response && response.type === 'success' && response.authentication) {
      (async () => {
        const userinfoResponce = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication?.accessToken}`,
        );
        // TODO do something with userinfoResponce
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    if (result.type !== 'success') {
      console.error('facebook login error');
    }
  };

  return (
    <TouchableOpacity onPress={() => handlePressAsync()}>
      <View style={[commonStyles.button, styles.button]}>
        <Image source={require('../../../../assets/icons/facebook.png')} style={styles.icon} />
        <Text style={styles.text}>Facebook</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FacebookButton;
