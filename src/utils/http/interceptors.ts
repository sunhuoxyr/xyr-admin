import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateAxiosConfig, RequestOptions } from './type';
import axiosCancel from './cancel';

const UseInterceptors = {
  // request 拦截器处理
  requestInterceptors(config: AxiosRequestConfig) {
    const $config: CreateAxiosConfig = config;
    const { requestOptions } = $config;
    const token = '123456789';

    // 重复提交处理
    if (!requestOptions?.ignoreCancelToken) {
      $config.cancelToken = axiosCancel.addToken($config);
    }

    // token 处理
    if (token && requestOptions?.withToken) {
      $config!.headers!.Authorization = token;
    }

    return $config;
  },
  // request 拦截器 错误处理
  requestInterceptorsCatch(error: Error) {
    return Promise.reject(error);
  },

  // response 拦截器
  responseInterceptors(response: AxiosResponse) {
    axiosCancel.removeToken(response.config);
    return response;
  },

  // response 拦截器错误处理
  // eslint-disable-next-line consistent-return
  responseInterceptorsCatch(error: Error) {
    if (axios.isCancel(error)) {
      console.log('重复请求，拦截了');
    } else {
      axiosCancel.resetToken();
      return Promise.reject(error);
    }
  },
};
export default UseInterceptors;
