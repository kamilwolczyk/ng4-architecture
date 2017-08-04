import { Injectable } from '@angular/core';

@Injectable()
export class NumberExtensionsService {
  round(value: number, places: number): number {
    return parseFloat(value.toFixed(places));
  }
}
