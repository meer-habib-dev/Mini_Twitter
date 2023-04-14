import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useTimelineApi = () => {
  const api = useApi();
  const {data, fetchNextPage, hasNextPage, isFetchingNextPage} =
    api.useLoadMore(API_ENDPOINTS.GET_USERS, 'user');
  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  console.log(
    'da',
    data?.pages,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  );
  return {data, handleLoadMore};
};
