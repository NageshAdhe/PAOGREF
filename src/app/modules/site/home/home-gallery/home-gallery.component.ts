import { Component, OnInit } from "@angular/core";
import { MasterService } from "../../../../services/master.service";

@Component({
  selector: "app-home-gallery",
  templateUrl: "./home-gallery.component.html",
  styleUrls: ["./home-gallery.component.scss"]
})
export class HomeGalleryComponent implements OnInit {
  galleryArr: any;
  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.getGalleryData();
  }
  getGalleryData() {
    this.masterService.get("../../assets/data/gallery.json").subscribe(
      resp => {
        if (resp) {
          console.log(resp);
          this.galleryArr = JSON.parse(resp["_body"])["gallery"];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
