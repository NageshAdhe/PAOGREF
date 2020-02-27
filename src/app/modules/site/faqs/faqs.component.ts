import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.scss"]
})
export class FaqsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];
}
