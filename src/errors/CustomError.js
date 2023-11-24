class CustomError extends Error {
  static ERROR_PREFIX = '[ERROR]';

  constructor(message, name) {
    super(`${CustomError.ERROR_PREFIX} ${name}: ${message}`);
    this.name = name || this.constructor.name;
  }

  static inputView(message) {
    return new CustomError(message, 'InputViewError');
  }

  static coach(message) {
    return new CustomError(message, 'CoachError');
  }

  static menuPickerService(message) {
    return new CustomError(message, 'MenuPickerServiceError');
  }
}

export default CustomError;
