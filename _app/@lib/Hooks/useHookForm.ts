import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

export const useFormHandler = (defaultValues, schema, onSubmit) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting, isSubmitted, isSubmitSuccessful},
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = handleSubmit(onSubmit);

  return {
    control,
    onSubmitHandler,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    isSubmitted,
    reset,
  };
};
