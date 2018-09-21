import { MongoClient } from 'mongodb';
import { User } from './models/User';
import { UserRepository } from './repositories/UserRepository';

const url = 'mongodb://localhost:27017';
const dbName = 'reactiveOwnership';

export class Mongo {

    public async connect() {
        try {
            const connection = await MongoClient.connect(url);
            const db = connection.db(dbName);

            const usr = new User('ian', 'password', false);
            const repo = new UserRepository(db, 'users');

            const result = await repo.create(usr);
            console.log(`Insert result ${result}`);
            const count = await repo.userCount();

            console.log(`Total Users: ${count}`);
        } catch (err) {
            console.log(err);
        }
    }
};
