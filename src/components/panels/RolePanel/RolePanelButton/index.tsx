import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { UserRole } from '../../../../shared/enums/UserRole';
import { styles } from '../styles';

export type RolePanelButtonProps = {
  role: UserRole;
  isActive: (role: UserRole) => boolean;
  setRole: (role: UserRole) => void;
  title: string;
  position?: 'left' | 'right';
};

const RolePanelButton: React.FC<RolePanelButtonProps> = ({
  role,
  isActive,
  setRole,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.roleButton,
        props?.position && styles[props.position],
        isActive(role) && styles.active,
      ]}
      onPress={() => setRole(role)}
    >
      <Text numberOfLines={1} style={[styles.text, isActive(role) && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default RolePanelButton;
