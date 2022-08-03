import { Component, OnInit } from '@angular/core';
import { TouristService } from '../tourist.service';
import { Tourist } from '../tourist';
import { Observable,Subject } from "rxjs";
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-student-list',
  templateUrl: './tourist-list.component.html',
  styleUrls: ['./tourist-list.component.css']
})
export class TouristListComponent implements OnInit {
 constructor(private touristservice:TouristService) { }
 touristsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  tourists: Observable<Tourist[]>;
  tourist : Tourist=new Tourist();
  deleteMessage=false;
  touristlist:any;
  isupdated = false;    
  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.touristservice.getTouristList().subscribe(data =>{
    this.tourists =data;
    this.dtTrigger.next();
    })
  }
  
  deleteTourist(id: number) {
    this.touristservice.deleteTourist(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.touristservice.getTouristList().subscribe(data =>{
            this.tourists =data
            })
        },
        error => console.log(error));
  }


  updateTourist(id: number){
    this.touristservice.getTourist(id)
      .subscribe(
        data => {
          this.touristlist=data           
        },
        error => console.log(error));
  }

  touristupdateform=new FormGroup({
    tourist_id:new FormControl(),
    tourist_name:new FormControl(),
    tourist_place:new FormControl(),
    tourist_numberofdate:new FormControl(),
    tourist_age:new FormControl(),
    tourist_gender:new FormControl()
  });

  updateStu(updstu){
    this.tourist=new Tourist(); 
   this.tourist.tourist_id=this.TouristId.value;
   this.tourist.tourist_name=this.TouristName.value;
   this.tourist.tourist_lname=this.TouristLastname.value;
   this.tourist.tourist_place=this.TouristPlace.value;
   this.tourist.tourist_numberofdate=this.TouristNumberofdate.value;
   this.tourist.tourist_age=this.TouristAge.value;
   this.tourist.tourist_gender=this.TouristGender.value;
   console.log(this.TouristGender.value);

   this.touristservice.updateTourist(this.tourist.tourist_id,this.tourist).subscribe(
    data => {     
      this.isupdated=true;
      this.touristservice.getTouristList().subscribe(data =>{
        this.tourists =data
        })
    },
    error => console.log(error));
  }

  get TouristName(){
    return this.touristupdateform.get('tourist_name');
  }

  get TouristLastname(){
    return this.touristupdateform.get('tourist_lname');
  }

  get TouristPlace(){
    return this.touristupdateform.get('tourist_place');
  }

  get TouristNumberofdate(){
    return this.touristupdateform.get('tourist_numberofdate');
  }

  get TouristAge(){
    return this.touristupdateform.get('tourist_age');
  }


  get TouristId(){
    return this.touristupdateform.get('tourist_id');
  }
  
  get TouristGender(){
    return this.touristupdateform.get('tourist_gender');
  }
  changeisUpdate(){
    this.isupdated=false;
  }
}
