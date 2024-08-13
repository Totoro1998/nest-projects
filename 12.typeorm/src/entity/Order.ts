import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  product: string;
  @Column()
  amount: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  // 第二个参数标识对方怎么关联自己的
  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
