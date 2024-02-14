export default {
  port: {
    doc: 'The API listening port.',
    format: 'Number',
    default: 3001,
    nullable: true,
    env: 'PORT',
  },
  host: {
    doc: 'The hostname of API, it can be necessary to use in some environments',
    format: 'String',
    default: '0.0.0.0',
    nullable: true,
    env: 'PORT',
  },
  logger: {
    level: {
      doc: 'Which type of logger entries should actually be written',
      format: ['debug', 'info', 'warn', 'error', 'critical'],
      default: 'info',
      nullable: false,
      env: 'LOGGER_LEVEL',
    },
    prettyPrint: {
      doc: 'Weather the logger should be configured to pretty print the output',
      format: 'Boolean',
      default: true,
      nullable: false,
      env: 'PRETTY_PRINT_LOG',
    },
  },
  coingecko: {
    api: {
      getCoins: {
        doc: 'destination in which the logger should be written, empty value will be considered as stdout',
        format: 'String',
        default: 'https://api.coingecko.com/api/v3/coins/markets',
        nullable: false,
        env: 'GET_COINS',
      },
      getCoinById: {
        doc: 'destination in which the logger should be written, empty value will be considered as stdout',
        format: 'String',
        default: 'https://api.coingecko.com/api/v3/coins/',
        nullable: false,
        env: 'GET_COIN_BY_ID',
      },
    },
    params: {
      currency: {
        doc: 'Currency parameters will be used in Coingecko queries',
        format: 'String',
        default: 'vs_currency=usd',
        nullable: false,
        env: 'CURRENCY',
      },
      localization: {
        doc: 'Include all localized languages in response (true/false) [default: true]',
        format: 'String',
        default: 'localization=false',
        nullable: false,
        env: 'LOCALIZATION',
      },
    },
  },
}
