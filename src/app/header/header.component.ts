import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {current} from 'codelyzer/util/syntaxKind';
import {User} from '../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    currentUser: User;
    isConnected: boolean;
    user: any;
    searchValue: any = {
        content : ''
    };

    constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    console.log('this.currentUser');
    console.log(this.currentUser);
    if (this.currentUser !== null) {
        this.isConnected = true;
    } else {
        this.isConnected = false;
    }
  }

    search(searchValue) {
      console.log('le modele ');
                  console.log(this.searchValue.content);
      this.userService.search(this.searchValue.content)
          .subscribe(
              data => {
                this.searchValue = data;
                  console.log('le searchValue est');
                  console.log(data);
              },
              error => {
                  console.log('une erreur ');
              });
    }


}
