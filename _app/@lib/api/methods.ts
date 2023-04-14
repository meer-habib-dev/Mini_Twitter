import {api} from './config';

const _get = (slug: string, payload?: any) => api.get(slug, payload);
const _post = (slug: string, payload: any, value?: string) => {
  return api.post(slug, payload, {
    headers: {
      Authorization: value,
    },
  });
};

const _update = (slug: string, payload?: any, value?: string) =>
  api.patch(slug, payload, {
    headers: {
      Authorization: value,
    },
  });
const _put = (slug: string, payload: any, value?: string) =>
  api.put(slug, payload, {
    headers: {
      Authorization: value,
    },
  });
const _delete = (slug: string) => api.delete(slug);

export default {
  _get,
  _post,
  _update,
  _put,
  _delete,
};
