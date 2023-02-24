
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public user_name: string;

  @Column({ type: 'varchar', length: 120 })
  public user_email: string;

  @Column({ type: 'varchar', length: 120 })
  public token: string;
}