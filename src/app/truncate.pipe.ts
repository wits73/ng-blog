import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('test : ' + args);
    const limit = args > 0 ? args : 10;
    const trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
