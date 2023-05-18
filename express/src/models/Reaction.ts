import { Comment } from './Comment';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reaction {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  type: string

  @ManyToOne(() => Comment, comment => comment.reactions)
  comment: Comment
}
