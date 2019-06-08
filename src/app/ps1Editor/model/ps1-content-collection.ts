import { ContentCollection, Content } from './content-collection'
import { TextContent } from './text-content'
import * as specialContent from './special-content'

export class Ps1ContentCollection implements ContentCollection {

  private currContent: Content

  constructor() {
    this.currContent = new (this.getDefaultContentType())();
  }

  getContentTypes(): (new()=>Content)[] {
    return [TextContent, specialContent.SpecialContentDate];
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
