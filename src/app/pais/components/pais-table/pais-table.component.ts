import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pai.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {

  @Input() paises: Country[] = [];

  // @Input() capitales: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
