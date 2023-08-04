import { NotificationType } from '../enums/NotificationType';

export type Notification = {
  id: string;
  // TODO fix anytime on "message"
  massage: string;
  type: NotificationType;
  from: {
    name: string;
    idFrom: string;
  };
  createdAt: string;
  callingId?: string;
};
