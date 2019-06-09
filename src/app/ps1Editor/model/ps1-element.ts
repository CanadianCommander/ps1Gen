import { ColorPalette } from './color-palette';
import { ContentCollection } from './content-collection'

export class Ps1Element {
  constructor(public content: ContentCollection,
              public color: ColorPalette,
              public backgroundColor: ColorPalette) {}
}
