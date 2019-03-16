import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: Config = {
    ownTeam: 3489,
    selectedEvent: 1
  }

  constructor(private http: HttpClient) {
  }

  load() {

  }

  save(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }

}
