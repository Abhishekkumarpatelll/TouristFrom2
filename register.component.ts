import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { from } from 'rxjs';
import { Partner } from '../partner';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private partnerService:PartnerService) { }

  ngOnInit() {
  }

  partner : Partner=new Partner();
  submitted = false;

  form=new FormGroup({
    partnerName:new FormControl(),
    partnerLastname:new FormControl(),
    partnerPlace:new FormControl(),
    partnerNumberofdate:new FormControl()
  });

  register(registerform){
    this.partner=new Partner();
    this.partner.partnerName=this.partnerName.value;
    this.partner.partnerLastname=this.partnerLastname.value;
    this.partner.partnerPlace=this.partnerPlace.value;
    this.partner.partnerNumberofdate=this.partnerNumberofdate.value;
    this.partner.partnerAge=this.partnerAge.value;
    this.submitted=true;
    this.save();
  }

  save() {
    this.partnerService.createPartner(this.partner)
      .subscribe(data => console.log(data), error => console.log(error));
    this.partner = new Partner();
  }

  get partnerName(){
    return this.form.get('partnerName');
  }

  get partnerLastname(){
    return this.form.get('partnerLastname');
  }

  get partnerPlace(){
    return this.form.get('partnerPlace');
  }

  get partnerNumberofdate(){
    return this.form.get('partnerNumberofdate');
  }

  get partnerAge(){
    return this.form.get('partnerAge');
  }

}
