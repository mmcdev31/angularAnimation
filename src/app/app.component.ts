import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', [
      state(
        'normal',
        style({
          backgroundColor: 'green',
          border: '2px solid #444',
          borderRadius: '0px',
        })
      ),
      state(
        'wild',
        style({
          backgroundColor: 'red',
          border: 'none',
          borderRadius: '50%',
        })
      ),
      // transition('void => normal', animate(1000)),
      transition('normal <=> wild', animate(200)),
      transition('wild <=> normal', animate(200)),
      //transition('* => *', animate(1000)),
      // transition(':enter', animate('1s 1s')),
      transition(':enter', [
        style({
          backgroundColor: 'blue',
        }),
        animate(400, style({ backgroundColor: 'orange' })),
      ]),
    ]),
    trigger('square2', [
      state(
        'normal',
        style({
          backgroundColor: 'green',
          border: '2px solid #444',
          borderRadius: '0px',
        })
      ),
      state(
        'wild',
        style({
          backgroundColor: 'red',
          border: 'none',
          borderRadius: '50%',
        })
      ),
      transition(
        'normal => wild',
        animate(
          2000,
          keyframes([
            style({ backgroundColor: 'yellow', offset: 0 }),
            style({ backgroundColor: 'green', offset: 0.2 }),
            style({ backgroundColor: 'blue', offset: 0.4 }),
            style({ backgroundColor: 'orange', offset: 0.6 }),
            style({ backgroundColor: 'teal', offset: 0.8 }),
          ])
        )
      ),
    ]),
    trigger('square3', [
      state(
        'normal',
        style({
          backgroundColor: 'green',
          border: '2px solid #444',
          borderRadius: '0px',
        })
      ),
      state(
        'wild',
        style({
          backgroundColor: 'red',
          border: 'none',
          borderRadius: '50%',
        })
      ),
      transition(
        'normal => wild',
        group([
          animate(
            500,
            style({
              borderRadius: '50%',
            })
          ),
          animate(2000, style({ backgroundColor: 'red' })),
        ])
      ),
    ]),
    trigger('list', [
      transition(
        ':enter',
        query('li', [
          style({
            opacity: 0,
            transform: 'translateX(-10px)',
          }),
          stagger(-300, animate(200)),
        ])
      ),
      transition(
        ':leave',
        query('li', [
          stagger(
            -30,
            animate(
              2000,
              style({
                opacity: 0,
                transform: 'translateX(10px)',
              })
            )
          ),
        ])
      ),
    ]),
  ],
})
export class AppComponent {
  title = 'animation';
  public state = 'normal';
  public display = true;

  // interface AnimationEvent {
  //   fromState: string
  //   toState: string
  //   totalTime: number
  //   phaseName: string
  //   element: any
  //   triggerName: string
  //   disabled: boolean
  // }

  public toogle(event: any) {
    if (event.phaseName === 'done') {
      this.display = !this.display;
    }
    console.log(event);
  }
}
