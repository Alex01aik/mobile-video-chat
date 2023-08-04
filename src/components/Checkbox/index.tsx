import React from 'react';
import BouncyCheckbox, { IBouncyCheckboxProps } from 'react-native-bouncy-checkbox';
import { commonColor, commonStyles } from '../../shared/styles/common';
import { styles } from './styles';
import { Controller, useFormContext } from 'react-hook-form';

export type CheckboxProps = IBouncyCheckboxProps & {
  name: string;
  text: string;
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={() => (
        <BouncyCheckbox
          {...props}
          text={props.text}
          isChecked={getValues()[props.name]}
          onPress={(value) => setValue(props.name, value)}
          textStyle={[styles.checkBoxText, errors[props.name] && commonStyles.error]}
          textContainerStyle={{ flex: 1 }}
          fillColor={commonColor.darkBlue}
          style={styles.checkBox}
        />
      )}
      name={props.name}
    />
  );
};

export default Checkbox;
