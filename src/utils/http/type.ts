import { AxiosRequestConfig } from 'axios';

export interface RequestOptions {
  // 忽略重复提交
  ignoreCancelToken?: boolean;
  // 使用token
  withToken?: boolean;
}

export interface CreateAxiosConfig extends AxiosRequestConfig {
  requestOptions?: RequestOptions;
}

export interface UploadFileParams {
  file: File | Blob;
  name?: string;
  fileName?: string;
  data?: object;
  // [key: string]: any;
}
