import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule],
  exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule]
})
export class MaterialModule {}
