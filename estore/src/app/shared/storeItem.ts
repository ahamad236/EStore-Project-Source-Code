import { BehaviorSubject, Observable } from 'rxjs';

export class StoreItem<T> {
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
  }

  protected setValue(newValue: T): void {
    this._state$.next(newValue);
  }

  protected get value$(): Observable<T> {
    return this._state$.asObservable();
  }

  protected get value(): T {
    return this._state$.value;
  }
}
