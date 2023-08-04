import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import TrayButton from '../TrayButton';
import { styles } from './styles';
import { useCallObject } from '../../../shared/daily/useCallObject';
import { DailyCall } from '@daily-co/react-native-daily-js';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../shared/types/navTypes';

export type TrayProps = {
  isPreCall?: boolean;
};

const Tray: React.FC<TrayProps> = ({ isPreCall }) => {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const callObject = useCallObject();
  const [isCameraMuted, setCameraMuted] = useState<boolean>(
    !callObject?.participants().local.video ?? false,
  );
  const [isMicMuted, setMicMuted] = useState<boolean>(
    !callObject?.participants().local.audio ?? false,
  );

  // TODO replace to separate file
  const getStreamStates = (callObject: DailyCall) => {
    let isCameraMuted = false,
      isMicMuted = false;
    if (callObject && callObject.participants() && callObject.participants().local) {
      const localParticipant = callObject.participants().local;
      isCameraMuted = !localParticipant.video;
      isMicMuted = !localParticipant.audio;
    }
    return [isCameraMuted, isMicMuted];
  };

  const toggleCamera = useCallback(() => {
    callObject?.setLocalVideo(isCameraMuted);
  }, [callObject, isCameraMuted]);

  const toggleMic = useCallback(() => {
    callObject?.setLocalAudio(isMicMuted);
  }, [callObject, isMicMuted]);

  const leaveCall = async () => {
    await callObject?.destroy();
    nav.goBack();
  };

  useEffect(() => {
    if (!callObject) {
      return;
    }

    const handleNewParticipantsState = (event?: any) => {
      const [cameraMuted, micMuted] = getStreamStates(callObject);
      setCameraMuted(cameraMuted);
      setMicMuted(micMuted);
    };

    handleNewParticipantsState();

    callObject.on('participant-updated', handleNewParticipantsState);

    return function cleanup() {
      callObject.off('participant-updated', handleNewParticipantsState);
    };
  }, [callObject]);

  return (
    <View style={styles.root}>
      <TrayButton
        source={
          isMicMuted ? require('../../../assets/mic-off.png') : require('../../../assets/mic.png')
        }
        onPress={toggleMic}
      />
      <TrayButton
        source={
          isCameraMuted
            ? require('../../../assets/camera-off.png')
            : require('../../../assets/camera.png')
        }
        onPress={toggleCamera}
      />
      {!isPreCall && (
        <TrayButton source={require('../../../assets/leave.png')} onPress={leaveCall} />
      )}
    </View>
  );
};

export default Tray;
