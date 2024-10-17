import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../interfaces/ingreso.interface';
import { IngresoService } from '../../services/ingreso.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'ingreso-list-ingreso',
  templateUrl: './list-ingreso.component.html',
  styleUrl: './list-ingreso.component.css'
})

export class ListIngresoComponent implements OnInit{

  ingresos: Ingreso[] = [];

  constructor(
    private ingresoService: IngresoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataIngresos();
  }

  dataIngresos(){
    this.ingresoService.lisIngreso().subscribe(ingresos => this.ingresos = ingresos)
    console.log(this.ingresos);
  }

  onDeleteIngreso(id: number): void {
    Swal.fire({
      title: 'Seguro que quiere eliminar?',
      text: 'Cuidado el ingreso sera eliminado del sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ingresoService.deleteIngresoById(id).subscribe(() => {
          this.ingresos = this.ingresos.filter(ingresos => ingresos.id !== id)
          this.router
            .navigate(['/dashboard/ingreso/list-ingresos'], {
              skipLocationChange: true,
            })
            .then(() => {
              this.router.navigate(['/dashboard/ingreso/list-ingresos'], {
                state: {},
              });
            });
        });
        Swal.fire({
          title: 'Eliminado!',
          text: 'Ingreso eliminado con exito.',
          icon: 'success',
        });
      }
    });
  }

}
