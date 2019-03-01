import { Component, OnInit } from '@angular/core';
import { Team } from '../../../interfaces/team';
import { TeamDataService } from '../../../services/team-data.service';

@Component({
  selector: 'app-teammanager',
  templateUrl: './teammanager.page.html',
  styleUrls: ['./teammanager.page.scss'],
})
export class TeammanagerPage implements OnInit {

  public inTeam: Team;
  public teams: Team[] = [];

  constructor(public teamDataService:TeamDataService) { 
    this.inTeam = {
      number: 0,
      ba_team_key: '',
      name: '',
      comment: ''
    }
  }

  ngOnInit() {
    //this.inTeam = this.teamDataService.teams[0];
    this.teamDataService.teams.subscribe(data => {
      this.teams = data;
    });

  }

  ionViewWillEnter() {
    this.teamDataService.load();
  }

  public deleteTeam(team:Team){
    this.teamDataService.deleteTeam(team);
  }

  public editTeam(team:Team){
    this.inTeam.number = team.number;
    this.inTeam.ba_team_key = team.ba_team_key;
    this.inTeam.name = team.name;
    this.inTeam.comment = team.comment;
  }

  public saveTeam(){
    console.log('add button is pressed');
    this.teamDataService.saveTeam(this.inTeam);
  }

}
