import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../../shared/styles/common';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../shared/types/navTypes';
import { styles } from './styles';
import Avatar from '../../Avatar';
import { Notification } from '../../../shared/types/Notificaton';

export type NotificationCardProps = {
  notification: Notification;
};

const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <Text style={styles.name}>{notification.from.name}</Text>
      <Avatar id={notification.from.idFrom} />
      <Text style={styles.message}>{notification.massage}</Text>
      {notification.callingId && (
        <TouchableOpacity
          style={commonStyles.buttonWrapper}
          onPress={() => nav.navigate('Call', { id: notification.callingId!.toString() })}
        >
          <Text style={[commonStyles.button, commonStyles.submitButtonText]}>Connect</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.cardDate}>{notification.createdAt}</Text>
    </View>
  );
};

export default NotificationCard;
