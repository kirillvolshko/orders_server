class ApiError extends Error {
  status;
  errors;
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message, status = 400, errors = []) {
    return new ApiError(status, message, errors);
  }
}

export default ApiError;
