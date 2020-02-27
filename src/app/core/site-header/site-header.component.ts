import { Component, OnInit } from "@angular/core";

import { bannerMeta } from "../../models/banner";
import { navItems } from "../../models/navbar";

@Component({
  selector: "app-site-header",
  templateUrl: "./site-header.component.html",
  styleUrls: ["./site-header.component.scss"]
})
export class SiteHeaderComponent implements OnInit {
  public bannerMeta = bannerMeta[0];
  public navItems = navItems;
  constructor() {}

  ngOnInit(): void {
    console.log(bannerMeta);
  }
}
