import * as Yup from 'yup';

export const RegistrationVS = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});
export const LoginVS = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});
