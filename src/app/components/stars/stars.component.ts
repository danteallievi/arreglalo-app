import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "arreglalo-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"],
})
export class StarsComponent implements OnInit {
  faStar = faStar;
  @Input() max!: number;
  @Input() setRating!: number;
  @Output() onRating = new EventEmitter<number>();

  public maxItem: any[] = [];
  public ratedCount: number;

  constructor() {
    this.ratedCount = 0;
  }

  ngOnInit() {
    this.ratedCount = this.setRating;
    this.maxItem = [];
    for (let i = 0; i < this.max; i++) {
      this.maxItem.push(i + 1);
    }
  }

  public toggleRating(starNumber: number): void {
    this.ratedCount = starNumber;
    this.onRating.emit(this.ratedCount);
  }
}
