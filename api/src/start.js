import logger from '#lib/logger/index.js'
import { AppError, errorHandler } from '#lib/error-handler/index.js'
import { startWebServer } from './server.js'

async function start() {
  return Promise.all([startWebServer()])
}

start()
  .then((startResponses) => {
    logger.info(
      `The app has started successfully ${JSON.stringify(startResponses[0])}}`
    )
  })
  .catch((error) => {
    console.log('BBOBO', error)
    errorHandler.handleError(
      new AppError('startup-failure', error.message, 500, error)
    )
  })
