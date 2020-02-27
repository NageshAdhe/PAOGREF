import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";
import { BootstrapModule } from "../shared/bootstrap/bootstrap.module";
import { SiteFooterComponent } from "./site-footer/site-footer.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { SiteHeaderWrapperComponent } from "./site-header-wrapper/site-header-wrapper.component";
import { SiteNavbarComponent } from "./site-navbar/site-navbar.component";
import { SiteBreadcrumbComponent } from "./site-breadcrumb/site-breadcrumb.component";
import { SiteTopbarComponent } from "./site-topbar/site-topbar.component";
import { SiteSubpageBannerComponent } from "./site-subpage-banner/site-subpage-banner.component";

import { SitePageNotFoundComponent } from "./site-page-not-found/site-page-not-found.component";

@NgModule({
  declarations: [
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteHeaderWrapperComponent,
    SiteNavbarComponent,
    SiteBreadcrumbComponent,
    SiteTopbarComponent,
    SiteSubpageBannerComponent,

    SitePageNotFoundComponent
  ],
  imports: [CommonModule, RouterModule, BootstrapModule],
  exports: [
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteHeaderWrapperComponent,
    SiteNavbarComponent,
    SiteBreadcrumbComponent,
    SiteTopbarComponent,
    SiteSubpageBannerComponent,
    SitePageNotFoundComponent
  ]
})
export class CoreModule {}
