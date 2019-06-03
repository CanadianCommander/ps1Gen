import { Component, OnInit, Input} from '@angular/core';
import { Ps1Element } from "../model/ps1-element"

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input() colorList: string[]
  @Input() ps1Element: Ps1Element;

  constructor() { }

  ngOnInit() {
  }

  setColor(event) {
    this.ps1Element.color.setCurrentColorIndex(<number>event.target.attributes["data-color-index"].value);
  }

}
