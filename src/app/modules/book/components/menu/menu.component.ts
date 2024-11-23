import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
// import {KeycloakService} from '../../../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // constructor(
  //   private keycloakService: KeycloakService
  // ) {
  // }

  constructor(private router: Router) {}


    ngOnInit(): void {
      const linkColor = document.querySelectorAll('.nav-link');
      linkColor.forEach(link => {
        if (window.location.href.endsWith(link.getAttribute('href') || '')) {
          link.classList.add('active');
        }
        link.addEventListener('click', () => {
          linkColor.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        });
      });
    }

  async logout() {
    // this.keycloakService.logout();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}