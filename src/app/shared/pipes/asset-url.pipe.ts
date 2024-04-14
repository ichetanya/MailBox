import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetUrl'
})
export class AssetUrlPipe implements PipeTransform {

  transform(value: string| any, type: 'image' | 'icon'): string {
    if (!value) return '';
    const basePath = type === 'image' ? 'assets/images/' : 'assets/icons/';
    return basePath + value;
  }

}