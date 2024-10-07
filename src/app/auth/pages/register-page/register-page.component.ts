import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../../user/services/user.service';

import { User } from '../../../user/interfaces/user.interface';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {

  //private users: User[] = [];


  private fb = inject(FormBuilder);
  private router      = inject( Router )
  private vl = Validators;

  public myForm: FormGroup = this.fb.group({
    id:                  [0],
    name:                ['', [this.vl.required]],
    lastName:            ['', [this.vl.required]],
    username:            ['', [this.vl.required]],
    correoElectronico:   [
      '',
      [
        this.vl.required,
        this.vl.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
    ],
    password:             ['', [this.vl.required, this.vl.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!%*?&@#])([A-Za-z\d$!%*?&@#]|[^ ]){8,16}$/)]],
  });

  constructor(private userService: UserService) {}

  get currentUser(): User {
    const user = this.myForm.value as User;
    return user;
  }

  onSubmit(): void {
    if (this.myForm.invalid) return;

  /*   if (this.currentUser._id) {
      this.userService.updateUser(this.currentUser).subscribe(user => {
        //TODO: alert de confirmacion
      });
      return;
    } */

      this.userService.addUser(this.currentUser).subscribe({
        next: (userNew) => {
          console.log(this.currentUser);
          this.router.navigate(['/login'], {
            state: {
              users: this.currentUser,

            },
          });

          Swal.fire({
            title: 'Creado nuevo usuario!',
            text: 'Usuario creado con exito!',
            icon: 'success',
          });
        },
        error: (err) => {
          Swal.fire({

            title: 'Error al Crear usuario!',
            text: 'err.error',
            icon: 'success'
          });
          console.log(err.error);
          console.log(err.status);

        },
      });

  }


}

