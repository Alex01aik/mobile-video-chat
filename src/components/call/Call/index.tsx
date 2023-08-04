import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Tray from '../Tray';
import { styles } from './styles';
import { DailyParticipant, DailyParticipantsObject } from '@daily-co/react-native-daily-js';
import MyTile from '../MyTile';
import VideoTile from '../VideoTile';
import MainScreen from '../MainScreen';

const defaultParticipant = ({ item }: { item: [string, DailyParticipant] }) => {
  return (
    <View style={styles.participant}>
      <VideoTile id={item[0]} participant={item[1]} />
    </View>
  );
};

export type CallProps = {
  participants?: DailyParticipantsObject;
};

const Call: React.FC<CallProps> = ({ participants }) => {
  const [mainParticipant, setMainParticipant] = useState<DailyParticipant>();

  useEffect(() => {
    if (participants) {
      const participantsArr = Object.entries(participants);
      if (participantsArr.length === 2) {
        const participant = participantsArr.find(([id, _]) => id !== 'local');
        if (participant) {
          setMainParticipant(participant[1]);
        }
      }
    }
  }, [participants]);

  return participants ? (
    <View style={styles.root}>
      <MyTile />
      <MainScreen participant={mainParticipant} />
      <View style={styles.participants}>
        <FlatList
          data={Object.entries(participants)}
          renderItem={defaultParticipant}
          numColumns={2}
          keyExtractor={([id, _]) => id}
        />
      </View>
      <Tray />
    </View>
  ) : (
    <></>
  );
};

export default Call;
