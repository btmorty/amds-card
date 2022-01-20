import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Directive,
  Input,
  HostListener,
  ElementRef,
} from "@angular/core";

/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: "amds-card-content, [amds-card-content]",
  host: { "class": "amds-card-content" },
})
export class AmdsCardContent { }

/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: `amds-card-title, [amds-card-title]`,
  host: {
    "class": "amds-card-title",
  },
})
export class AmdsCardTitle { }

/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: `amds-card-subtitle, [amds-card-subtitle]`,
  host: {
    "class": "amds-card-subtitle",
  },
})
export class AmdsCardSubtitle { }

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: "amds-card-actions",
  exportAs: "amdsCardActions",
  host: {
    "class": "amds-card-actions",
  },
})
export class AmdsCardActions { }

/**
 * Action button behavior directive, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: "[hoverColor]",
})
export class HoverColorDirective {

  constructor(private el: ElementRef) { }
  @Input() hoverColor: string;

  @HostListener("mouseenter") onMouseEnter(): void {
    this.setElementColor(this.hoverColor);
  }

  @HostListener("mouseleave") onMouseLeave(): void {
    this.setElementColor("#CAD1DD");
  }

  private setElementColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }

}

/**
 * A basic content container component that adds the styles of an AdvancedMD design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - amds-card-title
 * - amds-card-subtitle
 * - amds-card-content
 * - amds-card-actions
 */
@Component({
  selector: "amds-card",
  exportAs: "amdsCard",
  host: { "class": "amds-card" },
  templateUrl: "card.html",
  styleUrls: ["card.scss"],
  inputs: ["color"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmdsCard {
  @Input() color: string;
}

/**
 * Component intended to be used within the `<amds-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */
@Component({
  selector: "amds-card-header",
  exportAs: "amdsCardHeader",
  host: { "class": "amds-card-header" },
  templateUrl: "card-header.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmdsCardHeader {
  @Input() icon: string;
}

/**
 * Component intended to be used within the `<amds-card-header>` component. It adds styles for buttons
 * @docs-private
 */
@Component({
  selector: "button[amds-card-button]",
  exportAs: "amdsCardButton",
  host: {
    "class": "amds-card-button",
    "[attr.disabled]": "disabled || null",
  },
  templateUrl: "card-button.html",
  inputs: ["disabled"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmdsCardButton {
  @Input() icon: string;
  @Input() color: string;
}
