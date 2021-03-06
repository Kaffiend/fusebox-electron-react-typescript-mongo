import { ObjectId } from "bson";

export class User {
    _id: ObjectId;
    username: string;
    password: string;
    remember: boolean;

    constructor(username: string, password: string, remember: boolean = false) {
        this.username = username;
        this.password = password;
        this.remember = remember;
    }
}
