import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debounce: Subject<string> = new Subject<string>();
  private debounceSuscription?: Subscription;
  @Input()
  public placeholder: string = '';
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();
  @Input()
  public initialValue: string = "";

  ngOnInit(): void {
    this.debounceSuscription = this.debounce
      .pipe(
        debounceTime(1000)
      )
      .subscribe({
        next: value => {
          this.onDebounce.emit(value);
        }
      })
  }
  ngOnDestroy(): void {
    this.debounceSuscription?.unsubscribe();
  }

  emitValue(value: string) {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debounce.next(searchTerm);
  }
}
