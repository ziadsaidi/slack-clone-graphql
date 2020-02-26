
import {Resolver, Query} from 'type-graphql';
import { BaseEntity } from 'typeorm';


import { verify } from 'jsonwebtoken';


@Resolver()
export class BaseResolver extends BaseEntity{

    @Query(()=> String)
    hi(){
        return "hi!";
    }

}