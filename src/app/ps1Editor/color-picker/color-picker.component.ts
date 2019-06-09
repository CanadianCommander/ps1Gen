import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Ps1Element } from "../model/ps1-element"

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() ps1Element: Ps1Element;
  colorList: string[];
  backgroundColorList: string[];
  activeFgColorIndex: number = 0;
  activeBgColorIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.colorList = this.ps1Element.color.getColorList();
    this.backgroundColorList = this.ps1Element.backgroundColor.getColorList();
  }

  setColor(event) {
    this.ps1Element.color.setCurrentColorIndex(<number>event.target.attributes["data-color-index"].value);
  }

  setColorBg(event) {
    this.ps1Element.backgroundColor.setCurrentColorIndex(<number>event.target.attributes["data-color-index"].value);
  }
}
