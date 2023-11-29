import { Component, OnInit } from '@angular/core';
import { CardBlockType, CardData } from '../card-data';
import noteData from '../../assets/note-data.json';
import {MatDialog} from '@angular/material/dialog';
import {EditNoteDialogComponent} from '../edit-note-dialog/edit-note-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
    selector: 'notes-page',
    templateUrl: './notes-page.component.html',
    styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent implements OnInit {

    constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

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

    saveCardList(){
        //TODO
        console.log("save");
        this.snackBar.open("Note sauvegardée :p"); //TODO a voir pour configuer la popup
    }

    editNewNote(){
        console.log("open edit note view");

        const dialogRef = this.dialog.open(EditNoteDialogComponent, {
            height: "90%",
            width: "90%",
          });

        dialogRef.afterClosed().subscribe(result => {
            console.log("Dialog result: ${result}");
            if(result){
                this.saveCardList();
            } else {
                console.log("cancel");
            }
        });
    }
}

