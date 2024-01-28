import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFormat',
})
export class CategoryFormatPipe implements PipeTransform {
  transform(value: string) {
    const words = value.split('-').map((word) => this.capitalize(word));

    for (let i = 0; i < words.length; i++) {
      if (words[i] === 'Mens') {
        words[i] = "Men's";
      } else if (words[i] === 'Womens') {
        words[i] = "Women's";
      }
    }

    return words.join(' ');
  }
  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
