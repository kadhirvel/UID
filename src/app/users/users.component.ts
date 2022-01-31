import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from "@angular/material/table";
import { User } from '../models/user.model';
import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit { 

  userService!: UsersService;
  user!: User[];  
    /** fetching users data to render in user view */
  constructor(http: HttpClient) {
    this.userService = new UsersService(http);
    this.userService.getUserJSON().subscribe((data: any) => {
      this.user = data; 
      console.log(this.user);
    });
  }

  ngOnInit(): void {
    
  }

}
