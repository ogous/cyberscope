import helmet from 'helmet'
import express from 'express'
import * as configManager from '#lib/config-manager/index.js'
import logger from '#lib/logger/index.js'
import { errorHandler } from '#lib/error-handler/index.js'
import config from './config.js'
import defineRoutes from './router.js'

let connection

async function startWebServer() {
  configManager.initializeAndValidate(config)
  logger.configureLogger({
    level: configManager.getValue('logger.level'),
    prettyPrint: Boolean(configManager.getValue('logger.prettyPrint')),
  })
  const expressApp = express()
  expressApp.use(helmet())
  expressApp.use(express.urlencoded({ extended: true }))
  expressApp.use(express.json())

  defineRoutes(expressApp)
  defineErrorHandlingMiddleware(expressApp)
  const APIAddress = await openConnection(expressApp)
  return APIAddress
}

async function stopWebServer() {
  return new Promise((resolve) => {
    if (connection !== undefined) {
      connection.close(() => {
        resolve()
      })
    }
  })
}

async function openConnection(expressApp) {
  return new Promise((resolve) => {
    const portToListenTo = configManager.getValue('port')
    const hostname = configManager.getValue('host') || '0.0.0.0'
    const webServerPort = portToListenTo || 0
    logger.info(`Server is about to listen to port ${webServerPort}`)
    connection = expressApp.listen(webServerPort, hostname, () => {
      errorHandler.listenToErrorEvents(connection)
      resolve(connection.address())
    })
  })
}

function defineErrorHandlingMiddleware(expressApp) {
  // eslint-disable-next-line no-unused-vars
  expressApp.use(async (error, req, res, next) => {
    errorHandler.handleError(error)
    res.status(error?.HTTPStatus || 500).end()
  })
}

export { startWebServer, stopWebServer }
