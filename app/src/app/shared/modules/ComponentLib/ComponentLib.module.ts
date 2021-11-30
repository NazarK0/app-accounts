import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import NavbarComponent from "./components/navbar/Navbar.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export default class ComponentLibModule {}
