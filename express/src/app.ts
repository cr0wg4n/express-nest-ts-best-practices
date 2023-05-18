import express from 'express'
import type { Application } from 'express'
import { AppDataSource } from './db'
import { User } from './models/User'
import { Comment } from './models/Comment';


const app: Application = express()
AppDataSource.initialize().then(async () => {
  // const user = new User()
  // user.name  = 'Mauricio Matias'
  // user.enabled = true

  // const user2 = new User()
  // user2.name = 'Bolivia'
  // user2.enabled = true

  // const comment = new Comment()
  // comment.content = 'Demo demo demo demo demo 131321'
  // comment.user = user


  // const comment3 = new Comment()
  // comment3.content = 'Sub comment 2'
  // comment3.user = user2
  // comment3.parent = comment
  

  // const comment2 = new Comment()
  // comment2.content = 'Sub comment 3'
  // comment2.user = user2
  // comment2.parent = comment

  // comment.children = [comment2, comment3]

  // await AppDataSource.manager.save(user)
  // await AppDataSource.manager.save(user2)
  // await AppDataSource.manager.save(comment)
  // await AppDataSource.manager.save(comment2)
  // await AppDataSource.manager.save(comment3)

  const commentRepository = AppDataSource.getRepository(Comment)

  const _comment = await commentRepository.findOne({
    where: {
      id: '10'
    },
    relations: {
      user: true,
      children: {
        user: true
      },
      parent: true
    }
  })

  console.log(_comment)
})

export default app