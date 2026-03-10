import { Component } from '@angular/core';
import { VerifyComponent } from './verify/verify.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerifyComponent],
  template: '<app-verify />',
})
export class AppComponent {}
