import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    //private _heroService:HeroesService
    private _activatedRouter:Router
  ) { }

  ngOnInit() {
  }

  buscarHeroe(nombreHero:string){
    console.log("heroe buscado: ",nombreHero);
    //this._heroService.buscarHeroes(nombreHero);
    this._activatedRouter.navigate(['/result-heroe',nombreHero]);
  }

}
