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

    cardList: CardData[] = [{
        title: "woof woof",
        subtitle: "much wow"
    },
    {
        title: "wooouaf wouaaaf",
        subtitle: "such wow"
    }];
}

export interface CardData {
    title: string;
    subtitle: string;
}
