import { join } from "path"
import { format } from "url"
const env = process.env.NODE_ENV || 'production';
const dev = env === 'development';


export function loadURL(
  window: Electron.BrowserWindow,
  appPath: string
) {
  // if (dev) {
  //   window.loadURL('http://localhost:4445')
  // } else {
    window.loadURL(
      format({
        pathname: join(appPath, "./index.html"),
        protocol: "file:",
        slashes: true,
      }),
    )
  }