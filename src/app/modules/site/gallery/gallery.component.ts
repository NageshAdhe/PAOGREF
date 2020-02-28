import { Component, OnInit } from "@angular/core";
import { MasterService } from "../../../services/master.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
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
