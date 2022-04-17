import { request } from '@/utils/http/index';

enum Api {
  GetArticleList = '/getArticleList',
  GetArticleInfo = '/getArticleInfo',
  UpdateArticle = '/updateArticle',
  DeleteArticle = '/deleteArticle',
}

export function getArticleList(params: any) {
  return request.get({ url: Api.GetArticleList })
}

export function getArticleInfo(params: any) {
  return request.get({ url: Api.GetArticleInfo, params })
}

/**
 *  更新文章信息
 */
export function updateArticle(params: any) {
  return request.post({ url: Api.UpdateArticle, params })
}

/**
 *  删除文章
 */
 export function deleteArticle(params: any) {
  return request.post({ url: Api.DeleteArticle, params })
}