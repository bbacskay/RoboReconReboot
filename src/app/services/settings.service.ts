import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Settings } from '../interfaces/settings';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings = new BehaviorSubject(<Settings>{
    apiPath: 'http://scoutpi/api',
    scoutAlliance: 'blue',
    scoutPosition: 'left',
    darkMode: false,
    monitorRefreshTime: 30
  });

  constructor(private storage: Storage) {
   }

   load(): Promise<boolean> {
    return new Promise((resolve) => {
      this.storage.get('settings').then((settingsdata) => {
       if (settingsdata != null) {
         this.settings.next(settingsdata);
         console.log('Settings service loaded data');
       }
       resolve(true);
      })
    });
   }

  save(data:Settings): Promise<boolean> {
    return new Promise((resolve) => {
      if(data.monitorRefreshTime<=5){
        data.monitorRefreshTime=30;
      }
      this.storage.set('settings',data).then(() => {
        this.settings.next(data);
        resolve(true);
      })
      
    });
  }
}
