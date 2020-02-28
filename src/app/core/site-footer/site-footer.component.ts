import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Replace } from "../../shared/utility";
import { faFacebook, faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: "app-site-footer",
  templateUrl: "./site-footer.component.html",
  styleUrls: ["./site-footer.component.scss"]
})
export class SiteFooterComponent implements OnInit {
  @Input() quickLinks: any;
  @Input() contact: any;
faFacebook =faFacebook;
faLinkedin= faLinkedin;
faYoutube =faYoutube;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    Replace(this.el);
    console.log(this.quickLinks);
  }
}
