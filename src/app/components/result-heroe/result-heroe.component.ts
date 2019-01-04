import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-result-heroe',
  templateUrl: './result-heroe.component.html',
  styleUrls: ['./result-heroe.component.css']
})
export class ResultHeroeComponent implements OnInit {

  ArrayHeroes:Heroe[];
  parametroBusqueda:string;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroService:HeroesService
  ) { 
    this._activatedRoute.params.subscribe(
      params => {
        this.parametroBusqueda = params['nombre'];
      }
    )
  }

  ngOnInit() {
    this.ArrayHeroes = this._heroService.buscarHeroes(this.parametroBusqueda);
  }

}
