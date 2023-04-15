import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useGetFollowersApi = () => {
  const api = useApi();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetched,
    isLoading,
  } = api.useLoadMore(API_ENDPOINTS.GET_FOLLOWERLIST, 'GetFollower');
  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }
  return {handleLoadMore, isFetched, isLoading, data};
};
