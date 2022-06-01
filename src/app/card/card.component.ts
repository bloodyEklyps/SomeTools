import { Component, Input, OnInit } from '@angular/core';
import { CardBlockType, CardData } from '../card-data';


@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() title: string = "";
    @Input() cardData: CardData = {
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
    };

    constructor() { }

    ngOnInit(): void {
    }

}
