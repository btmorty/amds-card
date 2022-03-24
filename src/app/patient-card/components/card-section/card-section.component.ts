import { Component, Directive, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
 @Directive({
  selector: `amds-section-title, [amds-section-title]`,
})
export class SectionTitleDirective {
  @HostBinding("class.section-title") sectionTitleClass = true;
}

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
 @Directive({
  selector: `amds-section-detail, [amds-section-detail]`,
})
export class SectionDetailDirective {
  @HostBinding("class.section-detail") sectionDetailClass = true;
}

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
 @Directive({
  selector: `amds-section-content, [amds-section-content]`,
})
export class SectionContentDirective {
  @HostBinding("class.section-content") sectionContentClass = true;
}

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
 @Component({
  selector: `amds-section-detail-item`,
  template: `<ng-content></ng-content>`
})
export class SectionDetailItemComponent {
  @HostBinding("class.section-detail-item") sectionDetailItemClass = true;
}

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
 @Component({
  selector: `amds-section-detail-label`,
  template: `<ng-content></ng-content>`
})
export class SectionDetailLabelComponent {
  @HostBinding("class.section-detail-label") sectionDetailLabelClass = true;
}

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
 @Component({
  selector: `amds-section-detail-text`,
  template: `<ng-content></ng-content>`
})
export class SectionDetailTextComponent {
  @HostBinding("class.section-detail-text") sectionDetailTextClass = true;
}

@Component({
  selector: 'amds-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardSectionComponent {
  @Input() isExpanded = false;
  @Input() sectionIcon = '';

  constructor() { }

  toggleSectionActive() {
    this.isExpanded = !this.isExpanded;
  }

}
