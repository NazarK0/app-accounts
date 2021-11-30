import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import ComponentLibModule from "../shared/modules/ComponentLib/ComponentLib.module";
import HomePageComponent from "./components/@homePage/homepage.component";

import HomeRoutes from "./home.routes";

@NgModule({
  imports: [CommonModule, 
    RouterModule.forChild(HomeRoutes),
    ComponentLibModule,
  ],
  declarations: [HomePageComponent],
  providers: [],
})
export default class HomeModule {}
