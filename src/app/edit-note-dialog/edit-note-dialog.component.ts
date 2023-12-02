import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {
    CdkDragDrop,
    CdkDrag,
    CdkDragHandle,
    CdkDropList,
    CdkDropListGroup,
    moveItemInArray,
    transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CardBlockType, CardBlock, CardData } from '../card-data';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-edit-note-dialog',
  templateUrl: './edit-note-dialog.component.html',
  styleUrls: ['./edit-note-dialog.component.css']
})
export class EditNoteDialogComponent implements OnInit {

    @ViewChild('titleInput') titleInput!: ElementRef;
    @ViewChild('autosize') autosize!: CdkTextareaAutosize;


    titleEdit: boolean = false;
    cardData: CardData = {
        title: "Nouvelle note",
        subtitle: "",
        logoUrl: "",
        blocks: [],
        tags: []
    };

    selectedTag: string = "";

    constructor(private _ngZone: NgZone) { }

    ngOnInit(): void {
    }

    triggerResize() {
      // Wait for changes to be applied, then trigger textarea resize.
      this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    }

    toggleEdit(){
        this.titleEdit = ! this.titleEdit;
        setTimeout(()=>{
            this.titleInput.nativeElement.focus();
        },0);
    }

    addBlock(){
        //default block
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

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

}
