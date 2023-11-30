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
        blocks:  [],
        tags: [""]
    };

    constructor() { }

    ngOnInit(): void {
    }

    toggleEdit(){
        this.titleEdit = ! this.titleEdit;
        setTimeout(()=>{
            this.titleInput.nativeElement.focus();
        },0);
    }
}
