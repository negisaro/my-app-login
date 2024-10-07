import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service';
import { Router } from '@angular/router';
import { Propietario, Vehiculo } from '../../interfaces/vehiculo.interface';
import Swal from 'sweetalert2';
import { PropietarioService } from '../../../propietario/services/propietario.service';

@Component({
  selector: 'vehiculo-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  styleUrl: './add-vehiculo.component.css',
})
export class AddVehiculoComponent implements OnInit {

  private fb = inject(FormBuilder);
  propietarios: Propietario[] = [];
  private vl = Validators;
  errores: string[] = [];


  public vehiculoForm: FormGroup = this.fb.group({

    id:                 [0],
    placa:              ['', [this.vl.required, this.vl.minLength(6)]],
    marca:              ['', [this.vl.required]],
    modeloAnio:         ['', [this.vl.required]],
    modeloCarroceria:   ['', [this.vl.required]],
    tipoCombustible:    ['', [this.vl.required]],
    propietario:        ['', [this.vl.required]],
  });

  constructor(
    private vehiculoService: VehiculoService,
    private propietarioService: PropietarioService,
    private router: Router
  ) {}

  dataVehiculos(): void {
    this.propietarioService
      .getPropietario()
      .subscribe((propietarios) => (this.propietarios = propietarios));
  }

  get currentVehiculo(): Vehiculo {
    const vehiculo = this.vehiculoForm.value as Vehiculo;
    return vehiculo;
  }

  onSubmit(): void {
    console.log('inicioo onSumit')

    if (this.vehiculoForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes diligenciar todos los campos!',
      });
      return;
    }

    if (this.currentVehiculo.id) {
      console.log('update onSumit')

      this.vehiculoService.updateVehiculo(this.currentVehiculo).subscribe({
        next: (vehiculo) => {
          console.log(vehiculo);
          this.router.navigateByUrl('/dashboard/vehiculo/list-vehiculos'),
          Swal.fire({
            title: 'Actualizado vehiculo!',
            text: 'Vehiculo actualizado con exito!',
            icon: 'success',
          });
          return;
        },
      });
    }


    this.vehiculoService.addVehiculo(this.currentVehiculo).subscribe({
      next: (vehiculo) => {
        console.log(vehiculo);
        this.router.navigateByUrl('/dashboard/vehiculo/list-vehiculos'),
        Swal.fire({
          title: 'Creado nuevo vehiculo!',
          text: 'Vehiculo creado con exito!',
          icon: 'success',
        });
        (errors: { error: { errors: string[]; }; status: string; }) => {
          this.errores = errors.error.errors as string[];
          console.error('Código del error desde el backend: ' + errors.status);
          console.error(errors.error.errors);
          console.log(errors);
        }
      },
    });
    console.log('despues de aadd onSumit')
  }

  ngOnInit(): void {
    this.dataVehiculos();
  }

  onReset(): void {
    this.vehiculoForm.reset();
  }
}

