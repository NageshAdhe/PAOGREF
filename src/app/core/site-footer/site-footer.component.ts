import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Replace } from "../../shared/utility";

@Component({
  selector: "app-site-footer",
  templateUrl: "./site-footer.component.html",
  styleUrls: ["./site-footer.component.scss"]
})
export class SiteFooterComponent implements OnInit {
  @Input() quickLinks: any;
  @Input() contact: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    Replace(this.el);
    console.log(this.quickLinks);
  }
}
