import { IpcMain } from 'electron';

export interface RegisterableController {
    register(ipcMain: IpcMain): void
}