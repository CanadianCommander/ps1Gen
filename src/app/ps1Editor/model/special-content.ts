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

export class SpecialContentTime extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Time";
  }

  getTerminalCode(): string {
    return "\\T";
  }
}

export class SpecialContentTime24 extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Time 24Hour";
  }

  getTerminalCode(): string {
    return "\\t";
  }
}



export class SpecialContentHost extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Hostname";
  }

  getTerminalCode(): string {
    return "\\H";
  }
}

export class SpecialContentShortHost extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Short Hostname";
  }

  getTerminalCode(): string {
    return "\\h";
  }
}

export class SpecialContentShell extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Shell";
  }

  getTerminalCode(): string {
    return "\\s";
  }
}

export class SpecialContentUsername extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Username";
  }

  getTerminalCode(): string {
    return "\\u";
  }
}

export class SpecialContentBashVersion extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Bash Version";
  }

  getTerminalCode(): string {
    return "\\V";
  }
}

export class SpecialContentCurrentDir extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Path";
  }

  getTerminalCode(): string {
    return "\\w";
  }
}

export class SpecialContentCurrentDirName extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Dir Name";
  }

  getTerminalCode(): string {
    return "\\W";
  }
}

export class SpecialContentCurrentRootIndicator extends SpecialContent {
  constructor() {super()}

  getDescription(): string {
    return "Root?";
  }

  getTerminalCode(): string {
    return "\\$";
  }
}
