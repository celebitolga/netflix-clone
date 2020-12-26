import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputBlur($event:any) {
    if($event.target.value != '') {
      $event.target.parentNode.children[1].setAttribute('class','input-label-selected text-gray');
    } else {
      $event.target.parentNode.children[1].setAttribute('class','content-form-lock-label');
    }
  }

}
