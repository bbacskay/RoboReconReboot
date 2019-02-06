import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from './settings.service';
import { Scout } from '../interfaces/scout';

@Injectable({
  providedIn: 'root'
})
export class ScoutDataService {

  constructor(private appSettings: SettingsService, private http: HttpClient) { 
    
  }
}
