import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pai.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {


  pais! : Country [];

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  async ngOnInit(): Promise<void> {

    await this.delay(3000);


    
    /* this.activatedRoute.params.subscribe(({ id }) => {
      this.paisService.getPaisPorcodigo(id).
      subscribe((pais: any) => {
        this.pais = pais;
      });
    });
 */

    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
      tap(console.log)).
      subscribe((pais: any) => {
        this.pais = pais;
      });
   
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
