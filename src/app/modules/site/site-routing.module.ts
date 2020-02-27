import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SiteComponent } from "../site/site.component";
import { HomeComponent } from "./home/home.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { AbbreviationsComponent } from "./abbreviations/abbreviations.component";
import { NpsComponent } from "./nps/nps.component";

import { TaxComponent } from "./tax/tax.component";
import { NewsComponent } from "./news/news.component";
import { DirectoryComponent } from "./directory/directory.component";
import { AppendixJComponent } from "./appendix-j/appendix-j.component";
import { RtiComponent } from "./rti/rti.component";
import { DownloadsComponent } from "./downloads/downloads.component";
import { ImportantLinksComponent } from "./important-links/important-links.component";
import { PublicGrievancesComponent } from "./public-grievances/public-grievances.component";
import { ContactComponent } from "./contact/contact.component";
// import { } from  ""
import { SitePageNotFoundComponent } from "../../core/site-page-not-found/site-page-not-found.component";
const routes: Routes = [
  {
    path: "",
    component: SiteComponent,
    data: {
      title: "Home"
    },
    children: [
      {
        path: "home",
        component: HomeComponent,
        data: {
          title: "Home"
        }
      },
      {
        path: "faqs",
        component: FaqsComponent,
        data: {
          title: "Faqs"
        }
      },
      {
        path: "gallery",
        component: GalleryComponent,
        data: {
          title: "Gallery"
        }
      },
      {
        path: "abbreviations",
        component: AbbreviationsComponent,
        data: {
          title: "Abbreviations"
        }
      },
      {
        path: "nps",
        component: NpsComponent,
        data: {
          title: "NPS"
        }
      },
      {
        path: "tax",
        component: TaxComponent,
        data: {
          title: "TAX"
        }
      },
      {
        path: "news",
        component: NewsComponent,
        data: {
          title: "News"
        }
      },
      {
        path: "directory",
        component: DirectoryComponent,
        data: {
          title: "Directory"
        }
      },
      {
        path: "appendixj",
        component: AppendixJComponent,
        data: {
          title: "Appendix - J"
        }
      },
      {
        path: "rti",
        component: RtiComponent,
        data: {
          title: "RTI"
        }
      },
      {
        path: "downloads",
        component: DownloadsComponent,
        data: {
          title: "Downloads"
        }
      },
      {
        path: "importantslinks",
        component: ImportantLinksComponent,
        data: {
          title: "IMportant linkks"
        }
      },
      {
        path: "publicgrievances",
        component: PublicGrievancesComponent,
        data: {
          title: "Public Grievances"
        }
      },
      {
        path: "contact",
        component: ContactComponent,
        data: {
          title: "Contact"
        }
      },

      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },

      {
        path: "not-found",
        component: SitePageNotFoundComponent
      },

      {
        path: "**",
        redirectTo: "/not-found"
      }
    ]
  },
  {
    path: "not-found",
    component: SitePageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {}
