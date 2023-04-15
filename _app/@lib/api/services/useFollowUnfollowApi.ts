import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useFollowUnfollowApi = () => {
  const api = useApi();
  const {mutateAsync, isLoading, isSuccess} = api.usePost(
    API_ENDPOINTS.POST_FOLLOW,
  );
  const {
    mutateAsync: unfollowMutate,
    isLoading: unfollowIsLoading,
    isSuccess: unfollowIsSuccess,
  } = api.usePost(API_ENDPOINTS.POST_UNFOLLOW);
  async function handleFollowUnfollow() {}
  return {handleFollowUnfollow};
};
