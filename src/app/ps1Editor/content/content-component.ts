import { Ps1Element } from "../model/ps1-element"


export class ContentComponent {
  ps1Element:  Ps1Element;

  getBackgroundColor(): string {
    if (this.ps1Element.backgroundColor.getCurrentIndex() == 0) {
      return "inherit";
    } else {
      return this.ps1Element.backgroundColor.getCurrentCSSColor();
    }
  }

  getForegroundColor(): string {
    if (this.ps1Element.color.getCurrentIndex() == 0) {
      return "inherit";
    } else {
      return this.ps1Element.color.getCurrentCSSColor();
    }
  }
}
