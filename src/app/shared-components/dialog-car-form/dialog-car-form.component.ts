import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Car } from 'src/app/car';
import { CarFormComponent, FormDataOutput} from '../car-form/car-form.component';

@Component({
  selector: 'app-dialog-car-form',
  templateUrl: './dialog-car-form.component.html',
  styleUrls: ['./dialog-car-form.component.scss']
})
export class DialogCarFormComponent implements OnInit {
  

   cars: Array<Car>;

  constructor(private popUp: MatDialogRef<DialogCarFormComponent>) { }

  ngOnInit(): void {
  }

  formData(data: FormDataOutput): void{
    if (!data){
      return;
    }


    if(data.action === 'save'){
      this.onSave(data.data);
    }
    else if(data.action ==='cancel'){
      this.onClose();
    }
  }
  onSave(data: Car): void{
    const newCar: Car = {
      ...data,
      id:  this.unicId()

    };
    this.popUp.close({event : 'close', data: newCar})
  }
   
  onClose(): void{
    this.popUp.close();
  }
  randomNumber(): string {
    let result = '';
    let words = '0123456789';
    let max_position = words.length - 1;
    for (let i = 0; i < 10; ++i) {
      let position = Math.floor(Math.random() * max_position);
      result = result + words.substring(position, position + 1);
    }
    return result;
  }

  unicId(): string {
    let unicId: string = '';
    // if (this.car.id != this.randomNumber()) {// сравнить с массивом  carItem 
    //   unicId = this.randomNumber();
    // } else {
    //   this.randomNumber();
    // }
    console.log(unicId);
    return unicId;
  }
}
