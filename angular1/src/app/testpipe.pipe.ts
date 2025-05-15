import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(value: any, wish:string): any {
    if (value == 'm') {
      return `${wish} Mr. ${value.name}`;
    } else {
      return `${wish} Mrs. ${value.name}`;
    }
  }

}
