import { Content } from './content-collection'
import { TextContentComponent } from '../content/text-content/text-content.component'

export class TextContent implements Content {
  protected text: string = "";

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

export class BoldlineTextContent extends TextContent {
  static readonly BOLD_CODE_START: string = "\\e[1m"
  static readonly BOLD_CODE_STOP: string = "\\e[0m";

  constructor() {super()}

  getDescription(): string {
    return "Bold Text"
  }

  getTerminalCode(): string {
    return BoldlineTextContent.BOLD_CODE_START + this.text + BoldlineTextContent.BOLD_CODE_STOP
  }
}


export class BlinkTextContent extends TextContent {
  static readonly BLINK_CODE_START: string = "\\e[5m"
  static readonly BLINK_CODE_STOP: string = "\\e[0m";

  constructor() {super()}

  getDescription(): string {
    return "Blink Text"
  }

  getTerminalCode(): string {
    return BlinkTextContent.BLINK_CODE_START + this.text + BlinkTextContent.BLINK_CODE_STOP
  }
}

export class UnderlineTextContent extends TextContent {
  static readonly UNDERLINE_CODE_START: string = "\\e[4m"
  static readonly UNDERLINE_CODE_STOP: string = "\\e[0m";

  constructor() {super()}

  getDescription(): string {
    return "Underline Text"
  }

  getTerminalCode(): string {
    return UnderlineTextContent.UNDERLINE_CODE_START + this.text + UnderlineTextContent.UNDERLINE_CODE_STOP
  }
}
