import "reflect-metadata";
import {createConnection} from "typeorm";
import  express from 'express';
import {ApolloServer, chainResolvers} from 'apollo-server-express';
import  bodyParser  from "body-parser";

import {buildSchema} from'type-graphql';
import {config} from "dotenv";
import cors from 'cors';

//import graphql resolvers
import {BaseResolver} from'./resolvers/BaseResolver';
import {UserResolver}  from'./resolvers/UserResolver';
import {TeamResolver} from './resolvers/TeamResolver';
import {ChannelResolver} from'./resolvers/ChannelResolver';
import {MessageResolver} from'./resolvers/MessageResolver';
const result = config()
 
if (result.error) {
  throw result.error
}



//create our  postgres connection
(async ()=>{
   //initialize our database Connection
   await createConnection();
   
   //initialize express server 
   const app = express();
   //middlewars
   app.use(cors({
   credentials:true,
   origin:'http://localhost:3000'
    }))
   app.use(bodyParser.json());


   const apolloServer = new ApolloServer({
      schema: await buildSchema({
          resolvers:[BaseResolver,UserResolver,TeamResolver,ChannelResolver,MessageResolver],
      }),
      context: ({req,res})=>{
       return {
           req,
           res
       }
      

      }
   })

   apolloServer.applyMiddleware({app,cors:false})

   app.listen(4000,()=>{
       console.log('Listning At Port 4000 ...');
   })


})();





