import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-site-navbar",
  templateUrl: "./site-navbar.component.html",
  styleUrls: ["./site-navbar.component.scss"]
})
export class SiteNavbarComponent implements OnInit {
  collapsed = true;
  isCollapsed = false;
  constructor() {}
  @Input() navItems: any;

  ngOnInit(): void {}

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
