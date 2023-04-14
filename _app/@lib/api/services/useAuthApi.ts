import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';
import {setStorageItem} from '../../utils/functions/storage';

function useAuthApi(authIndex: number) {
  const api = useApi();
  const navigation = useNavigation();

  //   const {data: users} = api.useGet(API_ENDPOINTS.GET_USERS);

  //   const createUser = data => api.usePost(API_ENDPOINTS.CREATE_USER, data);
  //   const updateUser = (id, data) =>
  //     api.usePut(API_ENDPOINTS.UPDATE_USER(id), data);
  //   const deleteUser = id => api.useDelete(API_ENDPOINTS.DELETE_USER(id));

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
    console.log('r', result);

    if (result.status === 200 || result.status === 201) {
      if (authIndex === 0) {
        console.log('insideSuccess');
        setStorageItem('auth-token', result?.data.token);
        navigation.navigate('Main');
      } else {
      }
    } else {
      console.log(' result?.data.token', result?.data.token);
      Alert.alert('Error!', result?.data.message);
    }
  }

  return {onSubmit, isLoading, data, error};
}

export default useAuthApi;
