const createError = (error, config = {}) => {
  if (error.response) {
    const {status, data = {}} = error.response;
    const {title, message} = data;

    const customError = new Error(
      message || config[status] || config.error || 'Something went wrong :(',
    );

    customError.status = status;
    customError.title = title || 'Error';

    return customError;
  }

  return error;
};

export default createError;
