// This is the main process entry point. It is the
// first file that is run on startup.
//
// It is responsible for launching a renderer window.
import { app } from 'electron';
import { createMainWindow } from './main-window';
import * as log from 'electron-log';
import * as isDev from 'electron-is-dev';
import { createUpdater } from './lib/updater';
import { createMenu } from './menu';
import installExtension, {
    MOBX_DEVTOOLS
} from 'electron-devtools-installer';

// set proper logging level
log.transports.file.level = isDev ? false : 'info';
log.transports.console.level = isDev ? 'debug' : false;

let window: Electron.BrowserWindow;

// usually we'd just use __dirname here, however, the FuseBox
// bundler rewrites that, so we have to get it from Electron.
const appPath = './out';

// fires when Electron is ready to start
app.on('ready', () => {
    installExtension(MOBX_DEVTOOLS)
        .then((name: string) => console.log(`Added Extension:  ${name}`))
        .catch((err: Error) => console.log('An error occurred: ', err));
    window = createMainWindow(appPath);
    createMenu(window);
});

// fires when all windows are closed
app.on('window-all-closed', app.quit);

// setup the auto-updater
createUpdater(app);
