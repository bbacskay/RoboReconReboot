import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from './settings.service';
import { Scout } from '../interfaces/scout';

@Injectable({
  providedIn: 'root'
})
export class ScoutDataService {

  private tempScouts: Scout[];

  public scouts: BehaviorSubject<Scout[]> = new BehaviorSubject<Scout[]>([]);

  constructor(private appSettings: SettingsService, private http: HttpClient) { 
    

    this.tempScouts = [
      { scout_id: 1,
        loginname: 'balu',
        password: 'pwd',
        firstname: 'Balazs',
        lastname: 'Bacskay',
        mentor: true
      },
      { scout_id: 2,
        loginname: 'david',
        password: 'pwd',
        firstname: 'David',
        lastname: 'Castro',
        mentor: true
      },
      { scout_id: 3,
        loginname: 'jared',
        password: 'pwd',
        firstname: 'Jared',
        lastname: 'Andraszek',
        mentor: false
      }
    ];
  }

  /**
   * Load user list
   */
  public load() {

    this.scouts.next(this.tempScouts);

  }


  public add(scout: Scout) {
    var tmpScout: Scout;

    tmpScout = scout;
    tmpScout.scout_id = this.tempScouts.length + 1;

    this.tempScouts.push(tmpScout);

    this.scouts.next(this.tempScouts);
  }

  public update(pScout: Scout) {
    var itemIdx = this.tempScouts.findIndex(scout => scout.scout_id == pScout.scout_id);

    this.tempScouts[itemIdx] = pScout;

    this.load();

  }

  public delete(scoutId: number) {
    
    var itemIdx = this.tempScouts.findIndex(scout => scout.scout_id == scoutId);
    console.log(this.tempScouts);
    console.log('Delete itemIdx: ' + itemIdx);

    this.tempScouts.splice(itemIdx,1);

    console.log('Delete scout: ' + scoutId);

    this.load();

  }

}
