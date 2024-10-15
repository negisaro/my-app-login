import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingreso } from '../../interfaces/ingreso.interface';
import { IngresoService } from '../../services/ingreso.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VehiculoService } from '../../../vehiculo/services/vehiculo.service';
import { Vehiculo } from '../../../vehiculo/interfaces/vehiculo.interface';


@Component({
  selector: 'ingreso-add-ingreso',
  templateUrl: './add-ingreso.component.html',
  styleUrl: './add-ingreso.component.css',
})
export class AddIngresoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private vl = Validators;

  ingresos: Ingreso[] = [];
  vehiculos: Vehiculo[] = [];

  ngOnInit(): void {
    this.dataVehiculos();
  }

  public ingresoForm: FormGroup = this.fb.group({
    id:                [0],
    fechaIngreso:      ['', [this.vl.required]],
    producidoDiario:   [0, [this.vl.required, this.vl.pattern(/^[0-9]*$/)]],
    descripcion:       ['', [this.vl.required]],

    vehiculo: this.fb.group({
      id:             [0, [this.vl.required]],
    }),
  });

  constructor(
    private ingresoService: IngresoService,
    private vehiculoService: VehiculoService,
    private router: Router
  ) {}

  dataVehiculos(): void {
    this.vehiculoService
      .getPVehiculo()
      .subscribe((vehiculos) => (this.vehiculos = vehiculos));
  }

  get currentIngreso(): Ingreso {
    const ingreso = this.ingresoForm.value as Ingreso;
    return ingreso;
  }

  onSubmit(): void {

    if (this.ingresoForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes diligenciar todos los campos!',
      });
      return;
    }

    if (this.currentIngreso.id) {

      this.ingresoService.updateIngreso(this.currentIngreso).subscribe({
        next: (ingresos) => {
          console.log(ingresos);
          this.router.navigateByUrl('/dashboard/ingreso/list-ingresos'),
            Swal.fire({
              title: 'Actualizado ingreso!',
              text: 'Ingreso actualizado con exito!',
              icon: 'success',
            });
          return;
        },
      });
    }

    this.ingresoService.addIngreso(this.currentIngreso).subscribe({
      next: (ingresos) => {
        console.log(ingresos);
        this.router.navigateByUrl('/dashboard/ingreso/list-ingresos'),
          Swal.fire({
            title: 'Nuevo ingreso!',
            text: 'Creado con exito!',
            icon: 'success',
          });
      },
    });

  }

  onReset(): void {
    this.ingresoForm.reset();
  }
}
