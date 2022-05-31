import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sidenavContent: string[] = ['Elem1', 'Elem2', 'Elem3'];
  

}
