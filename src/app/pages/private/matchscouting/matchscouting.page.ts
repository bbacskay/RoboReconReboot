import { Component, OnInit } from '@angular/core';
import { QuestionItem, QuestionOptionItem, ScoutingData, ResponseData, PrevNoteItem, MatchListItem } from '../../../interfaces/match';
import { Team } from '../../../interfaces/team';
import { Scout } from '../../../interfaces/scout';
import { ScoutDataService } from '../../../services/scout-data.service';
import { TeamDataService } from '../../../services/team-data.service';
import { MatchscoutingDataService } from '../../../services/matchscouting-data.service';
import { MatchDataService } from '../../../services/match-data.service';
import { ConfigService } from '../../../services/config.service';
import { AlertService } from '../../../services/alert.service';


@Component({
  selector: 'app-matchscouting',
  templateUrl: './matchscouting.page.html',
  styleUrls: ['./matchscouting.page.scss'],
})
export class MatchscoutingPage implements OnInit {

  public selectedMatch: number = 0;
  public MatchNum: number = 1;
  public MatchId: number = 0;
  public TeamNum: number = 0;
  public actScoutId: number = 0;
  public actScoutName: string = '';

  public matchesArr: MatchListItem[] = [];

  public scouts: Scout[] = [];
  public teams: Team[] = [];
  public matchTeamsList: number[] = [];

  public matchNote: string = '';

  public previousMatchNotes: PrevNoteItem[] = [];

  public scoutingDataId: number = 0;

  public displayQuestions: boolean = false;

