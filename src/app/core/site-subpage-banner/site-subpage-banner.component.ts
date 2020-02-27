import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-site-subpage-banner",
  templateUrl: "./site-subpage-banner.component.html",
  styleUrls: ["./site-subpage-banner.component.scss"]
})
export class SiteSubpageBannerComponent implements OnInit {
  @Input() heading: any;
  @Input() bannerClass: any;
  constructor() {}

  ngOnInit(): void {}
}
