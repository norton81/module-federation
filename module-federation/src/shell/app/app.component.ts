import {Compiler, Component, CUSTOM_ELEMENTS_SCHEMA, Injector, OnInit} from '@angular/core';
import {PluginOptions} from './plugins/plugin';
import {LookupService} from './plugins/lookup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;
  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private lookupService: LookupService,
  ) {
/*    import('shared/Module')
      .then(mod => mod.LazyModule)
      .then(lazyModule => {
        const myComponent = lazyModule.components['app-external'];
        console.log(myComponent);
        return lazyModule;
      })
      .then(lazyModule => this.compiler.compileModuleAsync(lazyModule))
      .then(factory => {
        factory.create(this.injector);
      });*/
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}
