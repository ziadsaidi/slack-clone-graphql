
import {Resolver, Query, Arg, Mutation} from 'type-graphql';
import { BaseEntity } from 'typeorm';
import { Channel } from '../entity/Channel';
import { Message } from '../entity/Message';

@Resolver()
export class MessageResolver extends BaseEntity{

    @Mutation(()=>Boolean!)
    async  createMessage(
        @Arg('channelId') channelId:number,
        @Arg('text') text:string):Promise<boolean>
    {
    try{
        const channel = await Channel.findOne(channelId);
        const message = new Message();
        message.text = text;
        message.channel = channel;
        await message.save();
        return true;
    }

    catch(e){
        return false;
    }
       
    }


}