import { request } from '@/utils/http/index';

enum Api {
  GetArticleList = '/getArticleList',
  GetArticleInfo = '/getArticleInfo',
}

export function getArticleList(params: any) {
  return request.get({ url: Api.GetArticleList })
}

export function getArticleInfo(params: any) {
  return request.get({ url: Api.GetArticleInfo, params })
}