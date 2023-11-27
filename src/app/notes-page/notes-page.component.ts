import { Component, OnInit } from '@angular/core';
import { CardBlockType, CardData } from '../card-data';
import noteData from '../../assets/note-data.json';

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
        this.cardList = noteData;
    }
}

