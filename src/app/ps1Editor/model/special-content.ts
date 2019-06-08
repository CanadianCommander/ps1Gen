import { Content } from './content-collection'
import { SpecialContentComponent } from '../content/special-content/special-content.component'

// special content like escape codes, \d \s \u
export class SpecialContent implements Content {
  constructor() {}

  getDescription(): string {
    throw new Error("Not Implemented");
  }

  getComponent(): any {
    return SpecialContentComponent;
  }

  getTerminalCode(): string {
    throw new Error("Not Implemented");
  }

}

export class SpecialContentDate extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Current Date";
  }

  getTerminalCode(): string {
    return "\\d";
  }
}
