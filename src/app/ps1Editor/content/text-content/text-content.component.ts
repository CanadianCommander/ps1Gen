import { Component, OnInit, DoCheck, Input, ViewChild, ElementRef} from '@angular/core';
import { ContentComponent } from '../content-component'
import { Ps1Element } from "../../model/ps1-element"
import { TextContent } from '../../model/text-content'

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss']
})
export class TextContentComponent extends ContentComponent implements OnInit, DoCheck{
  @ViewChild('textElement') textElement: ElementRef
  @Input() ps1Element: Ps1Element;

  constructor() { super() }

  ngOnInit() {
  }

  ngDoCheck() {
    this.updateText({target: this.textElement.nativeElement});
  }

  preventNewLine(event): boolean {
    return !(event.keyCode == 13);
  }

  updateText(event): void {
    (<TextContent>this.ps1Element.content.getCurrentContent()).setText(event.target.textContent);
  }
}
