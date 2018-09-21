import { BaseRepository } from "./BaseRepository";
import { User } from "../models/User";

export class UserRepository extends BaseRepository<User> {
    
    userCount(): Promise<number> {
        return this._collection.count({});
    }
   
}