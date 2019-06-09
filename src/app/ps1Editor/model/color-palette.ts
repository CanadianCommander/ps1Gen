
export interface ColorPalette {
  getColorList(): string[];
  // get the current color selection index
  getCurrentIndex(): number;
  // get selected color in a form that can be applied as css
  getCurrentCSSColor(): string;
  // get selected color in a form that can be applied to the terminal foreground
  getCurrentTerminalColorFg(): string;
  // get selected color in a form that can be applied to the terminal background
  getCurrentTerminalColorBg(): string;
  // get code needed to reset terminal color
  getTerminalResetCode(): string;

  isNoColor(): boolean;

  setCurrentColorIndex(idx: number): void;
}
