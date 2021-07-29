import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  Type,
  SimpleChanges
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from './plugin';

@Component({
  selector: 'app-plugin-proxy',
  template: `
        <ng-container #placeHolder></ng-container>
    `,
  styleUrls: ['./plugin-proxy.component.scss']
})
export class PluginProxyComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver) { }

  @Input() options: PluginOptions;

  async ngOnChanges(changes: SimpleChanges): Promise<any> {
    this.viewContainer.clear();

    const component = await loadRemoteModule(this.options)
      .then((m) => {
        return m[this.options.componentName];
      });

    // Ivy --> ViewEngine
    const factory = this.cfr.resolveComponentFactory(component);
    this.viewContainer.createComponent(factory, null, this.injector);
  }
}

