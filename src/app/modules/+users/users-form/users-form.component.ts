import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user.interface';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  lati: number;
  lng: number;

  constructor(private formBuilder: FormBuilder) {

    this.lati = 51.678418;
    this.lng = 7.809007;

    this.myForm = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      address: this.formBuilder.group({
        lat: ['', <any>Validators.required],
        long: ['', <any>Validators.required]
      })
    });
  }

  ngOnInit() {
  }

  save(model: User, isValid: boolean) {
    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }

}
