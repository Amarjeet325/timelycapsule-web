/**
 * Logger utility for TimelyCapsule
 * Provides different log levels and safety measures for sensitive data
 * Only logs in development environment
 */

// Log levels enum
export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

// Configuration
const isDevelopment = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

// Types
type LoggerOptions = {
  module?: string;
  sensitive?: boolean;
};

type SensitiveFields = string[];

/**
 * Masks sensitive data in an object
 * @param data - The data to mask
 * @param sensitiveFields - Array of field names to mask
 * @returns Masked data object
 */
export const maskSensitiveData = <T extends Record<string, any>>(
  data: T,
  sensitiveFields: SensitiveFields = ['password', 'token', 'secret', 'key', 'auth', 'jwt']
): T => {
  const maskedData = { ...data };
  
  for (const key in maskedData) {
    if (sensitiveFields.some(field => key.toLowerCase().includes(field.toLowerCase()))) {
      if (typeof maskedData[key] === 'string') {
        maskedData[key] = '********' as any;
      }
    } else if (maskedData[key] && typeof maskedData[key] === 'object' && !Array.isArray(maskedData[key])) {
      maskedData[key] = maskSensitiveData(maskedData[key], sensitiveFields);
    }
  }
  
  return maskedData;
};

/**
 * Logger class for handling different log levels and formatting
 */
class Logger {
  private module: string;

  constructor(module: string = 'App') {
    this.module = module;
  }

  /**
   * Format log message with timestamp and module name
   */
  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] [${this.module}] ${message}`;
  }

  /**
   * Internal log method that handles environment checks and formatting
   */
  private log(level: LogLevel, message: string | object, options?: LoggerOptions): void {
    // Only log in development or test environment
    if (!isDevelopment && !isTest) return;

    const modulePrefix = options?.module ? options.module : this.module;
    const isSensitive = options?.sensitive ?? false;
    
    let formattedMessage: string;
    let logData: any = message;
    
    // Handle objects and sensitive data
    if (typeof message === 'object') {
      if (isSensitive) {
        logData = maskSensitiveData(message as Record<string, any>);
      }
      formattedMessage = `[${level}] [${modulePrefix}] ${JSON.stringify(logData, null, 2)}`;
    } else {
      formattedMessage = `[${level}] [${modulePrefix}] ${message}`;
    }

    // Use appropriate console method based on level
    switch (level) {
      case LogLevel.DEBUG:
        console.debug(formattedMessage);
        break;
      case LogLevel.INFO:
        console.info(formattedMessage);
        break;
      case LogLevel.WARN:
        console.warn(formattedMessage);
        break;
      case LogLevel.ERROR:
        console.error(formattedMessage);
        break;
    }
  }

  /**
   * Debug level logging
   */
  debug(message: string | object, options?: LoggerOptions): void {
    this.log(LogLevel.DEBUG, message, options);
  }

  /**
   * Info level logging
   */
  info(message: string | object, options?: LoggerOptions): void {
    this.log(LogLevel.INFO, message, options);
  }

  /**
   * Warning level logging
   */
  warn(message: string | object, options?: LoggerOptions): void {
    this.log(LogLevel.WARN, message, options);
  }

  /**
   * Error level logging
   */
  error(message: string | object | Error, options?: LoggerOptions): void {
    if (message instanceof Error) {
      const errorObj = {
        message: message.message,
        stack: message.stack,
        name: message.name,
      };
      this.log(LogLevel.ERROR, errorObj, options);
    } else {
      this.log(LogLevel.ERROR, message, options);
    }
  }

  /**
   * Create a new logger instance with a specific module name
   */
  createLogger(module: string): Logger {
    return new Logger(module);
  }
}

// Create and export default logger instance
const logger = new Logger();
export default logger;

