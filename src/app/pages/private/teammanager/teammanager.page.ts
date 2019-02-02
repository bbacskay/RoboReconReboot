import { Component, OnInit } from '@angular/core';
import { Team } from '../../../interfaces/team';
import { TeamDataService } from '../../../services/team-data.service';

@Component({
  selector: 'app-teammanager',
  templateUrl: './teammanager.page.html',
  styleUrls: ['./teammanager.page.scss'],
})
export class TeammanagerPage implements OnInit {

  private inTeam: Team;
  private teams: Team[] = [];

  constructor(public teamDataService:TeamDataService) { 
    this.inTeam = {
      no: 0,
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

  public deleteTeam(team:Team){
    this.teamDataService.deleteTeam(team);
  }

  public editTeam(team:Team){
    this.inTeam.no = team.no;
    this.inTeam.name = team.name;
    this.inTeam.comment = team.comment;
  }

  public saveTeam(){
    console.log('add button is pressed');
    this.teamDataService.saveTeam(this.inTeam);
  }

}
