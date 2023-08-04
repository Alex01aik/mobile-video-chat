import { TextInputProps } from 'react-native';
import UITextInput from '../UITextInput';

const EmailInput: React.FC<TextInputProps> = (props) => {
  return <UITextInput {...props} name="email" label="Email" keyboardType="email-address" />;
};

export default EmailInput;
