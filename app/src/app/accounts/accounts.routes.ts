import { Routes } from "@angular/router";

import CreateFormComponent from "./components/createForm/createForm.component";
import EditFormComponent from "./components/editForm/editForm.component";

const accountsRoutes: Routes = [
  {
    path: "create",
    component: CreateFormComponent,
  },
  {
    path: "edit",
    component: EditFormComponent,
  },
];

export default accountsRoutes;
