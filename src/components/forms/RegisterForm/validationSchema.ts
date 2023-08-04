import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().email().required(),
  // TODO true password validation
  password: yup.string().min(6).required(),
  checkOfert: yup.boolean().isTrue().required(),
  checkPrivacy: yup.boolean().isTrue().required(),
});
