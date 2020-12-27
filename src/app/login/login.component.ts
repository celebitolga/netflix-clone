import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  show($event: any) {

    if ($event.target.innerText == 'Göster') {
      $event.target.parentNode.firstChild.setAttribute('type', 'text');
      $event.target.innerText = 'Gizle';
    } else {
      $event.target.parentNode.firstChild.setAttribute('type', 'password');
      $event.target.innerText = 'Göster';
    }
  }

  isPasswordValid($event: any) {
    if (($event.target.value.length < 4) || ($event.target.value.length > 60)) {
      $event.target.classList.add("inputErrorBorder");
      $event.target.parentElement.nextSibling.setAttribute('class', 'inputError');

      if ($event.target.value != '') {
        $event.target.parentNode.children[1].setAttribute('class', 'input-label-selected');
      } else {
        $event.target.parentNode.children[1].setAttribute('class', 'input-label');
      }

    } else {
      $event.target.parentNode.children[1].setAttribute('class', 'input-label-selected');
      $event.target.parentElement.nextSibling.setAttribute('class', 'displayNone');
      $event.target.classList.remove("inputErrorBorder");
    }
  }

  isEmailValid($event: any) {
    if (this.validateEmail($event.target.value)) {
      $event.target.parentNode.children[1].setAttribute('class', 'input-label-selected');
      $event.target.parentElement.nextSibling.setAttribute('class', 'displayNone');
      $event.target.classList.remove("inputErrorBorder");
    } else {
      if ($event.target.value != '') {
        $event.target.parentNode.children[1].setAttribute('class', 'input-label-selected');
      } else {
        $event.target.parentNode.children[1].setAttribute('class', 'input-label');
      }
      $event.target.classList.add("inputErrorBorder");
      $event.target.parentElement.nextSibling.setAttribute('class', 'inputError');
    }
  }

  validateEmail(email: string) {
    console.log(email);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  join() {
    const loginEmail =  (document.getElementById('loginEmail') as HTMLInputElement).value;
    const loginPassword = (document.getElementById('loginPassword') as HTMLInputElement).value;
    const displayNone = document.querySelectorAll('#displayNone');

    if(loginEmail == 'admin@admin.com' && loginPassword == 'admin') {
      this.authService.login();
      this.router.navigate(['browse']);
    } else {
      displayNone.forEach(item => {
        item.setAttribute('class','inputError')
      })
    }
  }

}
