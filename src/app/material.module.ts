import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule {}
