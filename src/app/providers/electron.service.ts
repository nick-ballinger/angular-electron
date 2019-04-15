import { Injectable } from '@angular/core';
import * as childProcess from 'child_process';
import { ipcRenderer, remote, webFrame } from 'electron';
import * as fs from 'fs';


@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  e: typeof Electron;
  childProcess: typeof childProcess;
  fs: typeof fs;

  constructor() {
    if (window && window.process && window.process.type) {
      Object.assign(this, {
        ipcRenderer: window.require('electron').ipcRenderer,
        webFrame: window.require('electron').webFrame,
        remote: window.require('electron').remote,
        e: window.require('electron'),
        childProcess: window.require('child_process'),
        fs: window.require('fs'),
      });
    }
  }
}
