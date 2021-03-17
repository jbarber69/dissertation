import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomescreenComponent } from "./homescreen/homescreen.component";
import { ScoreboardComponent } from "./scoreboard/scoreboard.component";
import { TranslationComponent } from "./translation/translation.component";

const routes: Routes = [
  { path: "translation", component: TranslationComponent },
  { path: "", component: HomescreenComponent },
  { path: "scoreboard", component: ScoreboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
