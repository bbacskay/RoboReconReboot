import { Team } from './team';
import { Scout } from './scout';

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
    answer: string;
}