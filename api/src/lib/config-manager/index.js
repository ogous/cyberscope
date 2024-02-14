import convict from 'convict'

let configManager

export function initializeAndValidate(schema) {
  configManager = convict(schema)
  configManager.validate()
}

export function getValue(keyName) {
  if (configManager === undefined) {
    throw new Error('Configuration has not been initialized yet')
  }

  return configManager.get(keyName)
}
