import { Component, OnInit, ElementRef, Input } from "@angular/core";
import { BreadcrumbService } from "../../services/breadcrumb.service";

@Component({
  selector: "app-site-breadcrumb",
  templateUrl: "./site-breadcrumb.component.html",
  styleUrls: ["./site-breadcrumb.component.scss"]
})
export class SiteBreadcrumbComponent implements OnInit {
  @Input() fixed: any;
  breadcrumbs: any;
  constructor(private el: ElementRef, private service: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbs = this.service.breadcrumbs;
  }
}
