import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';


@Component({
  selector: 'user-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent implements OnInit {
  public users: User[] = [];
  public paginator: any = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private sharingData: SharingDataService,
    private route: ActivatedRoute
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.users = this.router.getCurrentNavigation()?.extras.state!['users'];
      this.paginator =
        this.router.getCurrentNavigation()?.extras.state!['paginator'];
    }
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => (this.users = users));
    this.pageUsersEvent();
  }

  pageUsersEvent() {
    if (
      this.users == undefined ||
      this.users == null ||
      this.users.length == 0
    ) {
      this.route.paramMap.subscribe((params) => {
        const page = +(params.get('page') || '0');
        console.log('hola soy la page' + page);
        this.userService.getPageable(page).subscribe((pageable) => {
          console.log(pageable);
          this.users = [];
          this.paginator = pageable;
          this.sharingData.pageUsersEventEmitter.emit({
            users: this.users,
            paginator: this.paginator,
          });
        });
      });
    }
  }

  onDeleteUser(id: number): void {
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
          this.router
            .navigate(['/dashboard/user/list-user'], {
              skipLocationChange: true,
            })
            .then(() => {
              this.router.navigate(['/dashboard/user/list-user'], {
                state: {},
              });
            });
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
