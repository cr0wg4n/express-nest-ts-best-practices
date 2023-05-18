import { createLogger, format, transports } from 'winston'

export default createLogger({
  level: 'info',
  format: format.json(),
  defaultMeta: {
    service: 'app'
  },
  transports: [
    new transports.File({
      filename: 'error.log',
      level: 'error'
    }),
    new transports.File({
      filename: 'combined.log'
    })
  ]
})
