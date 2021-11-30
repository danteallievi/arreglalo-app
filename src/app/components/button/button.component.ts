import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "arreglalo-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  @Input() buttonSmall!: string;
  @Input() buttonText!: string;
  @Input() buttonColor!: string;
  @Output() buttonClick = new EventEmitter<void>();

  ngOnInit(): void {}

  buttonOnClick() {
    this.buttonClick.emit();
  }
}
