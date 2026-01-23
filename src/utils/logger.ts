import { format } from 'date-fns';

/**
 * Log levels for the logger utility.
 */
enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

/**
 * Logger utility class for logging messages with different levels.
 */
class Logger {
    private logLevel: LogLevel;

    /**
     * Creates an instance of Logger.
     * @param logLevel - The initial log level for the logger.
     */
    constructor(logLevel: LogLevel = LogLevel.INFO) {
        this.logLevel = logLevel;
    }

    /**
     * Logs a message at the DEBUG level.
     * @param message - The message to log.
     */
    debug(message: string): void {
        this.log(LogLevel.DEBUG, message);
    }

    /**
     * Logs a message at the INFO level.
     * @param message - The message to log.
     */
    info(message: string): void {
        this.log(LogLevel.INFO, message);
    }

    /**
     * Logs a message at the WARN level.
     * @param message - The message to log.
     */
    warn(message: string): void {
        this.log(LogLevel.WARN, message);
    }

    /**
     * Logs a message at the ERROR level.
     * @param message - The message to log.
     */
    error(message: string): void {
        this.log(LogLevel.ERROR, message);
    }

    /**
     * Sets the log level for the logger.
     * @param logLevel - The log level to set.
     */
    setLogLevel(logLevel: LogLevel): void {
        this.logLevel = logLevel;
    }

    /**
     * Logs a message with the specified log level if it meets the current log level.
     * @param level - The log level of the message.
     * @param message - The message to log.
     */
    private log(level: LogLevel, message: string): void {
        const levels = Object.values(LogLevel);
        const currentLevelIndex = levels.indexOf(this.logLevel);
        const messageLevelIndex = levels.indexOf(level);

        if (messageLevelIndex >= currentLevelIndex) {
            const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
            console.log(`[${timestamp}] [${level}] ${message}`);
        }
    }
}

export { Logger, LogLevel };