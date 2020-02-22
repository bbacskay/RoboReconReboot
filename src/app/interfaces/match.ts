import { Team } from './team';
import { Scout } from './scout';

export interface MatchListItem {
    matchId: number;
    matchNo: number;
    blue1TeamNumber: number;
    blue2TeamNumber: number;
    blue3TeamNumber: number;
    red1TeamNumber: number;
    red2TeamNumber: number;
    red3TeamNumber: number;
}

export interface MatchItem {
    Teams: TeamItem[];
}

export interface TeamItem {
    teamNumber: Team;
    questions: QuestionItem[];
    scoutedBy: Scout;
}

export interface QuestionItem {
    id: string;
    questionText: string;
    questionType: number; //define the numbers 0 = the text input/1 = + and - input/2 = selection list imput
    answer: any;       
    questionItems: QuestionOptionItem[];
}

export interface QuestionOptionItem {
    value: number;
    itemText: String;
}

export interface Questions {
    Autonomous: QuestionItem[],
    Teleop: QuestionItem[],
    EndGame: QuestionItem[]
};

export interface ScoutingData {
    id: number;
    match_id: number;
    team_no: number;
    scout_id: number;
    data: ResponseData[];
    note: string;
  }

export interface ResponseData {
    id: string;
    response: any;
}

export interface PrevNoteItem {
    matchNo: number;
    note: string;
}

export interface MonitorMatchData {
    match_no: number;
    ba_match_key: string;
    blue_1: MonitorTeamDataItem;
    blue_2: MonitorTeamDataItem;
    blue_3: MonitorTeamDataItem;
    red_1: MonitorTeamDataItem;
    red_2: MonitorTeamDataItem;
    red_3: MonitorTeamDataItem;
}

export interface MonitorTeamDataItem {
    scouting_data_id: number;
    teamNo: number;
    scout: string;
    questions: MonitorQuestionItem[];
    note: string;
}

export interface MonitorQuestionItem {
    id: string;
    value: string;
    ok: boolean;
}