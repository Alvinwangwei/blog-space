import { VAxious } from './Axios'
import { deepMerge } from '@/utils/index';

function createAxios(opt?: any) {
  return new VAxious(
    deepMerge(
      {
        baseURL: '',
        timeout: 10 * 1000,
        cancelToken: '',
        // 忽略重复请求
        ignoreCancelToken: true,
      }, 
      opt || {},
    )
  );
}

export const request = createAxios();