import { Injectable } from '@angular/core';
import * as childProcess from 'child_process';
import { ipcRenderer, webFrame } from 'electron';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  readonly ipcRenderer: typeof ipcRenderer | undefined;
  readonly webFrame: typeof webFrame | undefined;
  readonly childProcess: typeof childProcess | undefined;
  readonly fs: typeof fs | undefined;

  constructor() {
    if (this.isElectron()) {
      const electron = window.require('electron');
      this.ipcRenderer = electron.ipcRenderer;
      this.webFrame = electron.webFrame;
      this.fs = window.require('fs');
      this.childProcess = window.require('child_process');
      this.childProcess?.exec(
        'node -v',
        (error: Error | null, stdout: string, stderr: string) => {
          if (error) {
            console.error(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout:\n${stdout}`);
        }
      );
    }
  }

  isElectron(): boolean {
    return !!window?.process?.type;
  }
}
