import { BaseRepository } from "./BaseRepository";
import { User } from "../models/User";
import { injectable } from "inversify";
import 'reflect-metadata';

export interface IUserRepository {
    userCount(): Promise<number>;
    login(user: User): Promise<boolean>;
}

@injectable()
export  class UserRepository extends BaseRepository<User> {
    
    userCount(): Promise<number> {
        return this._collection.count({});
    }

    async login(user: User): Promise<boolean> {
        const usr = await this._collection.findOne<User>(user)
        if (usr.password === user.password)
        {
            return true;
        } else {
            return false;
        }
    }
   
}