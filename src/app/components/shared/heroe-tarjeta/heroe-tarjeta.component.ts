import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() hero:Heroe;
  @Input() nombrehero:string;

  constructor(
    private _router: Router 
  ) { }

  ngOnInit() {
  }

  verHeroe(){
    this._router.navigate(['/heroe',this.nombrehero]);
  }

}
