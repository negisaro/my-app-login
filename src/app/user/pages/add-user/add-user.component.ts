import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
/*
  users: User[] = [];
  private sharingData: SharingDataService = new SharingDataService;
  private router: Router = new Router;

  constructor(private userService: UserService){}

  addUserM() {
    this.sharingData.newUserEventEmitter.subscribe((user) => {
      if (user.id > 0) {
        this.userService.updateUser(user).subscribe({
          next: (userUpdated) => {
            this.users = this.users.map((u) =>
              u.id == userUpdated.id ? { ...userUpdated } : u
            );
            this.router.navigate(['/users'], {
              state: {
                users: this.users,

              },
            });

            Swal.fire({
              title: 'Actualizado!',
              text: 'Usuario editado con exito!',
              icon: 'success',
            });
          },
          error: (err) => {
            // console.log(err.error)
            if (err.status == 400) {
              this.sharingData.errorsUserFormEventEmitter.emit(err.error);
            }
          },
        });
      } else {
        this.userService.addUser(user).subscribe({
          next: (userNew) => {
            console.log(user);
            this.users = [...this.users, { ...userNew }];

            this.router.navigate(['/users'], {
              state: {
                users: this.users,

              },
            });

            Swal.fire({
              title: 'Creado nuevo usuario!',
              text: 'Usuario creado con exito!',
              icon: 'success',
            });
          },
          error: (err) => {
            console.log(err.error);
            console.log(err.status);
            if (err.status == 400) {
              this.sharingData.errorsUserFormEventEmitter.emit(err.error);
            }
          },
        });
      }
    });
  } */


}
