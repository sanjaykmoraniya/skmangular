import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class QuestionService {

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    getQuestions() {

        const questions: QuestionBase<any>[] = [

            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: '',
                required: true,
                order: 1
            }),

            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            }),

            new TextboxQuestion({
                key: 'MobNumber',
                label: 'Mob',
                type: 'email',
                order: 4
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}
