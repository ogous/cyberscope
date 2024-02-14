import { pino } from 'pino'

class PinoLogger {
  logger

  configureLogger({ level, prettyPrintEnabled }) {
    if (this.logger) {
      this.logger.warning('Logger is already configured')

      return
    }
    this.logger = pino({
      level: level || 'info',
      transport: prettyPrintEnabled
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
              sync: true,
            },
          }
        : undefined,
    })
  }

  info(message) {
    this.logger.info(message)
  }
  debug(message) {
    this.logger.debug(message)
  }

  error(message) {
    this.logger.error(message)
  }

  warning(message) {
    this.logger.warning(message)
  }
}
const logger = new PinoLogger()
export default logger
