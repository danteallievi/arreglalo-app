import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "arreglalo-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input() buttonSmall!: string;
  @Input() buttonText!: string;
  @Input() buttonColor!: string;
  @Output() buttonClick = new EventEmitter<void>();

  buttonOnClick() {
    this.buttonClick.emit();
  }
}
