// Core
import {
  Input,
  Directive,
  TemplateRef,
  SimpleChanges,
  ViewContainerRef,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[counterOf]',
})
export class CounterDirective implements OnChanges {
  @Input('counterOf')
  counter: number = 0;

  constructor(
    private readonly container: ViewContainerRef,
    private readonly template: TemplateRef<Object>,
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.container.clear();

    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(
        this.template,
        new CounterDirectiveContext(i + 1),
      );
    }
  }
}

class CounterDirectiveContext {
  constructor(public readonly $implicit: number) {}
}
