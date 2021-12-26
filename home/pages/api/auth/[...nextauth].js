import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../helpers/mongodb";
import dbConnect from "../../../helpers/dbConnect";
import Users from "../../../models/Users";
import CryptoJS from "crypto-js";
// import jwt from "jsonwebtoken";
//Todo update user access token
export const options={
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        await dbConnect();
        try {
          const user = await Users.findOne({ userName: req.body.userName });
          if (user == null) {
            return null;
          } else {
            const bytes = CryptoJS.AES.decrypt(
              user.password,
              process.env.SECRET_KEY
            );
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            if(originalPassword !== req.body.password){
              return null;
            }else{
              const { password, ...info } = user._doc;
            return {...info}
            }
          }
        } catch (error) {
          return null
        }
      }
    })
  ],
  secret: process.env.SECRET,
  session:{jwt: true},
  callbacks: {
    async jwt({token, user}){
      if(user){
        token.user = user;
      }
      return Promise.resolve(token);
    },
    async session({session, token}) {
      session.user = token.user;
      return Promise.resolve(session);
    }
  }
}
export default (req, res) => NextAuth(req, res, options);
