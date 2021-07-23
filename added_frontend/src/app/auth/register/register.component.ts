import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faEyeSlash, faEnvelopeOpen} from "@fortawesome/free-regular-svg-icons";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faEnvelopeOpen = faEnvelopeOpen;
  constructor(private library: FaIconLibrary) {
    library.addIcons(faEyeSlash, faEnvelopeOpen)
  }

  ngOnInit(): void {

  }
}
