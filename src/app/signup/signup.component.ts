import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      password: [''],
      mobile: [''],
    });
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3000/signUp', this.signUpForm.value)
      .subscribe(
        (res) => {
          alert('Signup successful');
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
