import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useTimelineApi = () => {
  const api = useApi();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetched,
    isLoading,
  } = api.useLoadMore(API_ENDPOINTS.GET_MYTTIMELINE, 'timeline');
  const {
    mutateAsync,
    isLoading: tweetLoading,
    isSuccess,
  } = api.usePost(API_ENDPOINTS.POST_TWEET);
  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }
  console.log('data', data);
  async function onSubmit(payload: {tweet: string}) {
    const r = await mutateAsync({
      content: payload.tweet,
    });
  }

  return {
    data,
    handleLoadMore,
    isLoading,
    isFetched,
    onSubmit,
    isFetchingNextPage,
    tweetLoading,
    isSuccess,
  };
};
