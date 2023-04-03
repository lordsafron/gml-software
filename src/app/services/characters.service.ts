import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';
import { CharacterDataWrapper } from '../models/response.model';
import { map } from 'rxjs';

const base_url = environment.base_url;
const pubkey = environment.pubkey;
const pk = environment.pk;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  constructor(private http: HttpClient) { }

  get params() {
    let params = new HttpParams();
    params = params.append('ts', this.datetime);
    params = params.append('apikey', pubkey);
    params = params.append('hash', this.hash);
    return params;
  }

  get datetime() {
    var now = new Date();
    var currentTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    var month = currentTime.getMonth() + 1;
    if(month<10) {   month=0+month } 
    var day = currentTime.getDate();
    if(day<10){    day=0+day } 
    var year = currentTime.getFullYear();
    var hours = currentTime.getHours();
    if(hours<10){   hours=0+hours } 
    var minutes = currentTime.getMinutes();
    if(minutes<10){ minutes=0+minutes }
    var seconds = currentTime.getSeconds();
    if(seconds<10){    seconds=0+seconds }
    return year + "" + month + "" + day + "" + hours+ "" + minutes+ "" + seconds+"";
  }

  get hash() {
    return ""+new Md5().appendStr(this.datetime)
    .appendStr(pk)
    .appendStr(pubkey)
    .end();
  }

  getAllCharacters() {
    return this.http.get<CharacterDataWrapper>(base_url, {params: this.params})
      .pipe(
        map( resp => resp.data?.results)
      );
  }

  getCharacter(id: number) {
    return this.http.get<CharacterDataWrapper>(`${base_url}/${id}`, {params: this.params})
      .pipe(
        map( resp => resp.data?.results[0])
      );
  }

  buscarCharacter(termino: string) {
    return this.http.get<CharacterDataWrapper>(base_url, {params: this.params.append('nameStartsWith', termino)})
      .pipe(
        map( resp => resp.data?.results)
      )
  }

}
