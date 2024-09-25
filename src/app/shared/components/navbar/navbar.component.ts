import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  private authService = inject( AuthService );
  public user = computed(() => this.authService.currentUser() );
  onLogout() {
    this.authService.logout();
  }
}
