import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from '../models/fan';
import { FanService } from '../services/fan.service';

@Component({
  selector: 'app-fan-form',
  templateUrl: './fan-form.component.html',
  styleUrls: ['./fan-form.component.scss']
})
export class FanFormComponent implements OnInit {
  
  form : FormGroup =  new FormGroup({
    name : new FormControl('', [Validators.min(3), Validators.required]),
    birthday : new FormControl(null),
    image : new FormControl(null),
    musics : new FormArray([])
  })

  maxDate : string;
  isUpdate : boolean;
  id : number;

  constructor(private fanService : FanService, private activedRoute : ActivatedRoute, private router : Router) {
    const now = new Date();
    now.setFullYear(now.getFullYear() - 13);
    this.maxDate = now.toISOString().slice(0, 10);


    this.id = parseInt(this.activedRoute.snapshot.params['id']);
    if(this.id){
      this.isUpdate = true;
      const fan = this.fanService.getFanById(this.id);
      if(!fan){
        this.router.navigate([''])
      }else{
        this.fillForm(fan);
      }
    }else{

      this.addInputMusic();
    }
  }

  ngOnInit(): void {
  }

  get musics (){
    return  this.form.get('musics') as FormArray;
  }

  onSave(){
    let fan = new Fan();
    fan.name = this.form.get('name')?.value;
    fan.birthday = this.form.get('birthday')?.value;
    fan.image = this.form.get('image')?.value;

    for(let formMusic of this.musics.getRawValue()){
      fan.musics.push(formMusic.title)
    }

    if(this.isUpdate){
      fan.id =  this.id;
      this.fanService.updateFan(fan);
    }else{
      this.fanService.addFan(fan);
    }
  
    this.form.reset();
    this.router.navigate(['']);
  }

  addInputMusic() {
    const musicForm = new FormGroup({
      title: new FormControl('', [Validators.required,Validators.min(1)]),
    });
    this.musics.push(musicForm);
  }

  deleteInputMusic(index : number){
    this.musics.removeAt(index);
  }

  isRequired(formControlName : string){
    return this.form.get(formControlName)?.invalid && this.form.get(formControlName)?.touched
  }

  getControls() {
    return this.musics.controls;
  }

  fillForm(fan : Fan){
    this.form.get('name')?.setValue(fan.name);
    this.form.get('image')?.setValue(fan.image);
    
    const date = new Date(fan.birthday);
    this.form.get('birthday')?.setValue(date.toISOString().split('T')[0]);

    for(let music of fan.musics){
      const musicForm = new FormGroup({
        title: new FormControl(music, [Validators.required,Validators.min(1)]),
      });
      this.musics.push(musicForm);
    }
  }

}
