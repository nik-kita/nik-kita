# Create own config

First of all don't forget that Karabiner allow you to use multiple configs at the same time and event immediately switch, able, disable by selecting preconfigured by you profile.

__If you want something more special this repo will help you.__

# Little demo of code

This is a code that produce previous config.

```ts

import { Forge } from '../forge';
import { ModifierType } from '../types/modifier.type';
import { HYPER } from './hyper.example';

export const hyperWithLeftShift: ModifierType[] = [
  ...HYPER,
  'left_shift',
];

export function hjklArrows() {
  Forge.title('HJKL navigation etc.')
    .addRule('arrows from HJKL')
    .addManipulator('hyper + h = left_arrow')
    .setFrom({
      key_code: 'h',
      modifiers: {
        mandatory: HYPER,
      },
    })
    .setTo({
      key_code: 'left_arrow',
    })
    .completeManipulator()
    .addManipulator('hyper + l = right_arrow')
    .setFrom({
      key_code: 'l',
      modifiers: {
        mandatory: HYPER,
      },
    })
    .setTo({
      key_code: 'right_arrow',
    })
    .completeManipulator()
    .addManipulator('hyper + j = down_arrow')
    .setFrom({
      key_code: 'j',
      modifiers: {
        mandatory: HYPER,
      },
    })
    .setTo({
      key_code: 'down_arrow',
    })
    .completeManipulator()
    .addManipulator('hyper + k = left_arrow')
    .setFrom({
      key_code: 'k',
      modifiers: {
        mandatory: HYPER,
      },
    })
    .setTo({
      key_code: 'up_arrow',
    })
    .completeManipulator()

    .completeRule()
    .addRule('arrows with selection from HJKL')
    .addManipulator('hype + left_shift + h = left_arrow + left_shift')
    .setFrom({
      key_code: 'h',
      modifiers: {
        mandatory: hyperWithLeftShift,
      },
    })
    .setTo({
      key_code: 'left_arrow',
      modifiers: ['left_shift'],
    })
    .completeManipulator()
    .addManipulator('hyper + left_shift + l = right_arrow + left_shift')
    .setFrom({
      key_code: 'l',
      modifiers: {
        mandatory: hyperWithLeftShift,
      },
    })
    .setTo({
      key_code: 'right_arrow',
      modifiers: ['left_shift'],
    })
    .completeManipulator()
    .addManipulator('hyper + left_shift + j = down_arrow + left_shift')
    .setFrom({
      key_code: 'j',
      modifiers: {
        mandatory: hyperWithLeftShift,
      },
    })
    .setTo({
      key_code: 'down_arrow',
      modifiers: ['left_shift'],
    })
    .completeManipulator()
    .addManipulator('hyper + left_shift + k = left_arrow + left_shift')
    .setFrom({
      key_code: 'k',
      modifiers: {
        mandatory: hyperWithLeftShift,
      },
    })
    .setTo({
      key_code: 'up_arrow',
      modifiers: ['left_shift'],
    })
    .completeManipulator()
    .completeRule()
    .generateJson();
}

```

On first glance it looks difficult but if you explore Karabiner documentation you will find this very helpful because you write typed code and get your json configs. 
