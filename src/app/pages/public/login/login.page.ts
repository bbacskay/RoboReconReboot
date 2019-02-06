import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public username: string;
  public password: string;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) { 

    this.loginForm = formBuilder.group({
        user: [''],
        password: ['']
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.value.user, this.loginForm.value.password);
  }

  

}
