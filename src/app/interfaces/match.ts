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
    questionType: number; //define the numbers 0 = the text imput/1 = + and - input/2 = selection list imput
    answer: any;       
    questionItems: QuestionOptionItem[];
}

export interface QuestionOptionItem {
    value: number;
    itemText: String;
}