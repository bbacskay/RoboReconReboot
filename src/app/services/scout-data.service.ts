import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from './settings.service';
import { Scout } from '../interfaces/scout';

@Injectable({
  providedIn: 'root'
})
export class ScoutDataService {

  public scouts: BehaviorSubject<Scout[]> = new BehaviorSubject<Scout[]>([]);

  constructor(private appSettings: SettingsService, private http: HttpClient) { 
    
  }

  /**
   * Load user list
   */
  public load() {

    this.http.get<Scout[]>(this.appSettings.settings.value.apiPath + '/scout/read.php').subscribe(
      (data) => {
        console.log(data);
        this.scouts.next(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Get scout list completed");
      }
    );
  }


  public add(scout: Scout) {
    this.http.post(this.appSettings.settings.value.apiPath + '/scout/create.php', {
      loginname: scout.loginname,
      firstname: scout.firstname,
      lastname: scout.lastname,
      password: scout.password,
      mentor: scout.mentor
    }
    ).subscribe((result) => {
      console.log(result);
      this.load();
    });

    
  }

  public update(pScout: Scout) {
    this.http.post(this.appSettings.settings.value.apiPath + '/scout/update.php', {
      scout_id: pScout.scout_id,
      loginname: pScout.loginname,
      firstname: pScout.firstname,
      lastname: pScout.lastname,
      mentor: pScout.mentor,
      password: pScout.password
    }
    ).subscribe((result) => {
      console.log(result);
      this.load();
    });

  }

  public delete(scoutId: number) {
    this.http.post(this.appSettings.settings.value.apiPath + '/scout/delete.php', {
      scout_id: scoutId
    }
    ).subscribe((result) => {
      console.log(result);
      this.load();
    });
  }

}
