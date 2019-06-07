import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component'
import { TextContentComponent } from '../text-content/text-content.component'
import { Ps1Element } from "../../model/ps1-element"
import { ContentComponent } from '../content-component'

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss']
})
export class ContentLoaderComponent implements OnInit {

  @Input() ps1Element: Ps1Element;
  @ViewChild(DynamicComponentDirective) dynamicContainer : DynamicComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadContent(this.ps1Element.content.getCurrentContent().getComponent());
  }

  loadContent(contentClass: any) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(contentClass);

    let viewContainerRef = this.dynamicContainer.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ContentComponent>componentRef.instance).ps1Element = this.ps1Element;
  }


}
