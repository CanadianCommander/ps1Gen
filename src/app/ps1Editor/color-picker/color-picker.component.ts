import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Ps1Element } from "../model/ps1-element"

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @ViewChild('colorPickerContainer') container: ElementRef;
  @Input() colorList: string[];
  @Input() ps1Element: Ps1Element;
  xOffset: number = 0;

  constructor() { }

  ngOnInit() {
    this.ensureVisible();
  }

  setColor(event) {
    this.ps1Element.color.setCurrentColorIndex(<number>event.target.attributes["data-color-index"].value);
  }

  // ensure color picker is visible by adjusting position
  private ensureVisible(): void {
    let pos = $(this.container.nativeElement).position();
    let width = $(this.container.nativeElement).width();
    if (pos.left + width > $('body').width()) {
      this.xOffset = $('body').width() - (pos.left + width) - 10;
    }
  }
}
