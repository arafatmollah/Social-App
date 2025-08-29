import { Component, inject, Inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';


@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private accountService = inject(AccountService);
  protected creds = {} as RegisterCreds;
  cancelRegister = output<boolean>();

  register() {
    this.accountService.register(this.creds).subscribe({
      next: (user: User) => {
        console.log('Registration successful', user);
        this.cancel();
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
