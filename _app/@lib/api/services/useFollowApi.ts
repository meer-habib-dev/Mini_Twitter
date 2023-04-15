import {Alert} from 'react-native';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useFollowApi = () => {
  const api = useApi();
  const {mutateAsync, isLoading: followLoading} = api.usePost(
    API_ENDPOINTS.POST_FOLLOW,
  );
  async function handleFollow(id: number, username: string) {
    const response: any = await mutateAsync({user_id: id});

    if (response?.status === 200) {
      Alert.alert('Success!', `You have followed ${username}`);
    } else {
      Alert.alert('Error!', 'Something went wrong! Try again later');
    }
  }
  return {handleFollow, followLoading};
};
