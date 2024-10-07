import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropietarioService } from '../../services/propietario.service';
import Swal from 'sweetalert2';
import { Propietario } from '../../interfaces/propietario.interface';

@Component({
  selector: 'propietario-list-propietario',
  templateUrl: './list-propietario.component.html',
  styleUrl: './list-propietario.component.css',
})
export class ListPropietarioComponent implements OnInit {
  propietarios: Propietario[] = [];
  paginator: any = {};
  private _pageProductEventEmitter = new EventEmitter();

  constructor(
    private propietarioService: PropietarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.propietarioService
      .getPropietario()
      .subscribe((propietarios) => (this.propietarios = propietarios));
    this.pagePropietarioEvent();
    console.log(this.propietarios);
  }

  onDeletePropietario(id: number): void {
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
        this.propietarioService.deletePropietarioById(id).subscribe(() => {
          this.router
            .navigate(['/dashboard/propietario/list-propietarios'], {
              skipLocationChange: true,
            })
            .then(() => {
              this.router.navigate(
                ['/dashboard/propietario/list-propietarios'],
                {
                  state: {},
                }
              );
            });
        });
        Swal.fire({
          title: 'Eliminado!',
          text: 'Propietario eliminado con exito.',
          icon: 'success',
        });
      }
    });
  }

  pagePropietarioEvent() {
    if (
      this.propietarios == undefined ||
      this.propietarios == null ||
      this.propietarios.length == 0
    ) {
      this.route.paramMap.subscribe((params) => {
        const page = +(params.get('page') || '0');
        console.log(page);
        this.propietarioService.getPageable(page).subscribe((pageable) => {
          this.propietarios = pageable;
          this.paginator = pageable;
          console.log(pageable)
          this._pageProductEventEmitter.emit({
            propietarios: this.propietarios,
            paginator: this.paginator,
          });
        });
      });
    }
  }
}
