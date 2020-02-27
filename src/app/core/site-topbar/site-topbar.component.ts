import { Component, OnInit } from "@angular/core";
import { topBarItems } from "../../models/navbar";
@Component({
  selector: "app-site-topbar",
  templateUrl: "./site-topbar.component.html",
  styleUrls: ["./site-topbar.component.scss"]
})
export class SiteTopbarComponent implements OnInit {
  public topBarItems = topBarItems;
  constructor() {}

  ngOnInit(): void {}
}