  questions: {
    Autonomous: QuestionItem[],
    Teleop: QuestionItem[],
    EndGame: QuestionItem[]
  } = {

      Autonomous: [
        {
          id: 'SQ1',
          questionText: 'What level did they start from?',
          questionType: 2,
          questionItems: [{
            value: 1,
            itemText: 'level 1',
          },
          {
            value: 2,
            itemText: 'level 2'
          }
          ],
          answer: 0
        },
        {
          id: 'SQ2',
          questionText: 'What game piece did they start with?',
          questionType: 2,
          questionItems: [{
            value: 0,
            itemText: 'None'
          },
          {
            value: 1,
            itemText: 'Hatch'
          },
          {
            value: 2,
            itemText: 'Cargo'
          }
          ],
          answer: 0
        },
        {
          id: 'SQ3',
          questionText: 'How many hatches were placed?',
          questionType: 1,
          questionItems: [],
          answer: 0,
        },
        {
          id: 'SQ4',
          questionText: 'What level did they place the hatch?',
          questionType: 2,
          questionItems: [{
            value: 0,
            itemText: 'Did not place any hatch.'
          },
          {
            value: 1,
            itemText: 'Cargo Ship'
          },
          {
            value: 2,
            itemText: 'Rocket Ship LV1'
          },
          {
            value: 3,
            itemText: 'Rocket Ship LV2'
          },
          {
            value: 4,
            itemText: 'Rocket Ship LV3'
          }
          ],
          answer: 0
        },
        {
          id: 'SQ5',
          questionText: 'How much Cargo was placed?',
          questionType: 1,
          questionItems: [],
          answer: 0
        },
        {
          id: 'SQ6',
          questionText: 'What level did they place the cargo?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'Did not place cargo'
            },
            {
              value: 1,
              itemText: 'Cargo Ship'
            },
            {
              value: 2,
              itemText: 'Rocket Ship LV1'
            },
            {
              value: 3,
              itemText: 'Rocket Ship LV2'
            },
            {
              value: 4,
              itemText: 'Rocket Ship LV3'
            }
          ],
          answer: 0
        }
      ],

      Teleop: [{
        id: 'TQ1',
        questionText: 'How many hatches were placed?',
        questionType: 1,
        questionItems: [],
        answer: 0
      },
      {
        id: 'TQ2',
        questionText: 'What was the highest level they achieved?',
        questionType: 2,
        questionItems: [
          {
            value: 0,
            itemText: 'None'
          },
          {
          value: 1,
          itemText: 'Cargo ship'
        },
        {
          value: 2,
          itemText: 'Rocket ship LV1'
        },
        {
          value: 3,
          itemText: 'Rocket ship LV2'
        },
        {
          value: 4,
          itemText: 'Rocket ship LV3'
        }
        ],
        answer: 0
      },
      {
        id: 'TQ3',
        questionText: 'How much cargo was placed?',
        questionType: 1,
        questionItems: [],
        answer: 0
      },
      {
        id: 'TQ4',
        questionText: 'How do they pickup hatches?',
        questionType: 2,
        questionItems: [
          {
            value: 0,
            itemText: 'No pickup'
          },
          {
            value: 1,
            itemText: 'The Floor'
          },
          {
            value: 2,
            itemText: 'Feeder'
          },
          {
            value: 3,
            itemText: 'Both'
          }
        ],
        answer: 0
      },
      {
        id: 'TQ5',
        questionText: 'Cycle time',
        questionType: 2,
        questionItems: [{
          value: 1,
          itemText: '<10s'
        },
        {
          value: 2,
          itemText: '10-20s'
        },
        {
          value: 3,
          itemText: '>20s'
        }
        ],
        answer: 0
      }
      ],

      EndGame: [
        {
          id: 'EQ1',
          questionText: 'What level did they achieve?',
          questionType: 2,
          questionItems: [{
            value: 0,
            itemText: 'No attempt'
          },
          {
            value: 1,
            itemText: 'LV1'
          },
          {
            value: 2,
            itemText: 'LV2'
          },
          {
            value: 3,
            itemText: 'LV3'
          }
          ],
          answer: 0
        },
        {
          id: 'EQ2',
          questionText: 'How long did they take?',
          questionType: 2,
          questionItems: [{
            value: 1,
            itemText: '0s'
          },
          {
            value: 2,
            itemText: '<5s'
          },
          {
            value: 3,
            itemText: '5-15s'
          },
          {
            value: 4,
            itemText: '>15s'
          }
          ],
          answer: 0
        }/*,
    {
      id: 'EQ3',
      questionText: 'Did another team assist them?',
      questionType: 2,
      questionItems: [{
        value: 1,
        itemText: 'Yes'
      },
      {
        value: 2,
        itemText: 'No'
      }
      ],
      answer: ''
    }*/
      ]
    }



  constructor(
    public scoutData: ScoutDataService,
    private teamDataService: TeamDataService,
    private scoutingData: MatchscoutingDataService,
    private matchData: MatchDataService,
    private configService: ConfigService,
    private alertService: AlertService
  ) {
    this.teamDataService.teams.subscribe((data) => {
      this.teams = data;
    });

    this.scoutData.scouts.subscribe((data) => {
      this.scouts = data;
    });

    this.scoutingData.prevComments.subscribe((data) => {
      this.previousMatchNotes = data;
    });

    this.matchData.matches.subscribe((data) => {
      this.matchesArr = data;
      console.log("matches loaded");
      //console.log(this.matchesArr);
      //this.selectedMatch = 0;
      this.onChangeMatch();
    });

    // Create list for the match numbers
    // var i: number;
    // for (i = 1; i <= 64; i++) {
    //   var matchNoItem: {matchNo: string; matchId: number} = { matchNo: '', matchId: 0};
    //   matchNoItem.matchNo = 'Q' + i;
    //   matchNoItem.matchId = i;
    //   this.matchNoArr.push(matchNoItem);
    //}
  }

  ngOnInit() {

  }

  private loadPreviousComments(teamNo: number) {
    this.scoutingData.loadPreviousNotes(teamNo);
  }

  ionViewWillEnter() {
    this.scoutData.load();
    this.matchData.load(this.configService.config.selectedEvent, 'qm');  // TODO: get eventid from configuration
  }

  public onChangeMatch() {
    if (this.selectedMatch < this.matchesArr.length) {
      this.MatchId = this.matchesArr[this.selectedMatch].matchId;
      this.MatchNum = this.matchesArr[this.selectedMatch].matchNo;

      this.matchTeamsList = [
        this.matchesArr[this.selectedMatch].blue1TeamNumber,
        this.matchesArr[this.selectedMatch].blue2TeamNumber,
        this.matchesArr[this.selectedMatch].blue3TeamNumber,
        this.matchesArr[this.selectedMatch].red1TeamNumber,
        this.matchesArr[this.selectedMatch].red2TeamNumber,
        this.matchesArr[this.selectedMatch].red3TeamNumber
      ];
      this.matchTeamsList.sort(function (a, b) { return a - b });

      console.log("Match changed. SelectedMatch:" + this.selectedMatch + " MatchNo:" + this.MatchNum + "  MatchId:" + this.MatchId);
    } else {
      console.log("onChangeMatch: invalid selected index");
    }
  }

  public valueMinus(questionSection: number, numValue: number) {
    //console.log("valueMinus called: QS=" + questionSection + "  numValue="+ numValue);
    switch (questionSection) {
      case 0:
        // SandStorm
        if (this.questions.Autonomous[numValue].answer > 0) {
          this.questions.Autonomous[numValue].answer--;
        }
        break;
      case 1:
        // SandStorm
        if (this.questions.Teleop[numValue].answer > 0) {
          this.questions.Teleop[numValue].answer--;
        }
        break;
      case 2:
        // SandStorm
        if (this.questions.EndGame[numValue].answer > 0) {
          this.questions.EndGame[numValue].answer--;
        }
        break;
    }
  }

  public valuePlus(questionSection: number, numValue: number) {
    //console.log("valuePlus called: QS=" + questionSection + "  numValue="+ numValue);
    switch (questionSection) {
      case 0:
        // SandStorm
        this.questions.Autonomous[numValue].answer++;
        break;
      case 1:
        // Teleop
        this.questions.Teleop[numValue].answer++;
        break;
      case 2:
        // EndGame
        this.questions.EndGame[numValue].answer++;
        break;
    }
  }

  public updateScoutName() {
    var tmpScout: Scout;

    tmpScout = this.scouts.find(scout => scout.scout_id == this.actScoutId);
    if (tmpScout != null) {
      this.actScoutName = tmpScout.firstname + ' ' + tmpScout.lastname;
    } else {
      this.actScoutName = '';
    }



  }


  public loadScoutData() {
    console.log('loadScoutData called. MatchId:' + this.MatchId + 
                '  Teamnum:' + this.TeamNum + 
                '  ScoutId:' + this.actScoutId);
    this.scoutingData.read(this.MatchId, this.TeamNum, this.actScoutId).then((data) => {
      console.log('Matchscouting: received data:');
      console.log(data);

      // Save database record id, it will be required for the update
      this.scoutingDataId = data.id;

      if (data.data != null) {
        // Restore saved answers from the received data
        data.data.forEach((response) => {
          this.questions.Autonomous.forEach((question) => {
            if (question.id == response.id) {
              question.answer = response.response;
            }
          });

          this.questions.Teleop.forEach((question) => {
            if (question.id == response.id) {
              question.answer = response.response;
            }
          });

          this.questions.EndGame.forEach((question) => {
            if (question.id == response.id) {
              question.answer = response.response;
            }
          });

        });
      } else {
        this.resetScoutData();
      }

      // Restore note
      this.matchNote = data.note;

      this.displayQuestions = true;
    });

    // Load previos notes
    this.loadPreviousComments(this.TeamNum);
  }

  /**
   * Setting the answers to 0 or ''
   */
  public resetScoutData() {
    this.questions.Autonomous.forEach((question) => {
      switch (question.questionType) {
        case 1:
        case 2:
          question.answer = 0;
          break;
        default:
          question.answer = '';
      }
    });

    this.questions.Teleop.forEach((question) => {
      switch (question.questionType) {
        case 1:
        case 2:
          question.answer = 0;
          break;
        default:
          question.answer = '';
      }
    });

    this.questions.EndGame.forEach((question) => {
      switch (question.questionType) {
        case 1:
        case 2:
          question.answer = 0;
          break;
        default:
          question.answer = '';
      }
    });

    this.matchNote = '';

    this.previousMatchNotes = [];
  }

  public save() {
    var scoutingData: ScoutingData = {
      id: this.scoutingDataId,
      match_id: this.MatchId,
      team_no: this.TeamNum,
      scout_id: this.actScoutId,
      data: [],
      note: this.matchNote
    };

    console.log('save function called.');
    console.log('actScoutId: ' + scoutingData.scout_id);
    console.log('scoutingDataId:' + this.scoutingDataId);

    //Save Sandstorm answers
    this.questions.Autonomous.forEach((question) => {
      var response: ResponseData = { id: '', response: '' };
      response.id = question.id;
      response.response = question.answer;

      scoutingData.data.push(response);
    });

    //Save Teleop answers
    this.questions.Teleop.forEach((question) => {
      var response: { id: string, response: any } = { id: '', response: '' };
      response.id = question.id;
      response.response = question.answer;

      scoutingData.data.push(response);
    });

    //Save EndGame answers
    this.questions.EndGame.forEach((question) => {
      var response: { id: string, response: any } = { id: '', response: '' };
      response.id = question.id;
      response.response = question.answer;

      scoutingData.data.push(response);
    });


    console.log(scoutingData);
    this.scoutingData.save(scoutingData).then((response) => {
      console.log('Scouting data saved');
      this.alertService.presentToast(response);
    });
  }

  public saveNext() {
    this.save();
    this.resetScoutData();
    this.selectedMatch++;
    this.TeamNum = 0;

    this.displayQuestions = false;
  }
}
