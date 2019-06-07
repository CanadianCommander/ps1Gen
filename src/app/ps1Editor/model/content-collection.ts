export interface ContentCollection {
  // get list of content types supported
  getContentTypes(): (new()=>Content)[];

  // get the default content type for this collection
  getDefaultContentType(): (new()=>Content);

  // get the current content type
  getCurrentContent(): Content;

  // set the content type
  setCurrentContent(c: Content): void;
}


export interface Content {
  // get terminal string that represents the content
  getTerminalCode(): string;
  getDescription(): string;
  getComponent(): any;
}
