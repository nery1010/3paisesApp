import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  buscar (){
    this.onEnter.emit(this.termino);
  }

}
