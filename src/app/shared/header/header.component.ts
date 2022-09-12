import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[Header]',
  templateUrl: './header.component.html',
  host: {'class': 'header'},
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Where is the world?' 

  constructor() { }

  ngOnInit(): void {
  }

}
