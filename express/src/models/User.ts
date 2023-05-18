import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Comment } from './Comment'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column({
    length: 200
  })
  name: string

  @Column({ 
    default: false 
  })
  enabled: boolean

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[]
}
