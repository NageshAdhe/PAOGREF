import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home-banner",
  templateUrl: "./home-banner.component.html",
  styleUrls: ["./home-banner.component.scss"]
})
export class HomeBannerComponent implements OnInit {
  constructor() {}
  @Input() bannerTitle: any;

  ngOnInit(): void {
    console.log(this.bannerTitle);
  }
}
