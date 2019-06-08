import { Component, OnInit, AfterContentChecked, ComponentFactoryResolver, ViewChild, Input} from '@angular/core';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component'
import { TextContentComponent } from '../text-content/text-content.component'
import { Ps1Element } from "../../model/ps1-element"
import { ContentComponent } from '../content-component'

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss']
})
export class ContentLoaderComponent implements OnInit, AfterContentChecked {

  @Input() ps1Element : Ps1Element;
  @ViewChild(DynamicComponentDirective) dynamicContainer : DynamicComponentDirective;
  currComponentClass: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.refreshComponent();
  }

  ngAfterContentChecked() {
    this.refreshComponent();
  }

  refreshComponent() {
    let newComponentClass = this.ps1Element.content.getCurrentContent().getComponent();
    if (newComponentClass !== this.currComponentClass) {
      this.currComponentClass = newComponentClass
      this.loadContent(newComponentClass);
    }
  }

  loadContent(contentClass: any) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(contentClass);

    let viewContainerRef = this.dynamicContainer.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ContentComponent>componentRef.instance).ps1Element = this.ps1Element;
  }


}
