import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginform!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    if (this.loginform.valid) {
      const email = this.loginform.value.email;
      const password = this.loginform.value.password;

      this.auth.login(email, password);
    }
  }
  submitLogin() {
    //   this.http.get<any>('http://localhost:3000/signUp').subscribe(
    //     (res) => {
    //       const user = res.find((a: any) => {
    //         return (
    //           a.email === this.loginform.value.email &&
    //           a.password === this.loginform.value.password
    //         );
    //       });
    //       if (user) {
    //         alert('login successful');
    //         this.loginform.reset();
    //         this.router.navigate(['cart']);
    //       } else {
    //         alert('user not found');
    //       }
    //     },
    //     (err) => {
    //       alert('something went wrong');
    //     }
    //   );
  }
}
