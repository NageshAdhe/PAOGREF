import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "../admin/admin.component";
import { DashboardComponent } from "../admin/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    data: {
      title: "Admin"
    },
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: {
          title: "Dashboard"
        }
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
