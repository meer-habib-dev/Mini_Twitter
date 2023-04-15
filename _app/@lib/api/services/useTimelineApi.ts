import Toast from 'react-native-toast-message';
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
    refetch,
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
  async function onSubmit(payload: {tweet: string}) {
    const response: any = await mutateAsync({
      content: payload.tweet,
    });

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Tweet Posted',
      text2: 'Your tweet has been posted',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 60,
      bottomOffset: 40,
    });

    if (response?.status === 201) {
      await refetch();
    }
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
