import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import NotificationCard from './NotificationCard';
import $api from '../../shared/http';
import { Notification } from '../../shared/types/Notificaton';

export type NotificationsProps = {};

const Notifications: React.FC<NotificationsProps> = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const getNotification = async () => {
    const res = await $api.get('/notification/');
    setNotifications(res.data);
  };
  useEffect(() => {
    getNotification().catch();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      {notifications.length ? (
        notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default Notifications;
