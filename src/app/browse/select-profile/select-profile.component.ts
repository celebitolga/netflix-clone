import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { User } from './user';


@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.scss']
})
export class SelectProfileComponent implements OnInit {

  users: [User];
  selectedUserCheck: boolean;
  selectedUser: User = {
    id: undefined,
    name: undefined,
    imageUrl: undefined
  };
  currentTime: any;
  showPage: boolean;

  carusels: any;


  slides = [
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZZxdc21ndhEsmOO-EQZ1CpsjMDyrpmgZzc3qgNJf0b_DhnBjkNSnqun1Q_pIs75LlLIaWNHzLLu5g4NRbnI1oYW2zwPmY1fc_keCisYUVDxeeJRA_Zg_IM_gdx3.jpg?r=937"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZZxdc21ndhEsmOO-EQZ1CpsjMDyrpmgZzc3qgNJf0b_DhnBjkNSnqun1Q_pIs75LlLIaWNHzLLu5g4NRbnI1oYW2zwPmY1fc_keCisYUVDxeeJRA_Zg_IM_gdx3.jpg?r=937"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZZxdc21ndhEsmOO-EQZ1CpsjMDyrpmgZzc3qgNJf0b_DhnBjkNSnqun1Q_pIs75LlLIaWNHzLLu5g4NRbnI1oYW2zwPmY1fc_keCisYUVDxeeJRA_Zg_IM_gdx3.jpg?r=937"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZcs_dL1SVlkJTX3NHVymAWmpSnhjNGdXj-EJkY2mr65acQNCbHwc0wBibdb-MJPN29jTym2k0WsPVGTGpYMRvixUxfOZ9O6ImJDDMVeUE8J6QFb-9Q1KqQtgHBB.jpg?r=230"},
    {img: "https://occ-0-4451-3467.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZZxdc21ndhEsmOO-EQZ1CpsjMDyrpmgZzc3qgNJf0b_DhnBjkNSnqun1Q_pIs75LlLIaWNHzLLu5g4NRbnI1oYW2zwPmY1fc_keCisYUVDxeeJRA_Zg_IM_gdx3.jpg?r=937"}
    // {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 6, "slidesToScroll": 6, accessibility: false, draggable: false,
  prevArrow: ''
  // , prevArrow: '<div>Deneme</div>'
  // ,responsive: [{

  //   breakpoint: 1024,
  //   settings: {
  //     slidesToShow: 3,
  //     infinite: true
  //   }

  // }, {

  //   breakpoint: 600,
  //   settings: {
  //     slidesToShow: 2,
  //     dots: true
  //   }

  // }, {

  //   breakpoint: 300,
  //   settings: "unslick" // destroys slick

  // }]
};

  constructor(
    private postService: PostService
  ) {
    this.postService.getUsers()

      .subscribe(response => {
        //Get user data
        this.users = response;
        this.carusels = this.users.map(user => {
          return {
            name: user.name,
            imageUrl: user.imageUrl
          }
        });
      })
  }

  ngOnInit(): void {
    this.isSelectedUser(); //for go browse

    //Some event listinener
    this.eventListener();
  }


  eventListener() {

    console.log();

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        const headerScroll = document.querySelector('#deneme');
        headerScroll?.classList.add('Browse-header-scroll')
      } else {
        const headerScroll = document.querySelector('#deneme');
        headerScroll?.classList.remove('Browse-header-scroll')
      }
    })
  }

  isSelectedUser() {

    if (!localStorage.getItem('selectedUser') || !localStorage.getItem('selectedTime')) {
      // if nothink seleced user, its show users
      // Seçilmiş yoksa userlar gösterilecek
      this.selectedUserCheck = false;

    } else {
      // İf selected user have, its check selected time
      //Seçilmiş var ise browse gösterilecek ve seçilmiş saatine bakılacak
      this.selectedUser = JSON.parse(localStorage.getItem('selectedUser') || '{}');
      this.checkTime();
    }
  }

  checkTime() {
    let currentTime = new Date().getTime();
    const time = JSON.parse(localStorage.getItem('selectedTime') || '{}');

    if ((((currentTime - time) / 1000) / 60) > 60) {
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
    this.selectedUser.imageUrl = user.imageUrl;
    this.currentTime = new Date();

    localStorage.setItem('selectedUser', JSON.stringify(this.selectedUser));
    localStorage.setItem('selectedTime', JSON.stringify(this.currentTime.getTime()));

    this.selectedUserCheck = true;
    this.showPage = true;
  }

}

