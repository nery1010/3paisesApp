import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pai.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  paises: Country[] = [];
  termino: string ="";
  hayError :boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    // console.log(this.termino);
    this.paisService.buscarCapital(this.termino).subscribe( capitales =>{

    this.paises = capitales;
    console.log(this.paises);
    
    },(error) =>{
      this.hayError = true;
      this.paises = [];
    });
    
  
  }
}
