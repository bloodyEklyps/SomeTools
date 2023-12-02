import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//angular material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NotesPageComponent } from './notes-page/notes-page.component';
import { CardComponent } from './card/card.component';
import { EditNoteDialogComponent } from './edit-note-dialog/edit-note-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        NotesPageComponent,
        CardComponent,
        EditNoteDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        MatSnackBarModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        DragDropModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
