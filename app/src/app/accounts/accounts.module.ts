import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import ComponentLibModule from "../shared/modules/ComponentLib/ComponentLib.module";

import AccountsRoutes from "./accounts.routes";
import CreateFormComponent from "./components/createForm/createForm.component";
import EditFormComponent from "./components/editForm/editForm.component";
import ListComponent from "./components/list/list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountsRoutes),
    ComponentLibModule
  ],
  declarations: [
    CreateFormComponent,
    EditFormComponent,
    ListComponent,
  ],
  providers: [
  ],
})
export default class AccountsModule {}