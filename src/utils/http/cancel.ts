import axios, { AxiosRequestConfig, Canceler } from 'axios';
import { CreateAxiosConfig } from './type';

const genUniqueKey = (config: AxiosRequestConfig) =>
  `${config.method}--${config.url}`;

class AxiosCancel {
  private tokenMap = new Map<string, Canceler>();

  addToken(config: CreateAxiosConfig) {
    return new axios.CancelToken((executor) => {
      const token = genUniqueKey(config);
      if (this.tokenMap.has(token)) {
        executor();
      } else {
        this.tokenMap.set(token, executor);
      }
    });
  }

  removeToken(config: AxiosRequestConfig) {
    const token = genUniqueKey(config);
    this.tokenMap.delete(token);
  }

  resetToken() {
    this.tokenMap.clear();
  }
}

const axiosCancel = new AxiosCancel();
export default axiosCancel;
