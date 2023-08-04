import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Tray from '../Tray';
import { styles } from './styles';
import { commonStyles } from '../../../shared/styles/common';
import VideoTile from '../VideoTile';
import { DailyParticipant } from '@daily-co/react-native-daily-js';

export type PreCallProps = {
  join: () => void;
  participant?: DailyParticipant;
};

const PreCall: React.FC<PreCallProps> = ({ join, participant }) => {
  return (
    <View style={styles.root}>
      {participant ? (
        <>
          <View style={styles.testMediaView}>
            <VideoTile participant={participant} />
          </View>
          <TouchableOpacity style={[commonStyles.buttonWrapper, styles.joinButton]} onPress={join}>
            <Text
              style={[commonStyles.button, commonStyles.submitButtonText, styles.joinButtonText]}
            >
              Join
            </Text>
          </TouchableOpacity>
          <Tray isPreCall />
        </>
      ) : (
        // TODO loader
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default PreCall;
