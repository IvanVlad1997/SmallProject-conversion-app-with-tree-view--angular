import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './conversion/tree-view/tree-view.component';
import { ConversionComponent } from './conversion/conversion.component';

import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }  from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './conversion/dialog/dialog.component';
import { DialogEditComponent } from './conversion/dialog-edit/dialog-edit.component';
import { ConverisonSpotComponent } from './conversion/converison-spot/converison-spot.component';
import {SELECTED_ITEM_TOKEN} from "./tokens/selectedItemInjectionToken";
import {UNITS} from "./shared/unitsArray";

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    ConversionComponent,

    DialogComponent,

    DialogEditComponent,

    ConverisonSpotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: [
    TreeViewComponent
  ],
  providers: [
    { provide: SELECTED_ITEM_TOKEN, useValue: TreeViewComponent, multi: true}
  ],
  entryComponents:[DialogComponent, DialogEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }