import { Component, OnInit, Input } from '@angular/core';
import { Ps1GraphicListComponent } from '../ps1-graphic-list/ps1-graphic-list.component';
import { Ps1Element } from "../model/ps1-element"
import { Ps1BuilderService } from '../service/ps1-builder.service'

@Component({
  selector: 'app-ps1-editor-element',
  templateUrl: './ps1-element.component.html',
  styleUrls: ['./ps1-element.component.scss']
})
export class Ps1ElementComponent implements OnInit {
  @Input() ps1Element: Ps1Element;

  constructor(private ps1Builder: Ps1BuilderService) { }

  ngOnInit() {
  }

  createNewElementOnTab(event): void {
    if (event.keyCode == 9)
    {
      this.ps1Builder.addElement(new Ps1Element());
    }
  }

  preventNewLine(event): boolean {
    return !(event.keyCode == 13);
  }

  updateText(event): void {
    this.ps1Element.text = event.target.textContent;
  }

  deleteSelf(): void {
    this.ps1Builder.deleteElement(this.ps1Element);
  }
}
