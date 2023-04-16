import {useFollowApi} from '../../../../@lib/api/services/useFollowApi';
import {useSearchUser} from '../../../../@lib/api/services/useSearchUser';
import {useUsersApi} from '../../../../@lib/api/services/useUserApi';

export const useUsers = () => {
  const {data, isLoading, handleLoadMore, isFetchingNextPage} = useUsersApi();
  const {handleFollow} = useFollowApi();
  const {
    searchLoading,

    searchedUser,
    searchText,
    handleSearchTextChange,
  } = useSearchUser();
  const flatListData =
    searchText?.length > 0
      ? searchedUser?.data?.search_results
      : data?.pages?.flatMap(page => page?.data?.users)!;

  const userCount = flatListData?.length;
  const seachError = searchedUser?.response?.data?.error
    ? searchedUser?.response?.data?.error
    : null;
  return {
    isLoading,
    handleSearchTextChange,
    handleLoadMore,
    handleFollow,
    isFetchingNextPage,
    searchLoading,
    flatListData,
    userCount,
    seachError,
    searchText,

    searchedUser,
  };
};
