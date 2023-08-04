import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useCallObject } from '../../../shared/daily/useCallObject';
import VideoTile from '../VideoTile';
import { DailyParticipant } from '@daily-co/react-native-daily-js';

export type MyTileProps = {};

const MyTile: React.FC<MyTileProps> = () => {
  const call = useCallObject();
  const [participant, setParticipant] = useState<DailyParticipant>();

  useEffect(() => {
    setParticipant(call?.participants().local);
  }, [call, call?.localAudio(), call?.localVideo()]);

  return participant ? (
    <View style={[styles.root, styles.vertical]}>
      <VideoTile participant={participant} />
    </View>
  ) : (
    // TODO loader
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default MyTile;
