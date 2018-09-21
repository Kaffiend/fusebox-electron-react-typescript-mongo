import { Container } from 'inversify';
import TYPES from './types';

import { UserRepository } from './mongo/repositories/UserRepository';
import { UserService } from './mongo/services/UserService';
import { RegisterableController } from './mongo/controllers/RegisterableController';
import { UserController } from './mongo/controllers/UserController';


const container = new Container();
container.bind<RegisterableController>(TYPES.Controller).to(UserController);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<UserService>(TYPES.UserService).to(UserService);

export default container;