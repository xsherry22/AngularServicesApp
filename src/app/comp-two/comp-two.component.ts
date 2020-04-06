import { Component, OnInit } from '@angular/core';
import {
  trigger, 
  state, 
  style,
  animate, 
  transition,
} from '@angular/animations';

enum AnimationsType {
    State = 0,
    Animate = 1,
    Style = 2
}

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
  animations: [
    trigger('onOff', [
      state('on', 
      style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'orange'
      })),
      state('off', 
      style({
        height: '200px',
        opacity: 0.5,
        backgroundColor: 'grey'
      })),
      transition('on => off', [
        animate('0.3s')
      ]),
      transition('off => on', [
        animate('1s')
      ]),
    ]),
  ],
})
export class CompTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOn = true;

  toggle(){
    this.isOn = !this.isOn;
  }


}
