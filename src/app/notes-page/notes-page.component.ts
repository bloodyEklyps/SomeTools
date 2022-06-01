import { Component, OnInit } from '@angular/core';
import { CardBlockType, CardData } from '../card-data';

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
        subtitle: "much wow",
        logo: "a",
        blocks:  [{
            type: CardBlockType.TEXT,
            content: "truc",
            position: {
                x:0,y:0,width:0,length:0
            },
        }],
        tags: [""]
    },
    {
        title: "wooouaf wouaaaf",
        subtitle: "such wow",
        logo: "a",
        blocks:  [{
            type: CardBlockType.TEXT,
            content: "truc",
            position: {
                x:0,y:0,width:0,length:0
            },
        }],
        tags: [""]
    }];
}

