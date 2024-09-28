import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PropietarioService } from '../../services/propietario.service';
import { Router } from '@angular/router';
import { Propietario } from '../../interfaces/propietario.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'propietario-add-propietario',
  templateUrl: './add-propietario.component.html',
  styleUrl: './add-propietario.component.css'
})
export class AddPropietarioComponent {

  public propietarioForm = new FormGroup({
    id:                 new FormControl(0),
    documento:          new FormControl(''),
    primerNombre:       new FormControl(''),
    segundoNombre:      new FormControl(''),
    primerApellido:     new FormControl(''),
    segundoApellido:    new FormControl(''),
    email:              new FormControl(''),
    telefono:           new FormControl(''),
    direccion:          new FormControl(''),
  });

  constructor(private propietarioService: PropietarioService, private router: Router) {}

  get currentPropietario(): Propietario {
    const propietario = this.propietarioForm.value as Propietario;
    return propietario;
  }

  onSubmit(): void {
    if (this.propietarioForm.invalid) return;

    if (this.currentPropietario.id) {
      this.propietarioService.updatePropietario(this.currentPropietario).subscribe({
        next: (propietario) => {
          console.log(propietario);
          this.router.navigate(['/dashboard/propietario/list-propietarios']);
        },
      });
      Swal.fire({
        title: 'Actualizado propietario!',
        text: 'Propietario actualizado con exito!',
        icon: 'success',
      });
      return;
    }
    this.propietarioService.addPropietario(this.currentPropietario).subscribe({
      next: (propietario) => {
        console.log(propietario);
        this.router.navigate(['/dashboard/propietario/list-propietarios']);
      },
    });
    Swal.fire({
      title: 'Creado nuevo propietario!',
      text: 'Propietario creado con exito!',
      icon: 'success',
    });
  }
}
