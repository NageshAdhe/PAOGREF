import { Component, OnInit } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";
import { quickLinks, contact } from "../../models/footer";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"]
})
export class SiteComponent implements OnInit {
  public quickLinks = quickLinks;
  public contact = contact;
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
