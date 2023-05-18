import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Comment } from './models/Comment'
import { User } from './models/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [Comment, User],
  subscribers: [],
  migrations: []
})
