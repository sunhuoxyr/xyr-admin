export function resultSuccess(result = {}) {
  return {
    code: 0,
    result,
  };
}

export function resultError(code = -1, message = 'Request Faild', result = {}) {
  return {
    code,
    result,
    message,
  };
}
