import { Component, OnInit } from "@angular/core";
import { MasterService } from "../../../../services/master.service";

@Component({
  selector: "app-home-announcements",
  templateUrl: "./home-announcements.component.html",
  styleUrls: ["./home-announcements.component.scss"]
})
export class HomeAnnouncementsComponent implements OnInit {
  constructor(private masterService: MasterService) {}
  announcementsArr: any;

  ngOnInit(): void {
    this.getAnnouncements();
  }

  getAnnouncements() {
    this.masterService.get("../../assets/data/announcements.json").subscribe(
      resp => {
        if (resp) {
          console.log(resp);
          this.announcementsArr = JSON.parse(resp["_body"])["announcements"];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
