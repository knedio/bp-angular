import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthenticationService } from '_core/authentication/authentication.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email: string
  errorMessage: string
  form: FormGroup
  submitted: Boolean = false

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.onSetValidation()
  }

  get f() {
    // console.log('this.form.controls', this.form.controls)
    return this.form.controls
  }
  
  onSetValidation(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },
    )
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = ''
    if ( !this.form.invalid ) {
      this.authService.login(this.form.value)
        .subscribe(
          (res: any) => {
            this.router.navigate(['/home']);
          },
          (err: any) => {
            console.log('test err', err)
            if( err?.error?.message ) {
              this.errorMessage = err.error.message
            }
          }
        )
    }
}

}
