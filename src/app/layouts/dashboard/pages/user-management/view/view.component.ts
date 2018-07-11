import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../shared/sevices/users/users.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private users: Array<object>;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAllUsers().pipe(first()).subscribe( res => {
      this.users = res;
    });
  }

  changeStatus(user){
    user['activated'] = !user['activated'];
    this.userService.updateUser(user).pipe(first()).subscribe( res => {
      console.log(res);
    });
  }
}
