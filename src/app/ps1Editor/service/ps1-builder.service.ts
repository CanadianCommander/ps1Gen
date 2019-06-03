import { Injectable } from '@angular/core';
import { Ps1Element } from '../model/ps1-element';
import { Ps1ColorPalette } from '../model/ps1-color-palette';

@Injectable({
  providedIn: 'root'
})
export class Ps1BuilderService {

  elements: Ps1Element[] = [];

  constructor() {
  }

  getElementList(): Ps1Element[] {
    return this.elements;
  }

  getPs1String(): string {
    return this.elements.reduce((acc, el) => {
      if (el.color.isNoColor())
      { // no color
        acc = acc + el.text
      }
      else
      {
        acc = acc + el.color.getCurrentTerminalColor() + el.text + el.color.getTerminalResetCode();
      }
      return acc
    }, "");
  }

  addDefaultElement() {
    this.elements.push(new Ps1Element("", new Ps1ColorPalette));
  }

  deleteElement(element) {
    let elIndex: number = this.elements.indexOf(element);
    if (elIndex !== -1) {
      this.elements.splice(elIndex, 1)
    }
  }

  deleteAllElements() {
    this.elements.splice(0, this.elements.length);
  }
}
