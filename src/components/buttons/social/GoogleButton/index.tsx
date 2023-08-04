import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useEffect } from 'react';
import { styles } from '../styles';
import { commonStyles } from '../../../../shared/styles/common';

WebBrowser.maybeCompleteAuthSession();

export type GoogleButtonProps = {};

const GoogleButton: React.FC<GoogleButtonProps> = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    clientSecret: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_SECRET,
  });

  const getUserInfo = async (token: string | undefined) => {
    if (!token) return;
    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(user));
    } catch (e) {
      console.error('signIn Error', e);
    }
  };

  const signIn = async () => {
    const user = await AsyncStorage.getItem('@user');
    if (!user) {
      if (response?.type === 'success') {
        // CODE
        console.log('signIn code', response.params.code);
        await getUserInfo(response.authentication?.accessToken);
      }
    }
  };

  useEffect(() => {
    signIn();
  }, [response]);

  return (
    <TouchableOpacity onPress={() => promptAsync()}>
      <View style={[commonStyles.button, styles.button]}>
        <Image source={require('../../../../assets/icons/google.png')} style={styles.icon} />
        <Text style={styles.text}>Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;
