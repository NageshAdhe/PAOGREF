import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { AlertModule } from "ngx-bootstrap/alert";
import { AccordionModule } from "ngx-bootstrap/accordion";
// import { ButtonsModule } from "ngx-bootstrap/buttons";
// import { CarouselModule } from "ngx-bootstrap/carousel";
import { CollapseModule } from "ngx-bootstrap";
// import { BsDatepickerModule } from "ngx-bootstrap";
import { BsDropdownModule } from "ngx-bootstrap";
// import { ModalModule } from "ngx-bootstrap";
// import { PaginationModule } from "ngx-bootstrap";
// import { PopoverModule } from "ngx-bootstrap";
// import { ProgressbarModule } from "ngx-bootstrap";
// import { RatingModule } from "ngx-bootstrap";
// import { SortableModule } from "ngx-bootstrap";
import { TabsModule } from "ngx-bootstrap/tabs";
// import { TimepickerModule } from "ngx-bootstrap";
// import { TooltipModule } from "ngx-bootstrap";
// import { TypeaheadModule } from "ngx-bootstrap";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // AlertModule.forRoot(),
    AccordionModule.forRoot(),
    // ButtonsModule.forRoot(),
    // CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    // ModalModule.forRoot(),
    // PaginationModule.forRoot(),
    // PopoverModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // RatingModule.forRoot(),
    // SortableModule.forRoot(),
    TabsModule.forRoot()
    // TimepickerModule.forRoot(),
    // TooltipModule.forRoot(),
    // TypeaheadModule.forRoot(),
  ],
  exports: [TabsModule, CollapseModule, BsDropdownModule, AccordionModule]
})
export class BootstrapModule {}
