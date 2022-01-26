/* eslint-disable @angular-eslint/component-selector */
import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Input } from "@angular/core";

/**
 * Component intended to be used within the `<amds-card-header>` component. It adds styles for buttons
 * @docs-private
 */
@Component({
  selector: "button[amds-card-button]",
  exportAs: "amdsCardButton",
  templateUrl: "card-button.html",
  styleUrls: ["card.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmdsCardButtonComponent {
  @HostBinding("class.amds-card-button") cardButtonClass = true;
  @HostBinding("[attr].disabled") disabled = false;
  @Input() buttonIcon = "";
}
