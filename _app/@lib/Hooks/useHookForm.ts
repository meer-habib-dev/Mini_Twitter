import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

export const useFormHandler = (defaultValues, schema, onSubmit) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = handleSubmit(onSubmit);

  return {
    control,
    onSubmit: onSubmitHandler,
    errors,
    isSubmitting,
  };
};
