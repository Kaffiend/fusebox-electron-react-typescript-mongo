import { RegisterableController } from './RegisterableController';
import { UserChannels, UserEvents } from '../constants/users';
import { IpcMain, Event } from 'electron';
import { User } from '../models/User';
import { injectable } from 'inversify';
import 'reflect-metadata';


@injectable()
export class UserController implements RegisterableController {
    private ipc: IpcMain;

    register(ipcMain: Electron.IpcMain): void {
        this.ipc = ipcMain;
        // Handler for Login Attempt
        this.ipc.on(
            `${UserChannels.LOGIN_CHANNEL}${UserEvents.LOGIN_ATTEMPT}`,
            async (event, arg) => {
                await this.handLoginAttempt(arg as User, event);
            }
        );

        // Handler for Logout.

    }

    async handLoginAttempt(user: User, event: Event) {
        //const result = await this.userService.login(user);

        //send response
        //if (result === true) {
        await event.sender.send(`${UserChannels.LOGIN_CHANNEL}${UserEvents.LOGIN_SUCCESS}`, {
            success: true
        });
    }
}
