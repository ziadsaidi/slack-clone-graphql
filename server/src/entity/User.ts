import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, JoinColumn, BaseEntity} from "typeorm";
import { Message } from "./Message";
import { Team } from "./Team";
import { Channel } from "./Channel";
import { ObjectType, Field, Int } from "type-graphql";

@Entity()
@ObjectType()
export class User extends BaseEntity {

    @Field(type => Int!)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(type => String!)
    @Column()
    username: string;

    @Field(type => String!)
    @Column({
        unique:true
    })
    email: string;

    @Column()
    password: string

    @Field(type => [Message!]!)
    @OneToMany(type => Message, message => message.user)
    @JoinColumn({name:"user_id"})
    messages: Message[]

  

    @Field(type =>[Channel!]!)
    @ManyToMany(type => Channel, channel=>channel.users)
    @JoinTable({
        name:"channel_members",
        joinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "channel_id",
            referencedColumnName: "id"
        }
    })
    channels: Channel[];

    @Field(type => [Team!]!)
    @ManyToMany(type => Team, team=>team.users)
    @JoinTable({
        name:"member",
        joinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "team_id",
            referencedColumnName: "id"
        }
    })
    teams: Team[];

}
