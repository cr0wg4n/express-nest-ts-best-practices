import { Comment } from './Comment';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


export enum ReactionType {
  LIKE='LIKE',
  LOVE='LOVE',
  CARE='CARE',
  HAHA='HAHA',
  WOW='WOW',
  SAD='SAD',
  ANGRY='ANGRY',
  NOTHING='NOTHING'
}


@Entity()
export class Reaction {
  @PrimaryGeneratedColumn()
  id: string

  @Column({
    type: 'enum',
    enum: ReactionType,
  })
  type: string

  @ManyToOne(() => Comment, comment => comment.reactions)
  comment: Comment
}
