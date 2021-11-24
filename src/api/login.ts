import http from '@/utils/http';

interface LoginParam {
  account: string;
  password: string;
}
const loginApi = (user: LoginParam) => {
  const results = http.post({
    url: '/login',
    data: user,
  });
  return results;
};

export default loginApi;
