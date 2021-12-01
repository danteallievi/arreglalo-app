import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "arreglalo-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() username!: string;
  @Input() profession!: string;
  @Input() age!: string;
  @Input() calification!: string;
  @Input() image!: string;

  ngOnInit(): void {}
}
