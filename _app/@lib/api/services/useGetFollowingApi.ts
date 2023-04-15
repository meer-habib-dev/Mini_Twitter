import {Alert} from 'react-native';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useGetFollowingApi = () => {
  const api = useApi();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetched,
    isLoading,
    refetch,
  } = api.useLoadMore(API_ENDPOINTS.GET_FOLLOWINGLIST, 'GetFollowing');
  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }
  const {mutateAsync: unfollowMutate, isLoading: unfollowIsLoading} =
    api.usePost(API_ENDPOINTS.POST_UNFOLLOW);
  async function handleUnfollow(id: number, name: string) {
    Alert.alert(
      `Unfollow ${name}`,
      `Are you sur you want to unfollow ${name}`,
      [
        {
          text: 'No',
          onPress: () => {},
        },
        {
          text: 'Yes',
          onPress: async () => {
            const response: any = await unfollowMutate({user_id: id});
            console.log('response', response);
            if (response?.status === 200) {
              refetch();
            }
          },
        },
      ],
    );
  }
  return {
    handleLoadMore,
    isFetched,
    isLoading,
    data,
    unfollowIsLoading,
    handleUnfollow,
  };
};
