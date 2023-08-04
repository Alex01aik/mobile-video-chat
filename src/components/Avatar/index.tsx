import { useLayoutEffect, useState } from 'react';
import { Image } from 'react-native';
import $api from 'http';

export type AvatarProps = any;

const Avatar: React.FC<AvatarProps> = ({ id, ...props }: any) => {
  const [avatar, setAvatar] = useState(
    <Image source={require('../../assets/avatarCenterMed.png')} {...props} />,
  );
  useLayoutEffect(() => {
    if (id === 'System') {
      setAvatar(<Image source={require('../../assets/avatarCenterMed.png')} {...props} />);
      return;
    }
    // TODO
    //     if (id) {
    //       $api
    //         .get(`/avatar/${id}`)
    //         .then((response) => {
    //           setAvatar(response.data);
    //         })
    //         .catch((e) => {
    setAvatar(<Image source={require('../../assets/doctor.png')} {...props} />);
    //         });
    //     }
  }, [id]);

  return avatar;
};

export default Avatar;
