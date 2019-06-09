import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Ps1GraphicListComponent } from '../ps1-graphic-list/ps1-graphic-list.component';
import { Ps1Element } from "../model/ps1-element"
import { Ps1BuilderService } from '../service/ps1-builder.service'
import { ColorPickerComponent } from '../color-picker/color-picker.component'

@Component({
  selector: 'app-ps1-editor-element',
  templateUrl: './ps1-element.component.html',
  styleUrls: ['./ps1-element.component.scss']
})
export class Ps1ElementComponent implements OnInit {
  @ViewChild('contentPicker') contentPicker: ElementRef;
  @ViewChild('colorPicker') colorPicker: ElementRef;
  @ViewChild('showColorPickerElement') showColorPickerButton: ElementRef;
  @ViewChild('showContentPickerElement') showContentPickerButton: ElementRef;
  @Input() ps1Element: Ps1Element;
  @Input() elementIndex: number;
  showColorPicker: boolean = false;
  showContentPicker: boolean = false;

  constructor(private ps1Builder: Ps1BuilderService) { }

  ngOnInit() {
  }

  toggleColorPicker() {
    this.showColorPicker = !this.showColorPicker;
    this.hideContentPicker();

    let self: any = this;
    // TODO is this safe? (I think not)
    window.setTimeout(function () {self.positionPopup(self.showColorPickerButton, self.colorPicker)}, 1);
  }

  toggleContentPicker() {
    this.showContentPicker = !this.showContentPicker
    this.hideColorPicker();

    let self: any = this;
    // TODO is this safe? (I think not)
    window.setTimeout(function () {self.positionPopup(self.showContentPickerButton, self.contentPicker)}, 1);
  }

  handleOnTab(event): boolean {
    if (event.keyCode == 9)
    {
      let myIndex = this.elementIndex;
      let nextElement = $("#ps1-element-"+(myIndex+1));
      if (nextElement.length != 0)
      {
        // nop. normal tab behavior will work
        return true;
      }
      else
      { // create new element
        this.ps1Builder.addDefaultElement();
        window.setTimeout(function () {
          // attempt to focuse new element
          let newElement = $("#ps1-element-"+(myIndex+1));
          if (newElement.length != 0)
          {
            newElement.find(".element-text").first().focus();
          }
        }, 50);
        return false;
      }
    }
  }

  // position a popup (popupEl) on screen under (sourceEl).
  positionPopup(sourceEl, popupEl): void {
    let pos = $(sourceEl.nativeElement).offset();
    let sourceHeight = $(sourceEl.nativeElement).height();
    let width = $(popupEl.nativeElement).width();

    let xOffset = 0;
    if (pos.left + width > $('body').width()) {
      xOffset = $('body').width() - (pos.left + width) - 10;
    }

    $(popupEl.nativeElement).css({top: pos.top + sourceHeight, left: (pos.left + xOffset)});
  }

  hideColorPicker(): void {
    this.showColorPicker = false;
  }

  hideContentPicker(): void {
    this.showContentPicker = false;
  }

  deleteSelf(): void {
    this.ps1Builder.deleteElement(this.ps1Element);
  }

  colorPickerDisplay(): string {
    if (this.showColorPicker) {
      return "block";
    } else {
      return "none";
    }
  }

  contentPickerDisplay(): string {
    if (this.showContentPicker) {
      return "block";
    } else {
      return "none";
    }
  }
}
