import {AxiosRequestConfig} from 'axios';

import {
  useQuery,
  useMutation,
  useQueryClient,
  InvalidateQueryFilters,
  useInfiniteQuery,
} from 'react-query';
import {api} from '../api/config';
interface UsePostOptions extends AxiosRequestConfig {}
function useApi() {
  const queryClient = useQueryClient();

  function useLoadMore(url: any, query_key: string, options = {}) {
    return useInfiniteQuery(
      query_key,
      async ({pageParam = 1}) => {
        try {
          return await api.get(url(pageParam), options);
        } catch (error) {
          return error;
        }
      },
      {
        getNextPageParam: (lastPage: any, allPages) => {
          if (lastPage.length < 30) {
            // If the last page didn't have 30 items, then we've reached the end of the data.
            return undefined;
          } else {
            // Otherwise, we increment the page number and return it as the next page parameter.
            const nextPage = allPages.length + 1;
            return nextPage;
          }
        },
      },
    );
  }
  function useGet(url: string, options = {}) {
    return useQuery([url, options], async () => {
      try {
        return await api.get(url, options);
      } catch (error) {
        return error;
      }
    });
  }
  function usePost(
    url: string,
    onSuccess?: () => void,
    options: UsePostOptions = {},
  ) {
    return useMutation(
      async (data: any) => {
        try {
          return await api.post(url, data, options);
        } catch (error) {
          return error;
        }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(url);
        },
        // onError: (error: any) => {
        //   Alert.alert('Error!', error.message);
        // },
      },
    );
  }

  function usePut(
    url: string | InvalidateQueryFilters<unknown> | undefined,
    data: any,
    options = {},
  ) {
    return useMutation(
      async () => {
        try {
          return await api.put(url as string, data, options);
        } catch (error) {
          return error;
        }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(url as string);
        },
      },
    );
  }

  function useDelete(
    url: string | InvalidateQueryFilters<unknown> | undefined,
    options = {},
  ) {
    return useMutation(
      async () => {
        try {
          return await api.delete(url as string, options);
        } catch (error) {
          return error;
        }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(url as string);
        },
      },
    );
  }

  return {useGet, usePost, usePut, useDelete, useLoadMore};
}

export default useApi;
