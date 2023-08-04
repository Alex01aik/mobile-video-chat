import React from 'react';
import { View, TouchableWithoutFeedback, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

export type TrayButtonProps = {
  onPress: () => void;
  source: ImageSourcePropType;
};

const TrayButton: React.FC<TrayButtonProps> = ({ onPress, source }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.root}>
        <Image source={source} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TrayButton;
