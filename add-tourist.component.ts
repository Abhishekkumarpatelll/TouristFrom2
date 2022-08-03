import { Component, OnInit } from '@angular/core';
import { TouristService } from '../tourist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tourist } from '../tourist';
@Component({
  selector: 'app-add-tourist',
  templateUrl: './add-tourist.component.html',
  styleUrls: ['./add-tourist.component.css']
})
export class AddTouristComponent implements OnInit {

  constructor(private touristservice: TouristService) { }

  tourist: Tourist = new Tourist();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  touristsaveform = new FormGroup({
    tourist_name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    tourist_lname: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    tourist_place: new FormControl('', [Validators.required, Validators.maxLength(13)]),
    tourist_numberofdate: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    tourist_age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    tourist_gender:new FormControl()
  });

  saveTourist(saveTourist) {
    this.tourist = new Tourist();
    this.tourist.tourist_name = this.TouristName.value;
    this.tourist.tourist_lname = this.TouristLastname.value;
    this.tourist.tourist_place = this.TouristPlace.value;
    this.tourist.tourist_numberofdate = this.TouristNumberofdate.value;
    this.tourist.tourist_age = this.TouristAge.value;
    this.tourist.tourist_gender=this.TouristGender.value;
    this.submitted = true;
    this.save();
  }
  save() {
    this.touristservice.createTourist(this.tourist)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tourist = new Tourist();
  }

  get TouristName() {
    return this.touristsaveform.get('tourist_name');
  }

  get TouristLastname() {
    return this.touristsaveform.get('tourist_lname');
  }

  get TouristPlace() {
    return this.touristsaveform.get('tourist_place');
  }
  
  get TouristNumberofdate() {
    return this.touristsaveform.get('tourist_numberofdate');
  }


  get TouristAge() {
    return this.touristsaveform.get('tourist_age');
  }


  get TouristGender(){
    return this.touristsaveform.get('tourist_gender');
  }




  addTouristForm() {
    this.submitted = false;
    this.touristsaveform.reset();
  }
}



