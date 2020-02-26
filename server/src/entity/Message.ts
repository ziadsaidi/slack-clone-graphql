import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, FileLogger, BaseEntity} from "typeorm";
import { User } from "./User";
import { Channel } from "./Channel";
import { ObjectType, Field, Int } from "type-graphql";

@Entity()
@ObjectType()
export class Message extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int!)
    id: number;

    
    @Field(type => String!)
    @Column()
    text: string;

    @Field(type => User!)
    @ManyToOne(type => User, user => user.messages)
    @JoinColumn({name:"user_id"})
    user: User;

    @Field(type => Channel!)
    @ManyToOne(type => Channel, channel=> channel.messages)
    @JoinColumn({name:"channel_id"})
    channel: Channel;

}
