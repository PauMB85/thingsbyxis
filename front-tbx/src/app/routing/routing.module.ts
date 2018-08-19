import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {CollaresComponent} from "../components/collares/collares.component";
import {AbrigosComponent} from "../components/abrigos/abrigos.component";
import {ShoppingComponent} from "../components/shopping/shopping.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'collares', component: CollaresComponent},
  { path: 'abrigos', component: AbrigosComponent},
  { path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
