import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess } from '../util';

export function createFakeUserList() {
  return [
    {
      userId: '1',
      username: 'vben',
      realName: 'Vben Admin',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456',
      token: 'fakeToken1',
      homePath: '/dashboard/analysis',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super',
        },
      ],
    },
    {
      userId: '2',
      username: 'test',
      password: '123456',
      realName: 'test user',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: [
        {
          roleName: 'Tester',
          value: 'test',
        },
      ],
    },
  ];
}

export default [
  // mock user login
  {
    url: '/login',
    timeout: 2000,
    method: 'post',
    response: ({ body }) => {
      const { account, password } = body;
      const checkUser = createFakeUserList().find(
        (item) => item.username === account && password === item.password
      );
      if (!checkUser) {
        return {
          code: -1,
          message: 'Incorrect account or password！',
        };
      }
      return resultSuccess(checkUser);
    },
  },
] as MockMethod[];
