import React, { useState } from 'react';
import { View } from 'react-native';
import RegisterForm from '../../components/forms/RegisterForm';
import { commonStyles } from '../../shared/styles/common';
import LoginForm from '../../components/forms/LoginForm';
import SubButton from '../../components/buttons/SubButton';
import { styles } from './styles';

export type AuthScreenProps = {};

const AuthScreen: React.FC<AuthScreenProps> = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  return (
    <View style={[commonStyles.screen, styles.root]}>
      {isNewUser ? <RegisterForm /> : <LoginForm />}
      <SubButton
        title={isNewUser ? 'Уже маю аккаунт' : 'Створити аккаунт'}
        onSubmit={() => setIsNewUser(!isNewUser)}
      />
    </View>
  );
};

export default AuthScreen;
