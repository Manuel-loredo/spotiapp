import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {
artistas: any[] = [];
loading: boolean;
  constructor( private spotify: SpotifyService) { }

buscar(termino: string) {
this.loading = true;
if ( termino.length > 0){
  this.spotify.getArtistas(termino)
  .subscribe((data: any) => {
  console.log(data);
  this.artistas = data;
  this.loading = false;
  });
} else {
  this.loading = false;
}
}

}