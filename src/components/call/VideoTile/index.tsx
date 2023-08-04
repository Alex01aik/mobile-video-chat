import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DailyMediaView, DailyParticipant } from '@daily-co/react-native-daily-js';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { useCallObject } from '../../../shared/daily/useCallObject';

export type VideoTileProps = {
  id?: string;
  participant: DailyParticipant;
};
// TODO replace
export const isLocal = (id: string) => {
  return id === 'local';
};

const VideoTile: React.FC<VideoTileProps> = ({ id = 'local', participant }) => {
  const call = useCallObject();
  const [usingFrontCamera, setUsingFrontCamera] = useState(true);

  const flipCamera = useCallback(async () => {
    if (!call) {
      return;
    }
    const { device } = await call.cycleCamera();
    if (device) {
      setUsingFrontCamera(device.facingMode === 'user');
    }
  }, [call]);

  const [p, setP] = useState<any>({
    videoTrackState: participant.tracks?.video,
    audioTrackState: participant.tracks?.audio,
  });

  useEffect(() => {
    setP({
      videoTrackState: participant.tracks?.video,
      audioTrackState: participant.tracks?.audio,
    });
  }, [participant]);

  const videoTrack = useMemo(() => {
    return p?.videoTrackState && p.videoTrackState.state === 'playable'
      ? p.videoTrackState.track!
      : null;
  }, [p.videoTrackState]);

  const audioTrack = useMemo(() => {
    return p?.audioTrackState && p.audioTrackState.state === 'playable'
      ? p.audioTrackState.track!
      : null;
  }, [p.audioTrackState]);

  return p ? (
    <>
      {audioTrack ? (
        <></>
      ) : (
        <Image style={styles.micIcon} source={require('../../../assets/mic-off.png')} />
      )}
      {videoTrack ? (
        <TouchableHighlight style={styles.root} onPress={flipCamera}>
          <DailyMediaView
            videoTrack={videoTrack}
            audioTrack={audioTrack}
            style={styles.root}
            mirror={isLocal(id) && usingFrontCamera}
          />
        </TouchableHighlight>
      ) : (
        <View style={styles.root}>
          <View style={styles.userIcon}>
            <Text style={styles.userIconText}>icon</Text>
          </View>
        </View>
      )}
    </>
  ) : (
    // TODO loader
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default VideoTile;
