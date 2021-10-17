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
    // this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {})
    this.axiosInstance.interceptors.response.use((res: AxiosResponse) => {
      return res.data
    })
  }

  get(config: any, options?: any) {
    return this.request({...config,methods: 'GET'}, options);
  }

  post(config: any, options?: any) {
    return this.request({...config, methods: 'POST'}, options);
  }

  request(config: any, options?: any) {
    let conf = {
      ...config,
      ...this.options
    }
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(conf)
        .then((res: AxiosResponse) => {
          resolve(res);
        })
        .catch((err: AxiosError) => {
          reject(err || new Error('request error!'));
        })
    })
  }

}