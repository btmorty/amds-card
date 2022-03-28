/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/directive-selector */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Directive,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: `amds-card-actions, [amds-card-actions]`,
})
export class AmdsCardActionsDirective {
  @HostBinding('class.amds-card-actions') cardActionsClass = true;
}

/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: 'amds-card-content, [amds-card-content]',
})
export class AmdsCardContentDirective {
  @HostBinding('class.amds-card-content') cardContentClass = true;
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
  selector: 'amds-card',
  exportAs: 'amdsCard',
  templateUrl: 'card.html',
  styleUrls: ['card.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmdsCardComponent {
  @HostBinding('class.amds-card') cardClass = true;
  /**
   * string value of the hex color code that controls the main card border color.
   */
  @Input() borderColor = '';

  /**
   * string value of the name of the svg icon to use as the main card icon.
   */
  @Input() cardIcon = '';

  /**
   * string value of the card title.
   */
  @Input() titleText = '';

  /**
   * string value of the card sub-title.
   */
  @Input() subTitleText = '';

  /**
   * number value that should be synced with the number of gridster rows the card is filling.
   */
  @Input() rows = 2;

  /**
   * boolean value to indicate the card has not fetched any data yet.
   */
  @Input() isInitialSate = true;

  /**
   * optional string value containing the message to show when before card is first rendered and no data has been fetched yet.
   */
  @Input() initialStateMessage: string | undefined;
  /**
   * boolean value to indicate card has not data to display.
   */
  @Input() isEmptyState = false;

  /**
   * optional string value containing the message to be displayed when there is no data.
   */
  @Input() emptyStateMessage: string | undefined;

  /**
   * boolean value to indicate card is doing initial fecth of data.
   */
  @Input() isInitializing = true;

  /**
   * boolean value to indicate card is performing a backend task.
   */
  @Input() isLoading = false;

  /**
   * boolean value to indicate card is selected in main viewport.
   */
  @Input() isSelected = false;

  @Output() cardSelected = new EventEmitter<boolean>();

  onCardSelected() {
    this.cardSelected.emit(true);
  }
}
