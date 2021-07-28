import {NgModule} from '@angular/core';
import {PictureComponent} from './components/picture/picture.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LIBRARY_ROUTES} from './library.routes';

@NgModule({
  declarations: [
    PictureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LIBRARY_ROUTES)
  ],
  providers: [],
})
export class LibraryModule { }
