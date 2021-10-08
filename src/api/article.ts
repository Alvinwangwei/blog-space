import { request } from '@/utils/http/index';

enum Api {
  GetArticleList = '/getArticleList',
}

export function getArticleList(params: any) {
  return request.get({ url: Api.GetArticleList })
}