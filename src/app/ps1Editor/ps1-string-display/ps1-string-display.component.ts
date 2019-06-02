import { Component, OnInit } from '@angular/core';
import { Ps1BuilderService } from '../service/ps1-builder.service'

@Component({
  selector: 'app-ps1-string-display',
  templateUrl: './ps1-string-display.component.html',
  styleUrls: ['./ps1-string-display.component.scss']
})
export class Ps1StringDisplayComponent implements OnInit {

  constructor(private ps1Builder: Ps1BuilderService) { }

  ngOnInit() {
  }

}
