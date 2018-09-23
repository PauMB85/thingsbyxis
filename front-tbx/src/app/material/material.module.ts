import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRadioModule,
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
    MatInputModule,
    MatFormFieldModule
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
    MatInputModule,
    MatFormFieldModule
  ]
})

export class MaterialModule { }
