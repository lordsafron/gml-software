import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/response.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  characters?:Character[] = [];

  constructor(
    private charactersService: CharactersService,
    private router:Router
    ) {}

  ngOnInit(): void {
    this.charactersService.getAllCharacters()
      .subscribe({
        next: resp => {
          this.characters = resp;
        },
        error: (e) => {
          alert(e);
        }
      }) 
  }

  verCharacter( idx:Event ){
    this.router.navigate( ['/character',idx] );
  }

}
