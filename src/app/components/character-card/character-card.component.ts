import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../models/response.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html'
})
export class CharacterCardComponent {

  @Input() character: Character = {};

  @Output() characterSelecionado: EventEmitter<number>;

  constructor( private router: Router ) {
    this.characterSelecionado = new EventEmitter();
  }

  verCharacter() {
    this.router.navigate( ['/character', this.character.id] );
  }
  
}
