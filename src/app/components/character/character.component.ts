import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent {
  character:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _charactersService: CharactersService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.character = this._charactersService.getCharacter( params['id'] )
        .subscribe({
          next: resp => {
            this.character = resp;
          },
          error: (e) => {
            alert(e);
          }
        });
    });

  }
}
