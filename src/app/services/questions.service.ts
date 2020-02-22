import { Injectable } from '@angular/core';
import { Questions, QuestionItem } from '../interfaces/match';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public questionsList: QuestionItem[];

  public questions: Questions;


  constructor(private appSettings: SettingsService) { }


  /**
   * Load list of questions
   */
  public load() {
    this.questions = {
      Autonomous: [
        {
          id: 'AQ1',
          questionText: 'Did they cross the auto line?',
          questionType: 2,
          questionItems: [{
            value: 1,
            itemText: 'No'
          },
          {
            value: 2,
            itemText: 'Yes'
          }
          ],
          answer: 0
        },
        {
          id: 'AQ2',
          questionText: 'How many Power Cells did they get in the low port?',
          questionType: 1,
          questionItems: [],
          answer: 0
        },
        {
          id: 'AQ3',
          questionText: 'How many Power Cells did they get in the high port?',
          questionType: 1,
          questionItems: [],
          answer: 0,
        },
      ],

      Teleop: [{
        id: 'TQ1',
        questionText: 'How many Power Cells did they get in the low port?',
        questionType: 1,
        questionItems: [],
        answer: 0
      },
      {
        id: 'TQ2',
        questionText: 'How many Power Cells did they get in the high port?',
        questionType: 1,
        questionItems: [],
        answer: 0
      },
      {
        id: 'TQ3',
        questionText: 'Did they do control panel level 2?',
        questionType: 2,
        questionItems: [
          {
            value: 0,
            itemText: 'N/A'
          },
          {
            value: 1,
            itemText: 'NO'
          },
          {
            value: 2,
            itemText: 'YES'
          }
        ],
        answer: 0
      },
      {
        id: 'TQ4',
        questionText: 'Did they do control panel level 3?',
        questionType: 2,
        questionItems: [
          {
            value: 0,
            itemText: 'N/A'
          },
          {
            value: 1,
            itemText: 'NO'
          },
          {
            value: 2,
            itemText: 'YES'
          }
        ],
        answer: 0
      },
      {
        id: 'TQ5',
        questionText: 'How many times did they defend?',
        questionType: 1,
        questionItems: [],
        answer: 0
      }
      ],

      EndGame: [
        {
          id: 'EQ1',
          questionText: 'Did they climb?',
          questionType: 2,
          questionItems: [{
            value: 0,
            itemText: 'No attempt'
          },
          {
            value: 1,
            itemText: 'No'
          },
          {
            value: 2,
            itemText: 'Yes'
          }
          ],
          answer: 0
        },
          {
            id: 'EQ2',
            questionText: 'Did they balance?',
            questionType: 2,
            questionItems: [{
              value: 1,
              itemText: 'No'
            },
            {
              value: 2,
              itemText: 'Yes'
            }
          ],
          answer: 1
        }
      ]
    };

    console.log("Questions load function called");
  };

  public add(question: QuestionItem) {
    console.log("Question add function called");
  };

  public update(id: number) {
    console.log("Question update function called");
  };

  public delete(id: number) {
    console.log("Question delete function called");
  };


}
