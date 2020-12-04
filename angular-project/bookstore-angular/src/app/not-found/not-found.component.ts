import {AfterViewInit, Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import set = Reflect.set;

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)'})),
      state('rotated', style({ transform: 'rotate(-180deg)'})),
      transition('default => rotated', animate('2000ms ease-out')),
      transition('rotated => default', animate('2000ms ease-out'))
    ])
  ]
})
export class NotFoundComponent implements OnInit{

  state: string = "default";

  constructor() { }

  rotate() {
    this.state = (this.state === "default" ? "rotated" : "default");
  }

  ngOnInit() {
    if (this.state == "default") {
      setTimeout(() => this.state = "rotated")
    }
  }

}
