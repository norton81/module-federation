
import { Injectable } from '@angular/core';
import { PluginOptions } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
  lookup(): Promise<PluginOptions[]> {
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:7000/remoteEntry.js',
        remoteName: 'shared',
        exposedModule: './External',

        displayName: 'External',
        componentName: 'ExternalComponent'
      },
      {
        remoteEntry: 'http://localhost:7000/remoteEntry.js',
        remoteName: 'shared',
        exposedModule: './Picture',

        displayName: 'Picture',
        componentName: 'PictureComponent'
      }
    ] as PluginOptions[]);
  }
}
