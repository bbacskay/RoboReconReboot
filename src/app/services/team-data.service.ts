import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../interfaces/team';


@Injectable({
  providedIn: 'root'
})
export class TeamDataService {

  public teams: Team[] = [];
  public loaded: boolean = false;

  constructor(public http: HttpClient) {
  }

  public load(): Promise<boolean> {
    this.loaded = false;
    
    this.http.get<Team[]>('http://scoutpi-dev.us.lan/api/team/read.php').subscribe(data => { 
      console.log(data);
      this.teams = data;
    });
/*
    // TODO
    this.teams = [
      {
        no: 3234,
        name: 'Team3234'
      },
      {
        no: 3235,
        name: 'Team3235'
      }
    ];

    // Add some test data
    for (let index = 2100; index < 2150; index++) {
      let nTeam = <Team>{};

      nTeam.no = index;
      nTeam.name = 'Team' + index;

      this.teams.push(nTeam);

    }
*/
    this.sortTeamsByNo();

    this.loaded = true;

    return Promise.resolve(true);

  }

  /**
   * Sort teams array by no
   */
  private sortTeamsByNo(): void {
    this.teams.sort((a, b) => (a.no > b.no) ? 1 : ((b.no > a.no) ? -1 : 0));
  }

  /**
   * Add a new team
   * 
   * @param team Team object to add
   */
  public addTeam(team: Team): void {
    console.log('Add team: ' + team.no + ' ' + team.name);

    let newTeam = <Team>{};
    newTeam = Object.assign({}, team);

    this.teams.push(newTeam);

    // Sort teams by number
    this.sortTeamsByNo();
  }

  /**
   * Adding or modifying a team
   * 
   * @param team Team object to add or update
   */
  public saveTeam(team: Team): void {
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
  public deleteTeam(team: Team): void {
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
