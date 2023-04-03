import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/response.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  characters?:Character[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _charactersService: CharactersService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this._charactersService.buscarCharacter( params['termino'] )
        .subscribe({
          next: resp => {
            this.characters = resp;
          },
          error: (e) => {
            alert(e);
          }
        });
    });

  }
}
