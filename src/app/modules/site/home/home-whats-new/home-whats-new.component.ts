import { Component, OnInit } from "@angular/core";
import { MasterService } from "../../../../services/master.service";

@Component({
  selector: "app-home-whats-new",
  templateUrl: "./home-whats-new.component.html",
  styleUrls: ["./home-whats-new.component.scss"]
})
export class HomeWhatsNewComponent implements OnInit {
  whatsNewArr: any;
  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.getWhtasNewItems();
  }
  getWhtasNewItems() {
    this.masterService.get("../../assets/data/whatsNew.json").subscribe(
      resp => {
        if (resp) {
          console.log("IN whts new");
          console.log(resp);
          this.whatsNewArr = JSON.parse(resp["_body"])["whatsNew"];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
