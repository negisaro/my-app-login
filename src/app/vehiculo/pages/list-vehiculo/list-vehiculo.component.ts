import { Component } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculo.interface';
import { VehiculoService } from '../../services/vehiculo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'vehiculo-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrl: './list-vehiculo.component.css'
})
export class ListVehiculoComponent {

  vehiculos: Vehiculo[] = [];

  constructor(
    private vehiculoService: VehiculoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vehiculoService.getPVehiculo().subscribe(vehiculos => this.vehiculos = vehiculos)
    console.log(this.vehiculos);
  }

  onDeleteVehiculo(id: number): void {
    Swal.fire({
      title: 'Seguro que quiere eliminar?',
      text: 'Cuidado el vehiculo sera eliminado del sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        this.vehiculoService.deleteVehiculoById(id).subscribe(() => {
          this.router
            .navigate(['/dashboard/vehiculo/list-vehiculos'], {
              skipLocationChange: true,
            })
            .then(() => {
              this.router.navigate(['/dashboard/vehiculo/list-vehiculos'], {
                state: {},
              });
            });
        });
        Swal.fire({
          title: 'Eliminado!',
          text: 'Vehiculo eliminado con exito.',
          icon: 'success',
        });
      }
    });
  }
}
