/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/directive-selector */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Directive,
  Input,
  HostBinding,
} from "@angular/core";

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
 @Directive({
  selector: `amds-card-actions, [amds-card-actions]`,
})
export class AmdsCardActionsDirective {
  @HostBinding("class.amds-card-actions") cardActionsClass = true;
}

/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: "amds-card-content, [amds-card-content]",
})
export class AmdsCardContentDirective {
  @HostBinding("class.amds-card-content") cardContentClass = true;
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
  templateUrl: "card.html",
  styleUrls: ["card.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmdsCardComponent {
  @HostBinding("class.amds-card") cardClass = true;
  @Input() borderColor = "";
  @Input() cardIcon = "";
  @Input() titleText = "";
  @Input() subTitleText = "";
}