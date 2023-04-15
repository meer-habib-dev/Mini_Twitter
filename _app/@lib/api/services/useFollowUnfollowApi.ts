import {Alert} from 'react-native';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useFollowUnfollowApi = () => {
  const api = useApi();
  const {mutateAsync, isLoading, isSuccess, status} = api.usePost(
    API_ENDPOINTS.POST_FOLLOW,
  );
  async function handleFollow({id, username}) {
    const response = await mutateAsync({user_id: id});
    if (response?.status === 200) {
      const regex =
        /::\s*(Successfully followed|Successfully unfollowed):\s*(.*)/;
      const [_, message, name] = response.data.resp.match(regex);
      const responseText = `${message}: ${name}`;
      Alert.alert('Success!', responseText);
    } else {
      Alert.alert('Error!', 'Something went wrong! Try again later');
    }
  }

  return {handleFollow};
};
