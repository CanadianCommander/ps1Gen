import { ContentCollection, Content } from './content-collection'
import * as textContent from './text-content'
import * as specialContent from './special-content'

export class Ps1ContentCollection implements ContentCollection {

  private currContent: Content

  constructor() {
    this.currContent = new (this.getDefaultContentType())();
  }

  getContentTypes(): (new()=>Content)[] {
    return [
      textContent.TextContent,
      textContent.BlinkTextContent,
      textContent.BoldlineTextContent,
      textContent.UnderlineTextContent,
      specialContent.SpecialContentShell,
      specialContent.SpecialContentUsername,
      specialContent.SpecialContentCurrentDirName,
      specialContent.SpecialContentCurrentDir,
      specialContent.SpecialContentHost,
      specialContent.SpecialContentShortHost,
      specialContent.SpecialContentTime,
      specialContent.SpecialContentTime24,
      specialContent.SpecialContentDate,
      specialContent.SpecialContentBashVersion,
      specialContent.SpecialContentCurrentRootIndicator
    ];
  }

  getDefaultContentType(): (new()=>Content) {
    return textContent.TextContent
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
