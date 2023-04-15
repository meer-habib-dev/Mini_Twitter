import {StackActions, useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';
import {setStorageItem} from '../../utils/functions/storage';

function useAuthApi(authIndex: number) {
  const api = useApi();
  const navigation = useNavigation();

  const {
    isLoading,
    data,
    error,

    mutateAsync,
  } = api.usePost(
    authIndex === 1 ? API_ENDPOINTS.POST_SIGNUP : API_ENDPOINTS.POST_LOGIN,
  );
  async function onSubmit(payload: {
    username?: string;
    email: string;
    password: string;
    mode: string;
  }) {
    const {email, username, password} = payload;
    const reqPayload =
      authIndex === 0 ? {email, password} : {email, username, password};
    const result: any = await mutateAsync(reqPayload);

    if (result.status === 200 || result.status === 201) {
      if (authIndex === 0) {
        const timestamp = Date.now();
        setStorageItem('auth-token', result?.data?.token);
        setStorageItem('auth-token-timestamp', timestamp);

        setStorageItem('user-email', email);

        navigation.dispatch(
          StackActions.replace('Main', {
            screen: 'Timeline',
          }),
        );
      }
    } else {
      Alert.alert('Error!', result?.data.message);
    }
  }

  return {onSubmit, isLoading, data, error};
}

export default useAuthApi;
