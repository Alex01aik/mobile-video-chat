import Daily, {
  DailyCall,
  DailyEvent,
  DailyParticipant,
  DailyParticipantsObject,
} from '@daily-co/react-native-daily-js';
import React, { useEffect, useState } from 'react';
import Call from '../Call';
import PreCall from '../PreCall';
import CallObjectContext from '../../../shared/daily/CallObjectContext';

export type CallRoomProps = {
  url: string;
};

const CallRoom: React.FC<CallRoomProps> = ({ url }) => {
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [call, setCall] = useState<DailyCall | null>(null);
  const [localParticipant, setLocalParticipant] = useState<DailyParticipant>();
  const [participants, setParticipants] = useState<DailyParticipantsObject>();

  // TODO make on click
  useEffect(() => {
    if (!call) {
      createCallRoom(process.env.EXPO_PUBLIC_PRE_CALL_URL!);
    }
    return () => {
      destroyCallRoom().catch();
    };
  }, []);

  const createCallRoom = async (url: string) => {
    const newCall = Daily.createCallObject({
      startVideoOff: true,
      startAudioOff: true,
    });
    await newCall.join({ url });
    setCall(newCall);
  };

  const joinToCall = async () => {
    if (call) {
      await destroyCallRoom();
      await createCallRoom(url);
    }
    setIsJoined(true);
  };

  const destroyCallRoom = async () => {
    if (call) {
      await call.destroy();
    }
  };

  useEffect(() => {
    if (!call) {
      return;
    }

    const events: DailyEvent[] = ['participant-joined', 'participant-updated', 'participant-left'];

    const handleNewParticipantsState = (event?: any) => {
      // event && console.log(event);
      if (!localParticipant) {
        setLocalParticipant(call.participants().local);
      }
      setParticipants({ ...call.participants() });
    };

    handleNewParticipantsState();

    for (const event of events) {
      call.on(event, handleNewParticipantsState);
    }

    return function cleanup() {
      for (const event of events) {
        call.off(event, handleNewParticipantsState);
      }
    };
  }, [call]);

  return (
    <CallObjectContext.Provider value={call}>
      {isJoined ? (
        <Call participants={participants} />
      ) : (
        <PreCall join={joinToCall} participant={localParticipant} />
      )}
    </CallObjectContext.Provider>
  );
};

export default CallRoom;
