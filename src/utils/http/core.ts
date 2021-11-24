import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { CreateAxiosConfig, RequestOptions, UploadFileParams } from './type';
import UseInterceptors from './interceptors';
import { ContentTypeEnum } from '@/enum/httpEnum';

export default class AxiosCore {
  http: AxiosInstance;

  constructor(config: CreateAxiosConfig) {
    this.http = axios.create(config);
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.http.interceptors.request.use(
      (config) => UseInterceptors.requestInterceptors!(config),
      (error) => UseInterceptors.requestInterceptorsCatch!(error)
    );

    this.http.interceptors.response.use(
      (response) => UseInterceptors.responseInterceptors!(response),
      (error) => UseInterceptors.responseInterceptorsCatch!(error)
    );
  }

  uploadFile(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData();
    const { file, name = 'file', fileName, data } = params;

    if (fileName) {
      formData.append(name, file, fileName);
    } else {
      formData.append(name, file);
    }

    return this.http.request({
      ...config,
      method: 'POST',
      data: formData,
      headers: {
        'Content-type': ContentTypeEnum.FORM_DATA,
        // @ts-ignore
        ignoreCancelToken: true,
      },
    });
  }

  get(config: AxiosRequestConfig, options?: RequestOptions) {
    return this.request({ ...config, method: 'GET' }, options);
  }

  post(config: AxiosRequestConfig, options?: RequestOptions) {
    return this.request({ ...config, method: 'POST' }, options);
  }

  put(config: AxiosRequestConfig, options?: RequestOptions) {
    return this.request({ ...config, method: 'PUT' }, options);
  }

  delete(config: AxiosRequestConfig, options?: RequestOptions) {
    return this.request({ ...config, method: 'DELETE' }, options);
  }

  request(config: AxiosRequestConfig, options: RequestOptions = {}) {
    const $config: CreateAxiosConfig = config;
    /**
     * 测试发现 $config.requestOptions 的值会解构赋值到 interceptors.request.use 中
     */
    $config.requestOptions = options;

    /**
     * 执行顺序
     * interceptors.request
     * interceptors.response
     * resolve
     */
    return new Promise((resolve, reject) => {
      this.http
        .request($config)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}
