import { Component, OnInit } from '@angular/core';
import { QuestionItem, QuestionOptionItem } from '../../../interfaces/match';

const TELEOP_HATCHES = 1;
const TELEOP_CARGO   = 2;

@Component({
  selector: 'app-matchscouting',
  templateUrl: './matchscouting.page.html',
  styleUrls: ['./matchscouting.page.scss'],
})
export class MatchscoutingPage implements OnInit {
  public valueArray: number[] = new Array(TELEOP_CARGO);

  questionsSandstorm: QuestionItem[] = [
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
      answer: ''
    },
    {
      id: 'SQ2',
      questionText: 'What game peice did they start with?',
      questionType: 2,
      questionItems: [{
        value: 1,
        itemText: 'Hatch'
      },
      {
        value: 2,
        itemText: 'Cargo'
      }
    ],
      answer: ''
    },
    {
      id: 'SQ3',
      questionText: 'How many hatches were placed?',
      questionType: 1,
      questionItems: [],
      answer: '',
    },
    {
      id: 'SQ4',
      questionText: 'What level did they place the hatch',
      questionType: 2,
      questionItems: [{
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
      answer: ''
    },
    {
      id: 'SQ5',
      questionText: 'How much Cargo was placed?',
      questionType: 2,
      questionItems: [],
      answer: ''
    },
    {
      id: 'SQ6',
      questionText: 'What level did they place the cargo?',
      questionType: 2,
      questionItems: [{
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
      answer: ''
    }
  ];

  questionsTeleop: QuestionItem[] = [{
    id: 'TQ1',
    questionText: 'How many hatches were placed?',
    questionType: 1,
    questionItems: [],
    answer: ''
  },
  {
    id: 'TQ2',
    questionText: 'What was the highest level they acheived?',
    questionType: 2,
    questionItems: [{
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
    answer: ''
  },
  {
    id: 'TQ3',
    questionText: 'How much cargo was placed?',
    questionType: 1,
    questionItems: [],
    answer: ''
  },
  {
    id: 'TQ4',
    questionText: 'What was the highest level they acheived?',
    questionType: 2,
    questionItems: [{
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
  answer: ''
  },
  {
    id: 'TQ5',
    questionText: 'How do they pickup hatches?',
    questionType: 2,
    questionItems: [{
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
    answer: ''
  },
  {
    id: 'TQ6',
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
    answer: ''
  }
]

  questionEndGame: QuestionItem[] = [
    {
      id: 'EQ1',
      questionText: 'What level did they acheive?',
      questionType: 2,
      questionItems: [{
        value: 1,
        itemText: 'No attempt'
      },
      {
        value: 2,
        itemText: 'LV1'
      },
      {
        value: 3,
        itemText: 'LV2'
      },
      {
        value: 4,
        itemText: 'LV3'
      }
    ],
      answer: ''
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
      answer: ''
    },
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
    }
  ]
/*  questionsSandstorm: QuestionItem[] = [
    {
      id: 'TQ1',
      questionText: 'How many hatches were placed?',
      questionType: 1,
      questionItems: [],
      answer: ''
    }  */
    


  constructor() { }

  ngOnInit() {
    this.valueArray[TELEOP_HATCHES]=0;
    this.valueArray[TELEOP_CARGO]=0;
  }


  public valueMinus(numValue: number) {
    if (this.valueArray[numValue] > 0){
      this.valueArray[numValue]--;
    }
  }

  public valuePlus(numValue: number) {
    this.valueArray[numValue]++;
  }

}
