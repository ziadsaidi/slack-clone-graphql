
import {Resolver, Query, Arg, Mutation} from 'type-graphql';
import { BaseEntity } from 'typeorm';
import { Channel } from '../entity/Channel';
import { Team } from '../entity/Team';




@Resolver()
export class ChannelResolver extends BaseEntity{

    @Mutation(()=>Boolean!)
    async  createChannel(
        @Arg('teamId') teamId:number,
        @Arg('public') isPublic:boolean,
        @Arg('name') name:string):Promise<boolean>
    {
    try{
        const channel = new Channel();
        const team = await Team.findOne(teamId);
        channel.name=name;
        channel.public =isPublic;
        channel.team=team;
        await channel.save();
        return true;

    }

    catch(e){
        return false;
    }
       
    }


}