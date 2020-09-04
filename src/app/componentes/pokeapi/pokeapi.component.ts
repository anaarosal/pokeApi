import { Component, OnInit } from '@angular/core';
import { SpokeapiService } from '../../services/spokeapi.service';

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrls: ['./pokeapi.component.scss']
})
export class PokeapiComponent implements OnInit {

  generationUno=[]

  constructor( private miPokeApi: SpokeapiService) { }

  ngOnInit(): void {
    this.miPokeApi.getPokemon().subscribe( obtengopokemon => {
      console.log('obtengopokemon')
      console.log(obtengopokemon)

      this.generationUno = obtengopokemon['pokemon_species']
    }, error =>{
      console.log('error')
      console.log(error)
    })
  }

}
