import { VAxious } from './Axios';

function createAxios(opt: any = {}) {
  return new VAxious(
    {
      baseURL: '/api',
      timeout: 10 * 1000,
      cancelToken: '',
      ignoreCancelToken: true,
      ...opt,
    },
  );
}

export const request = createAxios();