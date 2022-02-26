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
          questionText: 'Cargo loaded at start of match?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'No'
            },
            {
              value: 1,
              itemText: 'Yes'
            }
          ],
          answer: 0
          },
        {
          id: 'AQ2',
          questionText: 'Fully exited the tarmac at least once?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'No'
            },
            {
              value: 1,
              itemText: 'Yes'
            }
          ],
          answer: 0
          },
        {
          id: 'AQ3',
          questionText: 'Cargo in low goal?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'AQ4',
          questionText: 'Cargo in high goal?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'AQ5',
          questionText: 'Cargo missed low goal?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'AQ6',
          questionText: 'Cargo missed high goal?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'AQ7',
          questionText: 'Cargo in low goal from human?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'AQ8',
          questionText: 'Cargo in high goal from human?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'AQ9',
          questionText: 'Cargo missed from human?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          }
      ],

      Teleop: [
        {
          id: 'TQ1',
          questionText: 'Cargo in low goal?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'TQ2',
          questionText: 'Cargo in high goal?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'TQ3',
          questionText: 'Cargo missed low goal?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'TQ4',
          questionText: 'Cargo missed high goal?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'TQ5',
          questionText: 'Intake method?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'Toaster'
            },
            {
              value: 1,
              itemText: 'Floor'
            },
            {
              value: 2,
              itemText: 'Terminal'
            },
            {
              value: 3,
              itemText: 'Both'
            }
          ],
          answer: 0
          },
        {
          id: 'TQ6',
          questionText: 'Max cargo ever in robot?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'Toaster'
            },
            {
              value: 1,
              itemText: '1'
            },
            {
              value: 2,
              itemText: '2'
            },
            {
              value: 3,
              itemText: '>2'
            }
          ],
          answer: 0
          },
        {
          id: 'TQ7',
          questionText: 'Wrong color cargo disposal?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'No'
            },
            {
              value: 1,
              itemText: 'Intake'
            },
            {
              value: 2,
              itemText: 'Shooter'
            },
            {
              value: 3,
              itemText: 'Other'
            }
          ],
          answer: 0
          },
        {
          id: 'TQ8',
          questionText: 'How many times did they defend?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
        {
          id: 'TQ9',
          questionText: 'How many fouls charged against this robot?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
          },
      ],

      EndGame: [
        {
          id: 'EQ1',
          questionText: 'Has climber?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'No'
            },
            {
              value: 1,
              itemText: 'Yes'
            },
          ],
          answer: 0
          },
        {
          id: 'EQ2',
          questionText: 'Low climb?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'No attempt'
            },
            {
              value: 1,
              itemText: 'Fail'
            },
            {
              value: 2,
              itemText: 'Yes'
            }
          ],
          answer: 0
          },
        {
          id: 'EQ3',
          questionText: 'Mid climb?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'No attempt'
            },
            {
              value: 1,
              itemText: 'Fail'
            },
            {
              value: 2,
              itemText: 'Yes'
            }
          ],
          answer: 0
          },
        {
          id: 'EQ4',
          questionText: 'High climb?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'No attempt'
            },
            {
              value: 1,
              itemText: 'Fail'
            },
            {
              value: 2,
              itemText: 'Yes'
            }
          ],
          answer: 0
          },
        {
          id: 'EQ5',
          questionText: 'Traversal climb?',
          questionType: 2,
          questionItems: [
            {
              value: 0,
              itemText: 'No attempt'
            },
            {
              value: 1,
              itemText: 'Fail'
            },
            {
              value: 2,
              itemText: 'Yes'
            }
          ],
          answer: 0
          },
        {
          id: 'EQ6',
          questionText: 'Length of time to climb in seconds?',
          questionType: 1,
          questionItems: [
          ],
          answer: 0
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
