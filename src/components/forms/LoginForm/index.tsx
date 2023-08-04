import React from 'react';
import { View, Text } from 'react-native';
import { UserRole } from '../../../shared/enums/UserRole';
import { commonStyles } from '../../../shared/styles/common';
import RolePanel from '../../panels/RolePanel';
import UIForm from '../UIForm';
import SubmitButton from '../../buttons/SubmitButton';
import EmailInput from '../../inputs/EmailInput';
import PasswordInput from '../../inputs/PasswordInput';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../shared/types/navTypes';
import SocialAuthForm from '../SocialAuthForm';
import { useStore } from '../../../shared/store/useStore';

export type LoginFormProps = {};

type LoginFormValues = {
  email: string;
  password: string;
  role: UserRole;
};

const LoginForm: React.FC<LoginFormProps> = () => {
  const { store } = useStore();
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const login = async (data: LoginFormValues) => {
    await store.login(data.email, data.password, data.role);
    if (store.isAuth) {
      nav.navigate('Home');
    }
  };

  return (
    <View>
      <UIForm
        validationSchema={validationSchema}
        defaultValues={{
          role: UserRole.patient,
        }}
      >
        <Text style={commonStyles.title}>Авторизація</Text>
        <RolePanel />
        <View>
          <EmailInput />
          <PasswordInput />
          <SubmitButton title="Увійти" onSubmit={login} />
        </View>
        <View style={commonStyles.block}>
          <Text style={commonStyles.regularText}>Або</Text>
          <Text style={commonStyles.regularText}>Авторизуйтесь за допомогою</Text>
        </View>
        <SocialAuthForm />
      </UIForm>
    </View>
  );
};

export default LoginForm;
