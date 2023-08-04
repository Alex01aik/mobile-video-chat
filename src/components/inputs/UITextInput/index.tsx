import { TextInput, View, Text, TextInputProps } from 'react-native';
import { styles } from '../styles';
import { Controller, useFormContext } from 'react-hook-form';
import { commonStyles } from '../../../shared/styles/common';

export type UITextInputProps = TextInputProps & { name: string; label: string };

const UITextInput: React.FC<UITextInputProps> = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{props.label}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              {...props}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              style={[styles.input, errors[props.name] && styles.invalid]}
            />
            {errors[props.name] && (
              <Text style={commonStyles.error}>{errors[props.name]?.message?.toString()}</Text>
            )}
          </>
        )}
        name={props.name}
      />
    </View>
  );
};

export default UITextInput;
