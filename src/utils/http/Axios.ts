import axios from "axios";
import type { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

export class VAxious {
  private axiosInstance: AxiosInstance;
  private readonly options: any;

  constructor(options: any) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.response.use((res: AxiosResponse) => {
      return res.data
    })
  }

  get(config: any) {
    // return this.request({...config,methods: 'GET'});
    return new Promise((resolve, reject) => {
      this.axiosInstance({
        ...config,
        method: 'get',
      })
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: AxiosError) => {
        reject(err || new Error('request error!'));
      })
    })
  }

  post(config: any) {
    return new Promise((resolve, reject) => {
      this.axiosInstance({
        ...config,
        method: 'post',
        data: config.params
      })
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: AxiosError) => {
        reject(err || new Error('request error!'));
      })
    })
  }
}