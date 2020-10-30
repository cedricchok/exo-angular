import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = ['home', 'cat', 'form'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }


  constructor() { }

  ngOnInit() {
  }

}
