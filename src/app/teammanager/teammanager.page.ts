import { Component, OnInit } from '@angular/core';
import { Team } from '../interfaces/team';
import { TeamDataService } from '../services/team-data.service';

@Component({
  selector: 'app-teammanager',
  templateUrl: './teammanager.page.html',
  styleUrls: ['./teammanager.page.scss'],
})
export class TeammanagerPage implements OnInit {

  private inTeam: Team;

  constructor(public teamDataService:TeamDataService) { 
    this.inTeam = {
      no: 0,
      name: ''
    }
  }

  ngOnInit() {
    //this.inTeam = this.teamDataService.teams[0];
  }

  public deleteTeam(team:Team){
    this.teamDataService.deleteTeam(team);
  }

  public editTeam(team:Team){
    this.inTeam.no = team.no;
    this.inTeam.name = team.name;
  }

  public saveTeam(){
    this.teamDataService.saveTeam(this.inTeam);
  }

}
