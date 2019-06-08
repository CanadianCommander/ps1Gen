import { Component, OnInit, Input } from '@angular/core';
import { Ps1GraphicListComponent } from '../ps1-graphic-list/ps1-graphic-list.component';
import { Ps1Element } from "../model/ps1-element"
import { Ps1BuilderService } from '../service/ps1-builder.service'

@Component({
  selector: 'app-ps1-editor-element',
  templateUrl: './ps1-element.component.html',
  styleUrls: ['./ps1-element.component.scss']
})
export class Ps1ElementComponent implements OnInit {
  @Input() ps1Element: Ps1Element;
  @Input() elementIndex: number;
  showColorPicker: boolean = false;
  showContentPicker: boolean = false;

  constructor(private ps1Builder: Ps1BuilderService) { }

  ngOnInit() {
  }

  toggleColorPicker() {
    this.showColorPicker = !this.showColorPicker;
  }

  toggleContentPicker() {
    this.showContentPicker = !this.showContentPicker
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

  hideColorPicker(): void {
    this.showColorPicker = false;
  }

  deleteSelf(): void {
    this.ps1Builder.deleteElement(this.ps1Element);
  }
}
