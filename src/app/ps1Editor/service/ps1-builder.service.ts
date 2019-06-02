import { Injectable } from '@angular/core';
import { Ps1Element } from '../model/ps1-element';

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
    return this.elements.reduce( (acc, el) => acc = acc + el.text, "");
  }

  addElement(newElement: Ps1Element) {
    this.elements.push(newElement);
  }

  deleteElement(element) {
    let elIndex: number = this.elements.indexOf(element);
    if (elIndex !== -1) {
      this.elements.splice(elIndex, 1)
    }
  }
}
