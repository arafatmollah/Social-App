import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
})
export class Nav {
  protected accountService = inject(AccountService);
  protected creds: any = {};

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (result: any) => {
        console.log(result), (this.creds = {});
      },
      error: (error: any) => alert('not found'),
    });
  }

  logout() {
    this.accountService.logout();
  }
}
