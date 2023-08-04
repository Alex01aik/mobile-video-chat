import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import { UserRole } from '../../../shared/enums/UserRole';
import { styles } from './styles';
import RolePanelButton from './RolePanelButton';
import { Controller, useFormContext } from 'react-hook-form';

export type RolePanelProps = {};

const RolePanel: React.FC<RolePanelProps> = (props) => {
  const name = 'role';
  const { control, setValue, getValues } = useFormContext();

  const isActiveButton = (needed: UserRole): boolean => {
    return getValues()[name] === needed;
  };

  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={() => (
        <View style={styles.roleButtonsWrapper}>
          <View style={styles.roleButtons}>
            <RolePanelButton
              role={UserRole.patient}
              isActive={isActiveButton}
              setRole={(value) => {
                setValue(name, value);
              }}
              title="Я пацієнт"
              position="left"
            />
            <RolePanelButton
              role={UserRole.doctor}
              isActive={isActiveButton}
              setRole={(value) => {
                setValue(name, value);
              }}
              title="Я лікар"
              position="right"
            />
          </View>
        </View>
      )}
      name={name}
    />
  );
};

export default RolePanel;
