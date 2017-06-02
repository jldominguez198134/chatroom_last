import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  arrayUsers: Array<Object>;

  /*@Input() arrayUsers: Array<Object>;*/

  constructor(private usersService: UsersService) {
    this.arrayUsers = [];
    this.usersService.getUsers()
      .subscribe(users => {
        this.arrayUsers = users['results'];
        console.log(this.arrayUsers, users);
      });
  }

  ngOnInit() {
  }

}
