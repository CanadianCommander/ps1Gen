import { Component, OnInit, Input } from '@angular/core';
import { Ps1Element } from "../../model/ps1-element"

@Component({
  selector: 'app-special-content',
  templateUrl: './special-content.component.html',
  styleUrls: ['./special-content.component.scss']
})
export class SpecialContentComponent implements OnInit {
  @Input() ps1Element: Ps1Element;

  constructor() { }

  ngOnInit() {
  }

}
