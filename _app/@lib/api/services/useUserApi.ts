import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useUsersApi = () => {
  const api = useApi();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetched,
    isLoading,
    // refetch,
  } = api.useLoadMore(API_ENDPOINTS.GET_USERS, 'users');
  function handleLoadMore() {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }

  // const {mutateAsync, isLoading: followLoading} = api.usePost(
  //   API_ENDPOINTS.POST_FOLLOW,
  // );
  // async function handleFollow(id, username) {
  //   const response: any = await mutateAsync({user_id: id});

  //   if (response?.status === 200) {
  //     Alert.alert('Success!', `You have followed ${username}`);
  //   } else {
  //     Alert.alert('Error!', 'Something went wrong! Try again later');
  //   }
  // }

  return {
    handleLoadMore,
    isFetched,
    isLoading,
    data,
    // followLoading,
    // handleFollow,
  };
};
