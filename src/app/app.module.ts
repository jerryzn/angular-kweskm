import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { MaterialModules } from './material.module';
import {
  MatSortModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatDividerModule,
  MatTooltipModule,
  MatListModule,
  MatOptionModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatExpansionModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
} from '@angular/material'; //MAT_DIALOG_DEFAULT_OPTIONS
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    //MatFormFieldModule,
    //MaterialModules
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
