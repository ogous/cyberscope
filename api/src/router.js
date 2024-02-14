import util from 'util'
import express from 'express'
import logger from '#lib/logger/index.js'
import { AppError } from '#lib/error-handler/index.js'
import fetch from '#lib/fetcher/index.js'
import { getValue } from '#lib/config-manager/index.js'
import { CoinDetailItemDto, CoinListItemDto } from './dtos.js'

export default function defineRoutes(expressApp) {
  const router = express.Router()

  router.get('/health', (_, res) => res.sendStatus(200))

  router.post('/coins', async (req, res, next) => {
    try {
      const { perPage, page } = req.body

      logger.info(`Coins endpoint was called to list ${util.inspect(req.body)}`)

      const body =
        await fetch(`${getValue('coingecko.api.getCoins')}?${getValue('coingecko.params.currency')}${perPage ? `&per_page=${perPage}` : ''}${page ? `&page=${page}` : ''}
        `)

      const data = body.map((item) => new CoinListItemDto(item))

      res.json(data)
    } catch (error) {
      next(error)
    }
  })

  router.get('/coin/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      if (!id) {
        throw new AppError('non-existent-coin-id', `Validation failed`, 400)
      }

      logger.info(`${id} endpoint was called to get coin details by id ${id}`)
      const body = await fetch(getValue('coingecko.api.getCoinById') + id)

      if (!body) {
        res.status(404).end()
        return
      }
      const data = new CoinDetailItemDto(body)
      res.json(data)
    } catch (error) {
      next(error)
    }
  })

  expressApp.use(router)
}
