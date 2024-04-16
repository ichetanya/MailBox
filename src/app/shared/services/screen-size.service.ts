import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface WindowSize {
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  size: BehaviorSubject<WindowSize>;

  constructor() {
    let windowSize$ = fromEvent(window, 'resize').pipe(startWith(0));

    this.size = new BehaviorSubject<WindowSize>({ width: window.innerWidth, height: window.innerHeight });

    windowSize$.pipe(
      map(() => ({ width: window.innerWidth, height: window.innerHeight }))
    ).subscribe(size => this.size.next(size));
  }
}