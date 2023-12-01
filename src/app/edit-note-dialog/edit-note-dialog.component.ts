import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CardBlockType, CardBlock, CardData } from '../card-data';

@Component({
  selector: 'app-edit-note-dialog',
  templateUrl: './edit-note-dialog.component.html',
  styleUrls: ['./edit-note-dialog.component.css']
})
export class EditNoteDialogComponent implements OnInit {

    @ViewChild('titleInput') titleInput!: ElementRef;

    titleEdit: boolean = false;
    cardData: CardData = {
        title: "Nouvelle note",
        subtitle: "",
        logoUrl: "",
        blocks: [],
        tags: []
    };

    selectedTag: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    toggleEdit(){
        this.titleEdit = ! this.titleEdit;
        setTimeout(()=>{
            this.titleInput.nativeElement.focus();
        },0);
    }

    addBlock(){
        this.cardData.blocks.push({
            type: CardBlockType.TEXT,
            position: {
                x : 0,
                y : 0,
                width : 0,
                length : 0,
            },
            content: "default content",
        });
    }

    addTag()
    {
        if((this.selectedTag != "") && (!this.cardData.tags.includes(this.selectedTag))){
            this.cardData.tags.push(this.selectedTag)
        }
    }
}
