import debounce from 'lodash/debounce';
import {useCallback, useState} from 'react';
import {API_ENDPOINTS} from '../../constants/api_endpoint';
import useApi from '../../Hooks/useApi';

export const useSearchUser = () => {
  const api = useApi();
  const [searchText, setSearchText] = useState('');
  const {
    status,
    data: searchedUser,
    mutate,
    isLoading: searchLoading,
  } = api.usePost(API_ENDPOINTS.POST_SEARCH);
  const fetchUsers = useCallback(
    debounce(term => {
      // Fetch users from API based on search text
      mutate({
        token: term,
      });
    }, 500),
    [],
  );

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    fetchUsers(text);
  };
  return {
    searchText,
    handleSearchTextChange,
    status,
    searchLoading,
    searchedUser,
  };
};
