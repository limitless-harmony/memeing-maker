

export const ResponseError = (code, error, message) => {
  return {
    code,
    error,
    message
  };
};

export const ResponseSuccess = (code, data, message) => {
  return {
    code,
    data,
    message
  };
}
