import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../shared/styles/common';
import CallRoom from '../../components/call/CallRoom';
import { useRoute } from '@react-navigation/native';
import $api from '../../shared/http';

export type CallScreenProps = {};

const CallScreen: React.FC<CallScreenProps> = () => {
  const [url, setUrl] = useState<string>();
  const route = useRoute<any>();
  const { id } = route.params;

  const getCall = async () => {
    $api
      .get(`/calling/${id}`)
      // TODO other args
      .then((res) => setUrl(res.data.url))
      // TODO errorBounder
      .catch((err) => console.error('err', err.response.data.message));
  };

  useEffect(() => {
    getCall().catch();
  }, []);

  return url ? (
    <CallRoom url={url} />
  ) : (
    <View>
      <Text>The consultation is finished</Text>
    </View>
  );
};

export default CallScreen;
