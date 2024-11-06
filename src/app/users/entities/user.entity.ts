import { Entity, Column } from 'typeorm';
import { BaseModel } from '@root/app/core/entities/base.entity';

@Entity()
export class User extends BaseModel {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
