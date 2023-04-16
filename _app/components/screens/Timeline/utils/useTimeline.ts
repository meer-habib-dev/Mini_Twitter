import {useState} from 'react';
import {useFollowApi} from '../../../../@lib/api/services/useFollowApi';
import {useSearchUser} from '../../../../@lib/api/services/useSearchUser';
import {useTimelineApi} from '../../../../@lib/api/services/useTimelineApi';

export const useTimeline = () => {
  const [post, setPost] = useState(false);

  const {
    isLoading,
    data,
    handleLoadMore,
    isFetchingNextPage,
    onSubmit,
    tweetLoading,
  } = useTimelineApi();
  const {
    searchLoading,

    searchedUser,
    searchText,
    handleSearchTextChange,
  } = useSearchUser();
  const {handleFollow} = useFollowApi();
  function hanldePost() {
    setPost(prev => !prev);
  }
  const searchEnable = searchText?.length > 0;
  const flatlistData = searchEnable
    ? searchedUser?.data?.search_results
    : data?.pages?.flatMap(page => page?.data?.timeline)! || [];
  const seachError = searchedUser?.response?.data?.error
    ? searchedUser?.response?.data?.error
    : null;
  const searchCount = searchedUser?.data?.count;
  const timelineCount = flatlistData?.length;
  return {
    post,
    isLoading,
    handleFollow,
    hanldePost,
    handleLoadMore,
    handleSearchTextChange,
    onSubmit,
    isFetchingNextPage,
    tweetLoading,
    searchLoading,
    searchedUser,
    searchEnable,
    searchCount,
    flatlistData,
    searchText,
    seachError,
    setPost,
    timelineCount,
  };
};
