import { Injectable } from '@angular/core';
import { Team } from '../interfaces/team';
import { loadavg } from 'os';


@Injectable({
  providedIn: 'root'
})
export class TeamDataService {

  public teams: Team[] = [];
  public loaded: boolean = false;

  constructor() {
    this.load();
  }

  public load() {
    // TODO
    this.teams = [
      {
        no: 1234,
        name: 'Team1234'
      }
    ];

    this.loaded = true;
  }

  public addTeam(team:Team): void {
    console.log('Add team: ' + team.no + ' ' + team.name);

    let newTeam = <Team>{};
    newTeam = Object.assign({}, team);

    this.teams.push(newTeam);
  }

  public deleteTeam(team:Team) : void {

  }

}
