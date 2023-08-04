import React from 'react';
import { View, Text } from 'react-native';
import { UserRole } from '../../../shared/enums/UserRole';
import { commonStyles } from '../../../shared/styles/common';
import UIForm from '../UIForm';
import RolePanel from '../../panels/RolePanel';
import EmailInput from '../../inputs/EmailInput';
import PasswordInput from '../../inputs/PasswordInput';
import SubmitButton from '../../buttons/SubmitButton';
import Checkbox from '../../Checkbox';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../shared/types/navTypes';
import SocialAuthForm from '../SocialAuthForm';
import { useStore } from '../../../shared/store/useStore';

export type RegisterFormProps = {};

type RegisterFormValues = {
  email: string;
  password: string;
  role: UserRole;
  checkOfert: boolean;
  checkPrivacy: boolean;
};

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const { store } = useStore();
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const registration = async (data: RegisterFormValues) => {
    await store.registration(data.email, data.password, data.role);
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
          checkOfert: false,
          checkPrivacy: false,
        }}
      >
        <Text style={commonStyles.title}>Зареєструватись безкоштовно</Text>
        <Text style={commonStyles.subTitle}>
          Після реєстрації вам буде відкритий доступ в особистий кабінет, і ви зможете користуватися
          усіма перевагами додатку
        </Text>
        <RolePanel />
        <View>
          <EmailInput />
          <PasswordInput />
          <View style={commonStyles.block}>
            <Checkbox name="checkOfert" text="Ви погоджуєтеся з нашим договором оферти" />
            <Checkbox
              name="checkPrivacy"
              text="Ви погоджуєтеся з нашою політикою конфіденційності"
            />
          </View>
          <SubmitButton title="Зареєструватись" onSubmit={registration} />
        </View>
        <View style={commonStyles.block}>
          <Text style={commonStyles.regularText}>Або</Text>
          <Text style={commonStyles.regularText}>Зареєструйтесь за допомогою</Text>
        </View>
        <SocialAuthForm />
      </UIForm>
    </View>
  );
};

export default RegisterForm;
