/* eslint-disable import/prefer-default-export */

/**
 * 生成图片的动态路径
 * @param path 文件的相对路径
 * @returns
 */
export const generatePath = (path: string) =>
  new URL(path, `${window.location.origin}`) as unknown as string;
