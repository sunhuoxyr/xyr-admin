import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const mockModules: any[] = [];
// import.meta.globEager 会有报错信息，但不影响使用
const modules = import.meta.globEager('./mock/modules/*.ts');
Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default);
});

export default function setupProdMockServer() {
  createProdMockServer(mockModules);
}
