import {useNavigation} from '@react-navigation/native';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';
import storage from '../../utils/functions/storage';

function useAuthApi(authIndex: number) {
  const api = useApi();
  const navigation = useNavigation();
  //   const {data: users} = api.useGet(API_ENDPOINTS.GET_USERS);

  //   const createUser = data => api.usePost(API_ENDPOINTS.CREATE_USER, data);
  //   const updateUser = (id, data) =>
  //     api.usePut(API_ENDPOINTS.UPDATE_USER(id), data);
  //   const deleteUser = id => api.useDelete(API_ENDPOINTS.DELETE_USER(id));

  const {isLoading, data, error, mutate} = api.usePost(
    authIndex === 1 ? API_ENDPOINTS.POST_SIGNUP : API_ENDPOINTS.POST_LOGIN,
    onSuccess,
  );
  const onSubmit = async (payload: {
    username?: string;
    email: string;
    password: string;
    mode: string;
  }) => {
    const {email, username, password} = payload;
    const reqPayload =
      authIndex === 0 ? {email, password} : {email, username, password};
    mutate(reqPayload);
  };

  console.log('data', authIndex, data, error);
  async function onSuccess() {
    if (authIndex === 0 && data) {
      await storage.saveValue('auth-token', data.token);
      navigation.navigate('Main');
    } else {
      return;
    }
  }
  return {onSubmit, isLoading, data, error};
}

export default useAuthApi;
