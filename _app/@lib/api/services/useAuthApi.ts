import {StackActions, useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';
import {setStorageItem} from '../../utils/functions/storage';
import Toast from 'react-native-toast-message';
import {useState} from 'react';
function useAuthApi() {
  const api = useApi();
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const {
    isLoading,
    data,
    error,

    mutateAsync,
  } = api.usePost(
    index === 1 ? API_ENDPOINTS.POST_SIGNUP : API_ENDPOINTS.POST_LOGIN,
  );
  async function onSubmit(payload: {
    username?: string;
    email: string;
    password: string;
    mode: string;
  }) {
    const {email, username, password} = payload;
    const reqPayload =
      index === 0 ? {email, password} : {email, username, password};
    const result: any = await mutateAsync(reqPayload);

    if (result.status === 200 || result.status === 201) {
      if (index === 0) {
        const timestamp = Date.now();
        setStorageItem('auth-token', result?.data?.token);
        setStorageItem('auth-token-timestamp', timestamp);
        setStorageItem('user-email', email);

        navigation.dispatch(
          StackActions.replace('Main', {
            screen: 'Timeline',
          }),
        );
      } else {
        setIndex(0);
      }
    } else {
      Toast.show({
        type: 'error',
        text1: index === 0 ? 'Login' : 'Sign in',
        text2: result?.response?.data.error,
      });
    }
  }

  return {onSubmit, isLoading, data, error, index, setIndex};
}

export default useAuthApi;
