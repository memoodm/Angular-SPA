import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroService:HeroesService
  ) { 
    this._activatedRoute.params.subscribe(
      params => {
        this.heroe = this._heroService.getHeroeByName(params['id']);
        console.log(this.heroe);
      }
    )
  }

  ngOnInit() {
  }

}
