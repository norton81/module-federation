import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {PictureComponent} from './components/picture/picture.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LIBRARY_ROUTES} from './library.routes';
import {ExternalComponent} from './components/external/external.component';

@NgModule({
  declarations: [
    PictureComponent,
    ExternalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LIBRARY_ROUTES)
  ],
  exports: [PictureComponent, ExternalComponent]
})
export class LibraryModule {
}
