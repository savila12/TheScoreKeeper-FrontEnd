import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() btnEmit = new EventEmitter();
  @Input() text: any;


  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('button is clicked');
    this.btnEmit.emit();
  }

}
