const { toString } = Object.prototype;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isObject(val: any) {
  return is(val, 'Object');
}
