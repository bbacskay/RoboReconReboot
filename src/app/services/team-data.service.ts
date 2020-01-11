import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../interfaces/team';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class TeamDataService {

  //private apiPath: string = "http://scoutpi-dev/api";

  teams = new BehaviorSubject([]);

  constructor(public http: HttpClient, private appSettings: SettingsService) {
  }

  public load() {

    var tmpTeams: Team[] = [];

    this.http.get<Team[]>(this.appSettings.settings.value.apiPath + '/team/read.php').subscribe(
      (data) => {
        //console.log(data);
        this.teams.next(data);
      },
      (err) => {
        this.teams.next([]);
        console.log(err);
      },
      () => {
        console.log("Get team list completed");
      }
    );
  }

  /**
   * Sort teams array by no
   */
  private sortTeamsByNo(): void {
    //this.teams.sort((a, b) => (a.no > b.no) ? 1 : ((b.no > a.no) ? -1 : 0));
  }

  /**
   * Add a new team
   * 
   * @param team Team object to add
   */
  public addTeam(team: Team): void {
    console.log('Add team: ' + team.number + ' ' + team.name);

    //let newTeam = <Team>{};
    //newTeam = Object.assign({}, team);

    //this.teams.push(newTeam);

    // Sort teams by number
    //this.sortTeamsByNo();

    this.http.post(this.appSettings.settings.value.apiPath + '/team/create.php', {
      no: team.number,
      ba_team_key: team.ba_team_key,
      name: team.name,
      comment: team.comment
    }
    ).subscribe((result) => {
      console.log(result);
      this.load();
    });

  }

  /**
   * Adding or modifying a team
   * 
   * @param team Team object to add or update
   */
  public saveTeam(team: Team): void {
    // Try to find the team based on the team number in the array
    var actTeam = this.teams.value.find(currentTeam => currentTeam.no === team.number);

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
    console.log('Delete team: ' + team.number + ' ' + team.name);

    /*
    // Look for the team in the array, function returnd -1 if NOT found
    let actTeam = this.teams.indexOf(team);

    // If team was found, delete it
    if (actTeam > -1) {
      this.teams.splice(actTeam, 1);
      console.log('Deleted.');
    }
*/

    this.http.post(this.appSettings.settings.value.apiPath + '/team/delete.php', {
      no: team.number
    }
    ).subscribe((result) => {
      console.log(result);
      this.load();
    });


  }



}
