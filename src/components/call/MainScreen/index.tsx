import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { DailyParticipant } from '@daily-co/react-native-daily-js';
import VideoTile from '../VideoTile';

export type MainScreenProps = {
  participant?: DailyParticipant;
};

const MainScreen: React.FC<MainScreenProps> = ({ participant }) => {
  return participant ? (
    <View style={styles.root}>
      <VideoTile participant={participant} />
    </View>
  ) : (
    <></>
  );
};

export default MainScreen;
