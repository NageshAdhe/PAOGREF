import { Component, OnInit } from '@angular/core';
import { MasterService } from "../../../services/master.service";

@Component({
  selector: 'app-abbreviations',
  templateUrl: './abbreviations.component.html',
  styleUrls: ['./abbreviations.component.scss']
})
export class AbbreviationsComponent implements OnInit {
constructor(private masterService: MasterService) {}
  abbreviationsArr: any;

  ngOnInit(): void {
    this.getAbbreviations();
  }

  getAbbreviations() {
    this.masterService.get("../../assets/data/dummyTable.json").subscribe(
      resp => {
        if (resp) {
          console.log(resp);
          this.abbreviationsArr = JSON.parse(resp["_body"])["abbreviations"];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
