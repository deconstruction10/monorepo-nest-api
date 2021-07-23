import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faEyeSlash = faEyeSlash;
  constructor(private library: FaIconLibrary) {
    library.addIcons(faEyeSlash);
  }

  ngOnInit(): void {
  }

}
