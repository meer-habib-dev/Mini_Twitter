import {
  useQuery,
  useMutation,
  useQueryClient,
  InvalidateQueryFilters,
} from 'react-query';
import {api} from '../api/config';

function useApi() {
  const queryClient = useQueryClient();

  function useGet(url: string, options = {}) {
    return useQuery([url, options], async () => {
      const response = await api.get(url, options);
      return response.data;
    });
  }

  function usePost(
    url: string | InvalidateQueryFilters<unknown> | undefined,
    data: any,
    options = {},
  ) {
    return useMutation(() => api.post(url as string, data, options), {
      onSuccess: () => {
        queryClient.invalidateQueries(url as string);
      },
    });
  }

  function usePut(
    url: string | InvalidateQueryFilters<unknown> | undefined,
    data: any,
    options = {},
  ) {
    return useMutation(() => api.put(url as string, data, options), {
      onSuccess: () => {
        queryClient.invalidateQueries(url as string);
      },
    });
  }

  function useDelete(
    url: string | InvalidateQueryFilters<unknown> | undefined,
    options = {},
  ) {
    return useMutation(() => api.delete(url as string, options), {
      onSuccess: () => {
        queryClient.invalidateQueries(url as string);
      },
    });
  }

  return {useGet, usePost, usePut, useDelete};
}

export default useApi;
