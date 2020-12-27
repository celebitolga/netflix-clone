import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { User } from './user';

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.scss']
})
export class SelectProfileComponent implements OnInit {

  users: [any];
  selectedUserCheck: boolean;
  selectedUser: User = {
    id: undefined,
    name: undefined,
    imageUrl: undefined
  };
  currentTime: any;
  showPage:boolean;

  constructor(
    private postService: PostService
  ) {
    this.postService.getUsers()
      .subscribe(response => {
        //Get user data
        this.users = response;
      })
  }

  ngOnInit(): void {
    this.isSelectedUser(); //for go browse
  }

  isSelectedUser() {

    if(!localStorage.getItem('selectedUser')) {
      // if nothink seleced user, its show users
      // Seçilmiş yoksa userlar gösterilecek
      this.selectedUserCheck = false;

    } else {
      // İf selected user have, its check selected time
      //Seçilmiş var ise browse gösterilecek ve seçilmiş saatine bakılacak
      this.checkTime();
    }
  }

  checkTime() {
    let currentTime = new Date().getTime();
    const time = JSON.parse(localStorage.getItem('selectedTime')|| '{}');

    if((((currentTime - time)/1000)/60) > 60) {
      // 60dk dan fazla olmuşsa yeniden kullanıcı seçecek
      localStorage.removeItem('selectedUser');
      this.selectedUserCheck = false;
      this.showPage = false;
    } else {
      // 60dk olmadıysa izlemeye edevam edebilecek
      this.selectedUserCheck = true;
      this.showPage = true;
    }

  }

  selectUser(user: User) {
    this.selectedUser.id = user.id;
    this.selectedUser.name = user.name;
    this.currentTime = new Date();

    localStorage.setItem('selectedUser', JSON.stringify(this.selectedUser));
    localStorage.setItem('selectedTime', JSON.stringify(this.currentTime.getTime()));

    this.selectedUserCheck = true;
    this.showPage = true;
  }
}

