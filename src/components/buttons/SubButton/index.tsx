import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export type SubButtonProps = {
  onSubmit: (props: any) => any;
  title: string;
};

const SubButton: React.FC<SubButtonProps> = ({ onSubmit, title }) => {
  return (
    <TouchableOpacity onPress={onSubmit}>
      <Text style={styles.root}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubButton;
