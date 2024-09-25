import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    name: '',
    lastName: '',
    correoElectronico: ['', [Validators.email, Validators.required]],
    username: ['',[Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
