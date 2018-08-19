import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCardModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRadioModule,
  MatSidenavModule, MatToolbarModule
} from "@angular/material";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatInputModule
  ]
})

export class MaterialModule { }
