import {Alert} from 'react-native';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';
import Toast from 'react-native-toast-message';
export const useFollowApi = () => {
  const api = useApi();
  const {mutateAsync, isLoading: followLoading} = api.usePost(
    API_ENDPOINTS.POST_FOLLOW,
  );
  async function handleFollow(id: number, username: string) {
    const response: any = await mutateAsync({user_id: id});

    if (response?.status === 200) {
      Toast.show({
        position: 'bottom', 
        type: 'success',
        text1: 'Success!',
        text2: `You have followed ${username}`,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error!',
        text2: 'Something went wrong! Try again later',
      });
    }
  }
  return {handleFollow, followLoading};
};
