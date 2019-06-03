import { Component, OnInit } from '@angular/core';
import { Ps1Element } from "../model/ps1-element"
import { Ps1BuilderService } from '../service/ps1-builder.service'

@Component({
  selector: 'app-ps1-editor-graphic-list',
  templateUrl: './ps1-graphic-list.component.html',
  styleUrls: ['./ps1-graphic-list.component.scss']
})
export class Ps1GraphicListComponent implements OnInit {

  private ps1Elements: Ps1Element[];

  constructor(private ps1Builder: Ps1BuilderService) { }

  ngOnInit() {
    this.ps1Elements = this.ps1Builder.getElementList();
  }

  addElement() {
    this.ps1Builder.addDefaultElement();
  }

  clearElements() {
    let decision = confirm("Clear PS1 string?")
    if (decision)
    {
      this.ps1Builder.deleteAllElements();
    }
  }
}
