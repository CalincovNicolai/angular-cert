import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingsComponent),
      multi: true,
    },
  ],
})
export class RatingsComponent implements ControlValueAccessor {
  val: number = 0;

  onChange = (val: number) => {};
  onTouched = () => {};

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: () => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: number) {
    if (value) {
      this.value = value;
    }
  }
}
