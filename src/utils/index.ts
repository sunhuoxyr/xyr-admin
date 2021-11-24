import { isObject } from './is';

export const noop = () => {};

export function deepMerge(target: any = {}, source: any = {}) {
  const $target = target;
  Object.keys(source).forEach((key) => {
    $target[key] = isObject($target[key])
      ? deepMerge($target[key], source[key])
      : ($target[key] = source[key]);
  });

  return $target;
}
