import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss',
})
export class VerifyComponent implements AfterViewInit {
  private static readonly DIGIT_PATTERN = /\D/g;

  @ViewChildren('digitInput')
  private readonly digitInputs!: QueryList<ElementRef<HTMLInputElement>>;

  protected readonly digitIndexes = [0, 1, 2, 3, 4, 5];
  protected readonly digits = Array.from({ length: 6 }, () => '');

  public ngAfterViewInit(): void {
    this.focusInput(0);
  }

  protected onDigitChange(index: number, value: string): void {
    const sanitizedValue = this.sanitize(value);

    if (sanitizedValue.length > 1) {
      this.fillDigits(index, sanitizedValue);
      return;
    }

    this.digits[index] = sanitizedValue;

    if (sanitizedValue && index < this.digits.length - 1) {
      this.focusInput(index + 1);
    }
  }

  protected onPaste(event: ClipboardEvent, index: number): void {
    event.preventDefault();

    const pastedValue = event.clipboardData?.getData('text') ?? '';
    const sanitizedValue = this.sanitize(pastedValue);

    if (!sanitizedValue) {
      return;
    }

    this.fillDigits(index, sanitizedValue);
  }

  protected onKeyDown(event: KeyboardEvent, index: number): void {
    if (event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }

    if (event.key.length === 1 && !/^\d$/.test(event.key)) {
      event.preventDefault();
      return;
    }

    if (event.key === 'Backspace' && !this.digits[index] && index > 0) {
      this.digits[index - 1] = '';
      this.focusInput(index - 1);
      event.preventDefault();
      return;
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      this.focusInput(index - 1);
      event.preventDefault();
      return;
    }

    if (event.key === 'ArrowRight' && index < this.digits.length - 1) {
      this.focusInput(index + 1);
      event.preventDefault();
    }
  }

  protected selectInput(event: FocusEvent): void {
    const input = event.target as HTMLInputElement | null;
    input?.select();
  }

  private fillDigits(startIndex: number, value: string): void {
    const sanitizedValue = this.sanitize(value).slice(0, this.digits.length - startIndex);

    for (let digitIndex = startIndex; digitIndex < this.digits.length; digitIndex += 1) {
      const relativeIndex = digitIndex - startIndex;
      this.digits[digitIndex] = sanitizedValue[relativeIndex] ?? '';
    }

    const nextIndex = Math.min(startIndex + sanitizedValue.length, this.digits.length - 1);
    this.focusInput(nextIndex);
  }

  private focusInput(index: number): void {
    requestAnimationFrame(() => {
      const input = this.digitInputs.get(index)?.nativeElement;
      input?.focus();
      input?.select();
    });
  }

  private sanitize(value: string): string {
    return value.replace(VerifyComponent.DIGIT_PATTERN, '');
  }
}
