import { Component, OnInit } from '@angular/core';
import { Propietario } from '../../interfaces/propietario.interface';
import { Router } from '@angular/router';
import { PropietarioService } from '../../services/propietario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'propietario-list-propietario',
  templateUrl: './list-propietario.component.html',
  styleUrl: './list-propietario.component.css',
})
export class ListPropietarioComponent implements OnInit {

  propietarios: Propietario[] = [];

  constructor(
    private propietarioService: PropietarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.propietarioService
      .getPropietario()
      .subscribe((propietarios) => (this.propietarios = propietarios)
    );
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
          this.router.navigate(['/propietario/list-propietarios'], {
            skipLocationChange: true,
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
}
