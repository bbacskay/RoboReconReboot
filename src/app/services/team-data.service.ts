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
  }

  public load(): Promise<boolean> {
    // TODO
    this.teams = [
      {
        no: 1234,
        name: 'Team1234'
      },
      {
        no: 1235,
        name: 'Team1235'
      }
    ];

    // Add some test data
    for (let index = 2100; index < 2150; index++) {
      let nTeam = <Team>{};

      nTeam.no = index;
      nTeam.name = 'Team' + index;

      this.teams.push(nTeam);
      
    }

    this.loaded = true;

    return Promise.resolve(true);

  }

  /**
   * Add a new team
   * 
   * @param team Team object to add
   */
  public addTeam(team:Team): void {
    console.log('Add team: ' + team.no + ' ' + team.name);

    let newTeam = <Team>{};
    newTeam = Object.assign({}, team);

    this.teams.push(newTeam);
  }

  /**
   * Adding or modifying a team
   * 
   * @param team Team object to add or update
   */
  public saveTeam(team:Team) : void {
    // Try to find the team based on the team number in the array
    var actTeam = this.teams.find(currentTeam => currentTeam.no === team.no);

    // result is undefined if the team number doesn't exists in the array
    if (actTeam != undefined) {
      // modify team name
      actTeam.name = team.name;
    } else {
      // add as a new team
      this.addTeam(team);
    }
  }

  /**
   * Deleting a team
   * 
   * @param team  Team object to delete
   */
  public deleteTeam(team:Team) : void {
    console.log('Delete team: ' + team.no + ' ' + team.name);

    // Look for the team in the array, function returnd -1 if NOT found
    let actTeam = this.teams.indexOf(team);

    // If team was found, delete it
    if (actTeam > -1) {
      this.teams.splice(actTeam, 1);
      console.log('Deleted.');
    }

  }



}
