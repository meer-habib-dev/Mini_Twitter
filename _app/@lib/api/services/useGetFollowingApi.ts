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
  } = api.useLoadMore(API_ENDPOINTS.GET_FOLLOWINGLIST, 'GetFollowing');
  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }
  return {handleLoadMore, isFetched, isLoading, data};
};
