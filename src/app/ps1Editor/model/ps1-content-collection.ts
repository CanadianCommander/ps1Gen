import { ContentCollection, Content } from './content-collection'
import { TextContentComponent } from '../content/text-content/text-content.component'

export class Ps1ContentCollection implements ContentCollection {

  private currContent: Content

  constructor() {
    this.currContent = new (this.getDefaultContentType())();
  }

  getContentTypes(): (new()=>Content)[] {
    return [TextContent];
  }

  getDefaultContentType(): (new()=>Content) {
    return TextContent
  }

  // get the current content type
  getCurrentContent(): Content {
    return this.currContent;
  }

  // set the content type
  setCurrentContent(c: Content): void{
    this.currContent = c;
  }
}

export class TextContent implements Content {
  private text: string = "";

  constructor() {}

  getDescription(): string {
    return "text";
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
