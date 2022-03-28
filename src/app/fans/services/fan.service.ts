import { Injectable } from '@angular/core';
import { Fan } from '../models/fan';
import { faker } from '@faker-js/faker';
import { Random } from '@faker-js/faker/random';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  fans : Fan[] = [];

  constructor() {
    for(let j of this.getRandmonFan()){
      let fan = new Fan();
      fan.fromJson(j);
      this.fans.push(fan)
    }
   }

  getFans(){
    return this.fans;
  }

  addFan(fan : Fan){
    fan.id = this.fans.length == 0 ? 1 : this.fans[this.fans.length -1].id ++;
    this.fans.push(fan);

  }

  deleteFan(fan : Fan){
    const index = this.fans.indexOf(fan);
    this.fans.splice(index, 1);
  }

  updateFan(fanToUpdate : Fan){
    const index = this.fans.findIndex(fan => fan.id == fanToUpdate.id);
    this.fans[index] = fanToUpdate;
  }


  getFanById(id : number){
    const fan = this.fans.find((fan) => fan.id === id);
    if(fan){
      return fan;
    }
    return null;
  }

  getRandmonFan(){
    const randomInt = Math.random() * (3 - 1) + 1;

    const fans : any[] = [];
    let cpt = 1;

    while(fans.length < randomInt){
      fans.push({ id: cpt, name : faker.name.firstName(), image : faker.image.avatar() , birthday : this.getRandomDate(), musics : this.getRandomMusic() });
      cpt++;
    }
    return fans;

  }

  getRandomDate(){
    const max = new Date();
    const min = new Date();
    max.setFullYear(max.getFullYear() - 13);
    min.setFullYear(max.getFullYear() - 50);
    return faker.date.between(min.toISOString(), max.toISOString());
  }

  getRandomMusic(){
    const randomInt = Math.random() * (5 - 1) + 1;

    const musics : any[] = [];

    while(musics.length < randomInt){
      const music = faker.music.genre();
      const exist = musics.find(m => m == music);
      if(!exist){
        musics.push(music);
      }
    }
    return musics;
  }
}
