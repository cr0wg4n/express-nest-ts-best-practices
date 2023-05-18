import { Reaction } from './Reaction';
import { 
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  content: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @ManyToOne(() => Comment, { onDelete: 'CASCADE' })
  parent: Comment

  @OneToMany(() => Comment, child => child.parent)
  children: Comment[]

  @ManyToOne(() => User, (user)=>user.comments)
  user: User

  @OneToMany(() => Reaction, reaction => reaction.comment)
  reactions: Reaction[]
}
