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
    scoutPosition: 'left'
  });

  constructor(private storage: Storage) {
   }

   load() {
     this.storage.get('settings').then((settingsdata) => {
       if (settingsdata != null) {
         this.settings.next(settingsdata);
         console.log('Settings service loaded data');
       }
     })
   }

  save(data:Settings): void {
    this.storage.set('settings',data).then(() => {
      this.settings.next(data);
    }

    );
  }
}
