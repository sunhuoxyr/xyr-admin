import AxiosCore from './core';
import { requestDefaultCofig } from './config';

const http = new AxiosCore(requestDefaultCofig);
export default http;
