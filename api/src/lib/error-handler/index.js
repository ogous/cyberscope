import logger from '#lib/logger/index.js'
import * as util from 'node:util'

let httpServerRef

const errorHandler = {
  listenToErrorEvents: (httpServer) => {
    httpServerRef = httpServer
    process.on('uncaughtException', async (error) => {
      await errorHandler.handleError(error)
    })

    process.on('unhandledRejection', async (reason) => {
      await errorHandler.handleError(reason)
    })

    process.on('SIGTERM', async () => {
      logger.error(
        'App received SIGTERM event, try to gracefully close the server'
      )
      await terminateHttpServerAndExit()
    })

    process.on('SIGINT', async () => {
      logger.error(
        'App received SIGINT event, try to gracefully close the server'
      )
      await terminateHttpServerAndExit()
    })
  },

  handleError: (errorToHandle) => {
    try {
      const appError = normalizeError(errorToHandle)
      logger.error(appError.message, appError)
      metricsExporter.fireMetric('error', { errorName: appError.name }) // fire any error reports
    } catch (handlingError) {
      process.stdout.write(
        'The error handler failed, here are the handler failure and then the origin error that it tried to handle'
      )
      process.stdout.write(JSON.stringify(handlingError))
      process.stdout.write(JSON.stringify(errorToHandle))
    }
  },
}

const terminateHttpServerAndExit = async () => {
  if (httpServerRef) {
    await httpServerRef.close()
  }
  process.exit()
}

const normalizeError = (errorToHandle) => {
  if (errorToHandle instanceof AppError) {
    return errorToHandle
  }
  if (errorToHandle instanceof Error) {
    const appError = new AppError(errorToHandle.name, errorToHandle.message)
    appError.stack = errorToHandle.stack
    return appError
  }
  const inputType = typeof errorToHandle
  return new AppError(
    'general-error',
    `Error Handler received a none error instance with type - ${inputType}, value - ${util.inspect(
      errorToHandle
    )}`
  )
}

class AppError extends Error {
  constructor(name, message, HTTPStatus = 500, cause) {
    super(message)
    this.name = name
    this.HTTPStatus = HTTPStatus
    this.cause = cause
  }
}

const metricsExporter = {
  fireMetric: async (name, labels) => {
    console.log(
      'Here can be implemented an error exporter for some monitoring tool',
      {
        name,
        labels,
      }
    )
  },
}

export { errorHandler, metricsExporter, AppError }
