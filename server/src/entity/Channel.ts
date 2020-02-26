import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany, ManyToOne, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import { Team } from "./Team";
import { Message } from "./Message";
import { User } from "./User";
import { ObjectType, Field, Int } from "type-graphql";

@Entity()
@ObjectType()
export class Channel  extends BaseEntity{

    @PrimaryGeneratedColumn()
    @Field(type => Int!)
    id: number;

    @Field(type => String!)
    @Column()
    name: string;

    @Field(type => Boolean!)
    @Column()
    public: boolean;


    @Field(type => [User!]!)
    @ManyToMany(type => User, user=> user.channels)
    @JoinTable({
        name:"channel_members",
        joinColumn: {
            name: "channel_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        }
    })
    users: User[];

    @Field(type => [Message!]!)
    @OneToMany(type => Message, message => message.channel)
    messages: Message[]

    @Field(type => Team!)
    @ManyToOne(type => Team, team => team.channels)
    @JoinColumn({name:"team_id"})
    team:Team


}


