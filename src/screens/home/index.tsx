import React from 'react';
import { View } from 'react-native';
import { commonStyles } from '../../shared/styles/common';
import Notifications from '../../components/notifications';

export type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={commonStyles.screen}>
      <Notifications />
    </View>
  );
};

export default HomeScreen;
