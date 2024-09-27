import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'user-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent implements OnInit{
  public users: User[] = [];
  private router: Router = new Router();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => (this.users = users));
  }

  onDeleteUser(id: number): void {
    console.log('hice ckkikkkkk')
      Swal.fire({
        title: 'Seguro que quiere eliminar?',
        text: 'Cuidado el usuario sera eliminado del sistema!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
      }).then((result) => {
        if (result.isConfirmed) {
          this.userService.deleteProductById(id).subscribe(() => {
            this.router.navigate(['/user/list-user'], { skipLocationChange: true });
          });
          Swal.fire({
            title: 'Eliminado!',
            text: 'Usuario eliminado con exito.',
            icon: 'success',
          });
        }
      });

  }
}
