import { injectable, inject } from 'inversify';
import { IUserRepository } from '../repositories/UserRepository';
import TYPES from '../../types';
import 'reflect-metadata';
import { User } from '../models/User';

export interface IUserService {
    login(user: User): Promise<boolean>;
}

@injectable()
export class UserService {
    private _userRepository: IUserRepository;

    constructor(
        @inject(TYPES.UserRepository) userRepository
        ) {
        this._userRepository = userRepository;
    }

    async login(user: User): Promise<boolean> {
        return await this._userRepository.login(user);
    }
}
