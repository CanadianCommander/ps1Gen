import { ColorPalette } from "./color-palette"

export class Ps1ColorPalette implements ColorPalette{
  static readonly COLOR_MAP = [
    {color: "#000000", code: "\\e[0m"}, // no color
    {color: "#000000", code: "\\033[38;5;16m"},
    {color: "#00005f", code: "\\033[38;5;17m"},
    {color: "#000087", code: "\\033[38;5;18m"},
    {color: "#0000af", code: "\\033[38;5;19m"},
    {color: "#0000d7", code: "\\033[38;5;20m"},
    {color: "#0000ff", code: "\\033[38;5;21m"},
    {color: "#005f00", code: "\\033[38;5;22m"},
    {color: "#005f5f", code: "\\033[38;5;23m"},
    {color: "#005f87", code: "\\033[38;5;24m"},
    {color: "#005faf", code: "\\033[38;5;25m"},
    {color: "#005fd7", code: "\\033[38;5;26m"},
    {color: "#005fff", code: "\\033[38;5;27m"},
    {color: "#008700", code: "\\033[38;5;28m"},
    {color: "#00875f", code: "\\033[38;5;29m"},
    {color: "#008787", code: "\\033[38;5;30m"},
    {color: "#0087af", code: "\\033[38;5;31m"},
    {color: "#0087d7", code: "\\033[38;5;32m"},
    {color: "#0087ff", code: "\\033[38;5;33m"},
    {color: "#00af00", code: "\\033[38;5;34m"},
    {color: "#00af5f", code: "\\033[38;5;35m"},
    {color: "#00af87", code: "\\033[38;5;36m"},
    {color: "#00afaf", code: "\\033[38;5;37m"},
    {color: "#00afd7", code: "\\033[38;5;38m"},
    {color: "#00afff", code: "\\033[38;5;39m"},
    {color: "#00d700", code: "\\033[38;5;40m"},
    {color: "#00d75f", code: "\\033[38;5;41m"},
    {color: "#00d787", code: "\\033[38;5;42m"},
    {color: "#00d7af", code: "\\033[38;5;43m"},
    {color: "#00d7d7", code: "\\033[38;5;44m"},
    {color: "#00d7ff", code: "\\033[38;5;45m"},
    {color: "#00ff00", code: "\\033[38;5;46m"},
    {color: "#00ff5f", code: "\\033[38;5;47m"},
    {color: "#00ff87", code: "\\033[38;5;48m"},
    {color: "#00ffaf", code: "\\033[38;5;49m"},
    {color: "#00ffd7", code: "\\033[38;5;50m"},
    {color: "#00ffff", code: "\\033[38;5;51m"},
    {color: "#5f0000", code: "\\033[38;5;52m"},
    {color: "#5f005f", code: "\\033[38;5;53m"},
    {color: "#5f0087", code: "\\033[38;5;54m"},
    {color: "#5f00af", code: "\\033[38;5;55m"},
    {color: "#5f00d7", code: "\\033[38;5;56m"},
    {color: "#5f00ff", code: "\\033[38;5;57m"},
    {color: "#5f5f00", code: "\\033[38;5;58m"},
    {color: "#5f5f5f", code: "\\033[38;5;59m"},
    {color: "#5f5f87", code: "\\033[38;5;60m"},
    {color: "#5f5faf", code: "\\033[38;5;61m"},
    {color: "#5f5fd7", code: "\\033[38;5;62m"},
    {color: "#5f5fff", code: "\\033[38;5;63m"},
    {color: "#5f8700", code: "\\033[38;5;64m"},
    {color: "#5f875f", code: "\\033[38;5;65m"},
    {color: "#5f8787", code: "\\033[38;5;66m"},
    {color: "#5f87af", code: "\\033[38;5;67m"},
    {color: "#5f87d7", code: "\\033[38;5;68m"},
    {color: "#5f87ff", code: "\\033[38;5;69m"},
    {color: "#5faf00", code: "\\033[38;5;70m"},
    {color: "#5faf5f", code: "\\033[38;5;71m"},
    {color: "#5faf87", code: "\\033[38;5;72m"},
    {color: "#5fafaf", code: "\\033[38;5;73m"},
    {color: "#5fafd7", code: "\\033[38;5;74m"},
    {color: "#5fafff", code: "\\033[38;5;75m"},
    {color: "#5fd700", code: "\\033[38;5;76m"},
    {color: "#5fd75f", code: "\\033[38;5;77m"},
    {color: "#5fd787", code: "\\033[38;5;78m"},
    {color: "#5fd7af", code: "\\033[38;5;79m"},
    {color: "#5fd7d7", code: "\\033[38;5;80m"},
    {color: "#5fd7ff", code: "\\033[38;5;81m"},
    {color: "#5fff00", code: "\\033[38;5;82m"},
    {color: "#5fff5f", code: "\\033[38;5;83m"},
    {color: "#5fff87", code: "\\033[38;5;84m"},
    {color: "#5fffaf", code: "\\033[38;5;85m"},
    {color: "#5fffd7", code: "\\033[38;5;86m"},
    {color: "#5fffff", code: "\\033[38;5;87m"},
    {color: "#870000", code: "\\033[38;5;88m"},
    {color: "#87005f", code: "\\033[38;5;89m"},
    {color: "#870087", code: "\\033[38;5;90m"},
    {color: "#8700af", code: "\\033[38;5;91m"},
    {color: "#8700d7", code: "\\033[38;5;92m"},
    {color: "#8700ff", code: "\\033[38;5;93m"},
    {color: "#875f00", code: "\\033[38;5;94m"},
    {color: "#875f5f", code: "\\033[38;5;95m"},
    {color: "#875f87", code: "\\033[38;5;96m"},
    {color: "#875faf", code: "\\033[38;5;97m"},
    {color: "#875fd7", code: "\\033[38;5;98m"},
    {color: "#875fff", code: "\\033[38;5;99m"},
    {color: "#878700", code: "\\033[38;5;100m"},
    {color: "#87875f", code: "\\033[38;5;101m"},
    {color: "#878787", code: "\\033[38;5;102m"},
    {color: "#8787af", code: "\\033[38;5;103m"},
    {color: "#8787d7", code: "\\033[38;5;104m"},
    {color: "#8787ff", code: "\\033[38;5;105m"},
    {color: "#87af00", code: "\\033[38;5;106m"},
    {color: "#87af5f", code: "\\033[38;5;107m"},
    {color: "#87af87", code: "\\033[38;5;108m"},
    {color: "#87afaf", code: "\\033[38;5;109m"},
    {color: "#87afd7", code: "\\033[38;5;110m"},
    {color: "#87afff", code: "\\033[38;5;111m"},
    {color: "#87d700", code: "\\033[38;5;112m"},
    {color: "#87d75f", code: "\\033[38;5;113m"},
    {color: "#87d787", code: "\\033[38;5;114m"},
    {color: "#87d7af", code: "\\033[38;5;115m"},
    {color: "#87d7d7", code: "\\033[38;5;116m"},
    {color: "#87d7ff", code: "\\033[38;5;117m"},
    {color: "#87ff00", code: "\\033[38;5;118m"},
    {color: "#87ff5f", code: "\\033[38;5;119m"},
    {color: "#87ff87", code: "\\033[38;5;120m"},
    {color: "#87ffaf", code: "\\033[38;5;121m"},
    {color: "#87ffd7", code: "\\033[38;5;122m"},
    {color: "#87ffff", code: "\\033[38;5;123m"},
    {color: "#af0000", code: "\\033[38;5;124m"},
    {color: "#af005f", code: "\\033[38;5;125m"},
    {color: "#af0087", code: "\\033[38;5;126m"},
    {color: "#af00af", code: "\\033[38;5;127m"},
    {color: "#af00d7", code: "\\033[38;5;128m"},
    {color: "#af00ff", code: "\\033[38;5;129m"},
    {color: "#af5f00", code: "\\033[38;5;130m"},
    {color: "#af5f5f", code: "\\033[38;5;131m"},
    {color: "#af5f87", code: "\\033[38;5;132m"},
    {color: "#af5faf", code: "\\033[38;5;133m"},
    {color: "#af5fd7", code: "\\033[38;5;134m"},
    {color: "#af5fff", code: "\\033[38;5;135m"},
    {color: "#af8700", code: "\\033[38;5;136m"},
    {color: "#af875f", code: "\\033[38;5;137m"},
    {color: "#af8787", code: "\\033[38;5;138m"},
    {color: "#af87af", code: "\\033[38;5;139m"},
    {color: "#af87d7", code: "\\033[38;5;140m"},
    {color: "#af87ff", code: "\\033[38;5;141m"},
    {color: "#afaf00", code: "\\033[38;5;142m"},
    {color: "#afaf5f", code: "\\033[38;5;143m"},
    {color: "#afaf87", code: "\\033[38;5;144m"},
    {color: "#afafaf", code: "\\033[38;5;145m"},
    {color: "#afafd7", code: "\\033[38;5;146m"},
    {color: "#afafff", code: "\\033[38;5;147m"},
    {color: "#afd700", code: "\\033[38;5;148m"},
    {color: "#afd75f", code: "\\033[38;5;149m"},
    {color: "#afd787", code: "\\033[38;5;150m"},
    {color: "#afd7af", code: "\\033[38;5;151m"},
    {color: "#afd7d7", code: "\\033[38;5;152m"},
    {color: "#afd7ff", code: "\\033[38;5;153m"},
    {color: "#afff00", code: "\\033[38;5;154m"},
    {color: "#afff5f", code: "\\033[38;5;155m"},
    {color: "#afff87", code: "\\033[38;5;156m"},
    {color: "#afffaf", code: "\\033[38;5;157m"},
    {color: "#afffd7", code: "\\033[38;5;158m"},
    {color: "#afffff", code: "\\033[38;5;159m"},
    {color: "#d70000", code: "\\033[38;5;160m"},
    {color: "#d7005f", code: "\\033[38;5;161m"},
    {color: "#d70087", code: "\\033[38;5;162m"},
    {color: "#d700af", code: "\\033[38;5;163m"},
    {color: "#d700d7", code: "\\033[38;5;164m"},
    {color: "#d700ff", code: "\\033[38;5;165m"},
    {color: "#d75f00", code: "\\033[38;5;166m"},
    {color: "#d75f5f", code: "\\033[38;5;167m"},
    {color: "#d75f87", code: "\\033[38;5;168m"},
    {color: "#d75faf", code: "\\033[38;5;169m"},
    {color: "#d75fd7", code: "\\033[38;5;170m"},
    {color: "#d75fff", code: "\\033[38;5;171m"},
    {color: "#d78700", code: "\\033[38;5;172m"},
    {color: "#d7875f", code: "\\033[38;5;173m"},
    {color: "#d78787", code: "\\033[38;5;174m"},
    {color: "#d787af", code: "\\033[38;5;175m"},
    {color: "#d787d7", code: "\\033[38;5;176m"},
    {color: "#d787ff", code: "\\033[38;5;177m"},
    {color: "#d7af00", code: "\\033[38;5;178m"},
    {color: "#d7af5f", code: "\\033[38;5;179m"},
    {color: "#d7af87", code: "\\033[38;5;180m"},
    {color: "#d7afaf", code: "\\033[38;5;181m"},
    {color: "#d7afd7", code: "\\033[38;5;182m"},
    {color: "#d7afff", code: "\\033[38;5;183m"},
    {color: "#d7d700", code: "\\033[38;5;184m"},
    {color: "#d7d75f", code: "\\033[38;5;185m"},
    {color: "#d7d787", code: "\\033[38;5;186m"},
    {color: "#d7d7af", code: "\\033[38;5;187m"},
    {color: "#d7d7d7", code: "\\033[38;5;188m"},
    {color: "#d7d7ff", code: "\\033[38;5;189m"},
    {color: "#d7ff00", code: "\\033[38;5;190m"},
    {color: "#d7ff5f", code: "\\033[38;5;191m"},
    {color: "#d7ff87", code: "\\033[38;5;192m"},
    {color: "#d7ffaf", code: "\\033[38;5;193m"},
    {color: "#d7ffd7", code: "\\033[38;5;194m"},
    {color: "#d7ffff", code: "\\033[38;5;195m"},
    {color: "#ff0000", code: "\\033[38;5;196m"},
    {color: "#ff005f", code: "\\033[38;5;197m"},
    {color: "#ff0087", code: "\\033[38;5;198m"},
    {color: "#ff00af", code: "\\033[38;5;199m"},
    {color: "#ff00d7", code: "\\033[38;5;200m"},
    {color: "#ff00ff", code: "\\033[38;5;201m"},
    {color: "#ff5f00", code: "\\033[38;5;202m"},
    {color: "#ff5f5f", code: "\\033[38;5;203m"},
    {color: "#ff5f87", code: "\\033[38;5;204m"},
    {color: "#ff5faf", code: "\\033[38;5;205m"},
    {color: "#ff5fd7", code: "\\033[38;5;206m"},
    {color: "#ff5fff", code: "\\033[38;5;207m"},
    {color: "#ff8700", code: "\\033[38;5;208m"},
    {color: "#ff875f", code: "\\033[38;5;209m"},
    {color: "#ff8787", code: "\\033[38;5;210m"},
    {color: "#ff87af", code: "\\033[38;5;211m"},
    {color: "#ff87d7", code: "\\033[38;5;212m"},
    {color: "#ff87ff", code: "\\033[38;5;213m"},
    {color: "#ffaf00", code: "\\033[38;5;214m"},
    {color: "#ffaf5f", code: "\\033[38;5;215m"},
    {color: "#ffaf87", code: "\\033[38;5;216m"},
    {color: "#ffafaf", code: "\\033[38;5;217m"},
    {color: "#ffafd7", code: "\\033[38;5;218m"},
    {color: "#ffafff", code: "\\033[38;5;219m"},
    {color: "#ffd700", code: "\\033[38;5;220m"},
    {color: "#ffd75f", code: "\\033[38;5;221m"},
    {color: "#ffd787", code: "\\033[38;5;222m"},
    {color: "#ffd7af", code: "\\033[38;5;223m"},
    {color: "#ffd7d7", code: "\\033[38;5;224m"},
    {color: "#ffd7ff", code: "\\033[38;5;225m"},
    {color: "#ffff00", code: "\\033[38;5;226m"},
    {color: "#ffff5f", code: "\\033[38;5;227m"},
    {color: "#ffff87", code: "\\033[38;5;228m"},
    {color: "#ffffaf", code: "\\033[38;5;229m"},
    {color: "#ffffd7", code: "\\033[38;5;230m"},
    {color: "#ffffff", code: "\\033[38;5;231m"},
    {color: "#080808", code: "\\033[38;5;232m"},
    {color: "#121212", code: "\\033[38;5;233m"},
    {color: "#1c1c1c", code: "\\033[38;5;234m"},
    {color: "#262626", code: "\\033[38;5;235m"},
    {color: "#303030", code: "\\033[38;5;236m"},
    {color: "#3a3a3a", code: "\\033[38;5;237m"},
    {color: "#444444", code: "\\033[38;5;238m"},
    {color: "#4e4e4e", code: "\\033[38;5;239m"},
    {color: "#585858", code: "\\033[38;5;240m"},
    {color: "#626262", code: "\\033[38;5;241m"},
    {color: "#6c6c6c", code: "\\033[38;5;242m"},
    {color: "#767676", code: "\\033[38;5;243m"},
    {color: "#808080", code: "\\033[38;5;244m"},
    {color: "#8a8a8a", code: "\\033[38;5;245m"},
    {color: "#949494", code: "\\033[38;5;246m"},
    {color: "#9e9e9e", code: "\\033[38;5;247m"},
    {color: "#a8a8a8", code: "\\033[38;5;248m"},
    {color: "#b2b2b2", code: "\\033[38;5;249m"},
    {color: "#bcbcbc", code: "\\033[38;5;250m"},
    {color: "#c6c6c6", code: "\\033[38;5;251m"},
    {color: "#d0d0d0", code: "\\033[38;5;252m"},
    {color: "#dadada", code: "\\033[38;5;253m"},
    {color: "#e4e4e4", code: "\\033[38;5;254m"},
    {color: "#eeeeee", code: "\\033[38;5;255m"}
  ]

  currIndex: number = 0;

  getColorList(): string[] {
    let colors: string[] = [];
    Ps1ColorPalette.COLOR_MAP.forEach((itm) => colors.push(itm.color));
    return colors;
  }

  getCurrentIndex(): number {
    return this.currIndex;
  }

  getCurrentCSSColor(): string {
    return Ps1ColorPalette.COLOR_MAP[this.currIndex].color;
  }

  getCurrentTerminalColorFg(): string {
    return "\\[" + Ps1ColorPalette.COLOR_MAP[this.currIndex].code + "\\]";
  }

  getCurrentTerminalColorBg(): string {
    return "\\[" + Ps1ColorPalette.COLOR_MAP[this.currIndex].code.replace('[38;', '[48;') + "\\]";
  }

  getTerminalResetCode(): string {
    return "\\[\\e[0m\\]";
  }

  isNoColor(): boolean {
    return this.currIndex == 0;
  }

  setCurrentColorIndex(idx: number): void {
    this.currIndex=idx;
  }

}
