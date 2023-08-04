import { TextInputProps } from 'react-native';
import UITextInput from '../UITextInput';

const PasswordInput: React.FC<TextInputProps> = (props) => {
  return <UITextInput {...props} name="password" label="Пароль" secureTextEntry />;
};

export default PasswordInput;
