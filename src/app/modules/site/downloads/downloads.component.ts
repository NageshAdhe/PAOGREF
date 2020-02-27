import { Component, OnInit } from "@angular/core";
import { MasterService } from "../../../services/master.service";

@Component({
  selector: "app-downloads",
  templateUrl: "./downloads.component.html",
  styleUrls: ["./downloads.component.scss"]
})
export class DownloadsComponent implements OnInit {
  constructor(private masterService: MasterService) {}
  downloadsArr: any;

  ngOnInit(): void {
    this.getDownloads();
  }

  getDownloads() {
    this.masterService.get("../../assets/data/dummyTable.json").subscribe(
      resp => {
        if (resp) {
          console.log(resp);
          this.downloadsArr = JSON.parse(resp["_body"])["downloads"];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
