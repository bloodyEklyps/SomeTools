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
        this.loadCardList();
    }

    sidenavContent: string[] = ['Elem1', 'Elem2', 'Elem3'];

    cardList: CardData[] = [{
        title: "Waiting data load...",
        subtitle: "Waiting data load...",
        logoUrl: "",
        blocks: [],
        tags: []
    }];

    loadCardList(){
        this.cardList = [{
            title: "woof woof",
            subtitle: "much wow",
            logoUrl: "https://material.angular.io/assets/img/examples/shiba1.jpg",
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
            title: "on prend des note",
            subtitle: "blockNote?",
            logoUrl: "https://static.vecteezy.com/system/resources/thumbnails/004/852/860/small/notes-notepad-notebook-memo-diary-paper-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg",
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
}

