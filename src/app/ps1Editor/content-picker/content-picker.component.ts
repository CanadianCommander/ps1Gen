import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Ps1Element } from "../model/ps1-element"
import { Content } from "../model/content-collection"

@Component({
  selector: 'app-content-picker',
  templateUrl: './content-picker.component.html',
  styleUrls: ['./content-picker.component.scss']
})
export class ContentPickerComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter;
  @Input() ps1Element: Ps1Element;
  public contentList: Content[] = [];

  constructor() { }

  ngOnInit() {
    for (let contentType of this.ps1Element.content.getContentTypes()) {
      this.contentList.push(new contentType())
    }
  }

  selectContent(newContent) {
    this.ps1Element.content.setCurrentContent(newContent);
  }

  hideSelf(): void {
    this.close.emit(this);
  }
}
