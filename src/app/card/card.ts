import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Directive,
  Input,
  Optional,
  Inject,
} from "@angular/core";
import {ANIMATION_MODULE_TYPE} from "@angular/platform-browser/animations";

/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: "amds-card-content, [amds-card-content]",
  host: {"class": "amds-card-content"},
})
export class AmdsCardContent {}

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
export class AmdsCardTitle {}

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
export class AmdsCardSubtitle {}

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: "amds-card-actions",
  exportAs: "amdsCardActions",
  host: {
    "class": "amds-card-actions",
    "[class.amds-card-actions-align-end]": "align === \"end\"",
  },
})
export class AmdsCardActions {
  /** Position of the actions inside the card. */
  @Input() align: "start" | "end" = "start";
}

/**
 * A basic content container component that adds the styles of a Material design card.
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
  templateUrl: "card.html",
  styleUrls: ["card.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "class": "amds-card amds-focus-indicator",
    "[class._amds-animation-noopable]": "_animationMode === \"NoopAnimations\"",
  },
})
export class AmdsCard {
  @Input() color: string;
  // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode?: string) {}
}

/**
 * Component intended to be used within the `<amds-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */
@Component({
  selector: "amds-card-header",
  templateUrl: "card-header.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {"class": "amds-card-header"},
})
export class AmdsCardHeader {
  @Input() icon: string;
}
