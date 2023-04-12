import {AxiosRequestConfig} from 'axios';
import {Alert} from 'react-native';
import {
  useQuery,
  useMutation,
  useQueryClient,
  InvalidateQueryFilters,
} from 'react-query';
import {api} from '../api/config';
interface UsePostOptions extends AxiosRequestConfig {}
function useApi() {
  const queryClient = useQueryClient();

  function useGet(url: string, options = {}) {
    return useQuery([url, options], async () => {
      try {
        const response = await api.get(url, options);
        return response.data;
      } catch (error) {
        console.log('Error:', error);
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
        await api.post(url, data, options);
        // try {
        // } catch (error) {
        //   console.error('Error:', error);
        // }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(url);
          onSuccess && onSuccess();
        },
        onError: (error: any) => {
          Alert.alert('Error!', error.message);
        },
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
          await api.put(url as string, data, options);
        } catch (error) {
          console.error('Error:', error);
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
          await api.delete(url as string, options);
        } catch (error) {
          console.error('Error:', error);
        }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(url as string);
        },
      },
    );
  }

  return {useGet, usePost, usePut, useDelete};
}

export default useApi;
