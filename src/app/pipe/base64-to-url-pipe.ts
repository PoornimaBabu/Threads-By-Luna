import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64ToUrl',
})
export class Base64ToUrlPipe implements PipeTransform {

  transform(base64String: string | undefined, mimeType: string = 'image/jpeg'): string {
    if (!base64String) {
      return ''; 
    }
    // The Data URL format is: data:[<MIME-type>];base64,[<data>]
    return `data:${mimeType};base64,${base64String}`;
  }

}
