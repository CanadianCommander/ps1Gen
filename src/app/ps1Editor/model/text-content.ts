import { Content } from './content-collection'
import { TextContentComponent } from '../content/text-content/text-content.component'

export class TextContent implements Content {
  private text: string = "";

  constructor() {}

  getDescription(): string {
    return "Text";
  }

  getComponent(): any {
    return TextContentComponent;
  }

  getTerminalCode(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
  }
}
