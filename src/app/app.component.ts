import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { ElectronService } from './shared/services/electron/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private readonly electronService: ElectronService,
    private readonly translate: TranslateService
  ) {
    this.translate.setDefaultLang('pt-BR');
    console.log('APP_CONFIG', APP_CONFIG);

    if (this.electronService.isElectron()) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }
}
