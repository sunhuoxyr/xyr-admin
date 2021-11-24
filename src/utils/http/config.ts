import { ContentTypeEnum } from '@/enum/httpEnum';
import { CreateAxiosConfig, RequestOptions } from './type';

export const requestDefaultOptions: RequestOptions = {
  ignoreCancelToken: false,
  withToken: true,
};

export const requestDefaultCofig: CreateAxiosConfig = {
  baseURL: '',
  timeout: 10 * 1000,
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
  requestOptions: requestDefaultOptions,
};
