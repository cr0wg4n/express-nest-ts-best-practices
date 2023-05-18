import app from './app'
import config from './config/config'
import logger from './utils/logger'

const { app: { port } } = config

app.listen(port, () => {
  logger.info(`Starting at ${port}`)
})


