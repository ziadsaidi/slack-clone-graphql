
import {Resolver, Query, Arg, Mutation} from 'type-graphql';
import { BaseEntity } from 'typeorm';
import {hash} from 'bcryptjs';
import { User } from '../entity/User';


@Resolver()
export class UserResolver extends BaseEntity{

   @Query(()=> User!)
   async getUser(@Arg('id')userId:number): Promise<User>{
      return User.findOne(userId);
   }

   @Query(()=> [User])
   async getAllUsers():Promise<User[]>{
       return User.find();
   }


   @Mutation(()=> User)
   async register(
       @Arg('username') username:string,
       @Arg("email") email:string,
       @Arg('password') password:string
   ):Promise<User>
   {
    
    const user = new User();
    user.email = email;
    //encrypt the password using bcrypt js
    const hashedPassword = await hash(password,12);
    user.password = hashedPassword;
    user.username = username;
    try{
        const me = await user.save();
        return me;

    }
    catch(e){
        throw e;
    }
   }



}