import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useFormContext } from 'react-hook-form';
import { commonStyles } from '../../../shared/styles/common';

export type SubmitButtonProps = {
  onSubmit: (props: any) => any;
  title: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit, title }) => {
  const { ...methods } = useFormContext();

  return (
    <TouchableOpacity style={commonStyles.buttonWrapper} onPress={methods.handleSubmit(onSubmit)}>
      <Text style={[commonStyles.button, commonStyles.submitButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
