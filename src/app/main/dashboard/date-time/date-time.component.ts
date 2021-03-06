import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

/** Displays the date and time in the main dashboard view. */
@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateTimeComponent implements OnInit {

  // --------------- INPUTS AND OUTPUTS ------------------

  /** The current time. */
  @Input() time: Date;
  

  // --------------- LOCAL UI STATE ----------------------
 

  constructor() { }

  ngOnInit() {
    console.log(this.time);
    console.log(this.time.toLocaleTimeString());
    console.log(this.time.toTimeString());
    console.log(this.time.toUTCString());
    console.log(this.time.getHours());
    console.log(this.time.getMinutes());
  }


  // --------------- DATA BINDING FUNCTIONS --------------


  // --------------- EVENT BINDING FUNCTIONS -------------


  // --------------- OTHER -------------------------------
}
