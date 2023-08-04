import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().email().required(),
  // TODO true password validation
  password: yup.string().min(6).required(),
});
