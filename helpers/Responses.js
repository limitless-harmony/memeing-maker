

export const ResponseError = (code, error, message) => ({
  code,
  error,
  message
});

export const ResponseSuccess = (code, data, message) => ({
  code,
  data,
  message
});
