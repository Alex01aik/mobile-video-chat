import React from 'react';
import { useForm, FormProvider, FormProviderProps, UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export type UIFormProps = UseFormProps & {
  onValuesChange?: (values: any) => void;
  validationSchema?: yup.AnyObjectSchema;
  onSubmit?: (values: any) => void;
  children: React.ReactNode;
};

const UIForm: React.FC<UIFormProps> = (props) => {
  const methods = useForm({
    ...props,
    // TODO type
    resolver: yupResolver((props.validationSchema ?? yup.object({})) as any),
    defaultValues: props.defaultValues ?? {},
  });

  return <FormProvider {...methods}>{props.children}</FormProvider>;
};

export default UIForm;
