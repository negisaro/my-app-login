import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'user-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent{

  public users: User [] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUser().subscribe(users => this.users = users)
  }

  onDeleteUser(id: number ): void {
    this.userService.deleteProductById(id).subscribe(users => this.users);
  }


}
