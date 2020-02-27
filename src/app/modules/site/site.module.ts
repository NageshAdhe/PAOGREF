import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../../core/core.module";
import { SiteRoutingModule } from "./site-routing.module";
import { BootstrapModule } from "../../shared/bootstrap/bootstrap.module";

import { SiteComponent } from "./site.component";
import { HomeComponent } from "./home/home.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { AbbreviationsComponent } from './abbreviations/abbreviations.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { HomeAnnouncementsComponent } from './home/home-announcements/home-announcements.component';
import { HomeWhatsNewComponent } from "./home/home-whats-new/home-whats-new.component";
import { HomeAboutUsComponent} from "./home/home-about-us/home-about-us.component";
import { HomeMissionStatementComponent} from "./home/home-mission-statement/home-mission-statement.component";
import { HomeQualityPolicyComponent} from "./home/home-quality-policy/home-quality-policy.component";
import { HomeManagementAutherityComponent } from "./home/home-management-autherity/home-management-autherity.component" ;
import { HomeGalleryComponent } from "./home/home-gallery/home-gallery.component";
import { GalleryComponent } from './gallery/gallery.component';
import { NpsComponent } from './nps/nps.component';
import { TaxComponent } from './tax/tax.component';
import { DirectoryComponent } from './directory/directory.component';
import { AppendixJComponent } from './appendix-j/appendix-j.component';
import { ImportantLinksComponent } from './important-links/important-links.component';
import { PublicGrievancesComponent } from './public-grievances/public-grievances.component';
import { RtiComponent } from './rti/rti.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    SiteComponent, 
    HomeComponent, 
    FaqsComponent, 
    NewsComponent, 
    ContactComponent, 
    DownloadsComponent, 
    AbbreviationsComponent,
     HomeBannerComponent,
      HomeAnnouncementsComponent,
      HomeWhatsNewComponent,
      HomeAboutUsComponent,
      HomeMissionStatementComponent,
      HomeQualityPolicyComponent,
      HomeManagementAutherityComponent,
      HomeGalleryComponent,
      GalleryComponent,
      NpsComponent,
      TaxComponent,
      DirectoryComponent,
      AppendixJComponent,
      ImportantLinksComponent,
      PublicGrievancesComponent,
      RtiComponent,
      SectionComponent
    ],
  imports: [CommonModule, CoreModule, BootstrapModule, SiteRoutingModule]
})
export class SiteModule {}
