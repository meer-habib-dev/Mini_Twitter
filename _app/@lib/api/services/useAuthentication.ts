import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

function useUsers() {
  const api = useApi();

  //   const {data: users} = api.useGet(API_ENDPOINTS.GET_USERS);

  //   const createUser = data => api.usePost(API_ENDPOINTS.CREATE_USER, data);
  //   const updateUser = (id, data) =>
  //     api.usePut(API_ENDPOINTS.UPDATE_USER(id), data);
  //   const deleteUser = id => api.useDelete(API_ENDPOINTS.DELETE_USER(id));

  return {};
}

export default useUsers;
