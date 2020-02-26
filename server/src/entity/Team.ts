import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, OneToOne, JoinColumn, BaseEntity} from "typeorm";
import { Channel } from "./Channel";
import { User } from "./User";
import { ObjectType, Field, Int } from "type-graphql";

@Entity()
@ObjectType()
export class Team  extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => Int!)
    id: number;

    @Field(type => User!)
    @OneToOne(type => User)
    @JoinColumn({
        name:'owner'
    })
    user: User;

    @Field(type => String!)
    @Column()
    name: string;

    @Field(type => [Channel!]!)
    @OneToMany(type => Channel, channel=> channel.team) 
    channels: Channel[]

    @Field(type =>[User!]!)
    @ManyToMany(type => User, user=>user.teams)
    @JoinTable( {
        name:"member",
        joinColumn: {
            name: "team_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        }
    })
    users : User[];

}
