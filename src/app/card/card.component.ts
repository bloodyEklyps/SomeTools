import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../notes-page/notes-page.component';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() title: string = "";
    @Input() cardData: CardData = {
        title: "woof woof",
        subtitle: "much wow"
    };

    constructor() { }

    ngOnInit(): void {
    }

}
