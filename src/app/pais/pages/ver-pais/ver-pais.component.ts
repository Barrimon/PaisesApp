import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    //desestructurado
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais));

    // this.activatedRoute.params
    //   .pipe(switchMap((params) => this.paisService.getPaisPorAlpha(params.id)))
    //   .subscribe();

    // // this.activatedRoute.params.subscribe((params) => {
    // //   console.log('params :>> ', params.id);
    // // });

    // //con desestructuración
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log('params.id :>> ', id);

    //   this.paisService.getPaisPorAlpha(id).subscribe((pais) => {
    //     console.log('pais :>> ', pais);
    //   });
    // });
  }
}
