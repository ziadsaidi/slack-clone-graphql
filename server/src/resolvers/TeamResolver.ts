
import {Resolver, Query, Arg, Mutation} from 'type-graphql';
import { BaseEntity } from 'typeorm';

import { Team } from '../entity/Team';
import { User } from '../entity/User';


@Resolver()
export class TeamResolver extends BaseEntity{

    @Mutation(()=>Boolean!)
    async  createTeam(
        @Arg('owner') id :number,
        @Arg('name') name:string):Promise<boolean>
    {
        //find user 
        const user = await User.findOne(id);
        const team = new Team();
        team.name= name;
        team.user= user;
        try{

            await team.save();
            return true;
        }
        catch(e){
            return false;
        }
       
    }


}