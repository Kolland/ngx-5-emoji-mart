/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { EmojiService } from './emoji.service';
/**
 * @record
 */
export function Emoji() { }
function Emoji_tsickle_Closure_declarations() {
    /** @type {?} */
    Emoji.prototype.native;
    /** @type {?} */
    Emoji.prototype.forceSize;
    /** @type {?} */
    Emoji.prototype.tooltip;
    /** @type {?} */
    Emoji.prototype.skin;
    /** @type {?} */
    Emoji.prototype.sheetSize;
    /** @type {?} */
    Emoji.prototype.set;
    /** @type {?} */
    Emoji.prototype.size;
    /** @type {?} */
    Emoji.prototype.emoji;
    /** @type {?} */
    Emoji.prototype.backgroundImageFn;
    /** @type {?|undefined} */
    Emoji.prototype.fallback;
    /** @type {?} */
    Emoji.prototype.emojiOver;
    /** @type {?} */
    Emoji.prototype.emojiLeave;
    /** @type {?} */
    Emoji.prototype.emojiClick;
}
/**
 * @record
 */
export function EmojiEvent() { }
function EmojiEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiEvent.prototype.emoji;
    /** @type {?} */
    EmojiEvent.prototype.$event;
}
export class EmojiComponent {
    /**
     * @param {?} emojiService
     */
    constructor(emojiService) {
        this.emojiService = emojiService;
        this.skin = 1;
        this.set = 'apple';
        this.sheetSize = 64;
        this.native = false;
        this.forceSize = false;
        this.tooltip = false;
        this.size = 24;
        this.emoji = '';
        this.hideObsolete = false;
        this.emojiOver = new EventEmitter();
        this.emojiLeave = new EventEmitter();
        this.emojiClick = new EventEmitter();
        this.title = '';
        this.custom = false;
        this.SHEET_COLUMNS = 52;
        this.isVisible = true;
        // TODO: replace 4.0.3 w/ dynamic get verison from emoji-datasource in package.json
        this.backgroundImageFn = (set, sheetSize) => `https://unpkg.com/emoji-datasource-${this.set}@4.0.4/img/${this.set}/sheets-256/${this.sheetSize}.png`;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.emoji) {
            return this.isVisible = false;
        }
        const /** @type {?} */ data = this.getData();
        if (!data) {
            return this.isVisible = false;
        }
        // const children = this.children;
        this.unified = data.native || null;
        if (data.custom) {
            this.custom = data.custom;
        }
        if (!data.unified && !data.custom) {
            return this.isVisible = false;
        }
        if (this.tooltip) {
            this.title = data.short_names[0];
        }
        if (data.obsoleted_by && this.hideObsolete) {
            return this.isVisible = false;
        }
        if (this.native && data.unified && data.native) {
            // hide older emoji before the split into gendered emoji
            this.style = { fontSize: `${this.size}px` };
            if (this.forceSize) {
                this.style.display = 'inline-block';
                this.style.width = `${this.size}px`;
                this.style.height = `${this.size}px`;
            }
        }
        else if (data.custom) {
            this.style = {
                width: `${this.size}px`,
                height: `${this.size}px`,
                display: 'inline-block',
                backgroundImage: `url(${data.imageUrl})`,
                backgroundSize: 'contain',
            };
        }
        else {
            let /** @type {?} */ setHasEmoji = true;
            if (data.hidden && data.hidden.includes(this.set)) {
                setHasEmoji = true;
            }
            if (!setHasEmoji) {
                if (this.fallback) {
                    this.style = { fontSize: `${this.size}px` };
                    this.unified = this.fallback(data);
                }
                else {
                    return this.isVisible = false;
                }
            }
            else {
                this.style = {
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                    display: 'inline-block',
                    backgroundImage: `url(${this.backgroundImageFn(this.set, this.sheetSize)})`,
                    backgroundSize: `${100 * this.SHEET_COLUMNS}%`,
                    backgroundPosition: this.getPosition(),
                };
            }
        }
        return this.isVisible = true;
    }
    /**
     * @return {?}
     */
    getPosition() {
        const [sheet_x, sheet_y] = /** @type {?} */ ((this.getData())).sheet;
        const /** @type {?} */ multiply = 100 / (this.SHEET_COLUMNS - 1);
        return `${multiply * sheet_x}% ${multiply * sheet_y}%`;
    }
    /**
     * @return {?}
     */
    getData() {
        return this.emojiService.getData(this.emoji, this.skin, this.set);
    }
    /**
     * @return {?}
     */
    getSanitizedData() {
        return this.emojiService.getSanitizedData(this.emoji, this.skin, this.set);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleClick($event) {
        const /** @type {?} */ emoji = /** @type {?} */ ((this.getSanitizedData()));
        this.emojiClick.emit({ emoji, $event });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleOver($event) {
        const /** @type {?} */ emoji = /** @type {?} */ ((this.getSanitizedData()));
        this.emojiOver.emit({ emoji, $event });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleLeave($event) {
        const /** @type {?} */ emoji = /** @type {?} */ ((this.getSanitizedData()));
        this.emojiLeave.emit({ emoji, $event });
    }
}
EmojiComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoji',
                template: `
  <span *ngIf="isVisible"
    (click)="handleClick($event)"
    (mouseenter)="handleOver($event)"
    (mouseleave)="handleLeave($event)"
    [title]="title"
    class="emoji-mart-emoji"
    [class.emoji-mart-emoji-native]="native"
    [class.emoji-mart-emoji-custom]="custom">
    <span [ngStyle]="style">
      {{ unified }}
      <ng-content></ng-content>
    </span>
  </span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
            },] },
];
/** @nocollapse */
EmojiComponent.ctorParameters = () => [
    { type: EmojiService }
];
EmojiComponent.propDecorators = {
    skin: [{ type: Input }],
    set: [{ type: Input }],
    sheetSize: [{ type: Input }],
    native: [{ type: Input }],
    forceSize: [{ type: Input }],
    tooltip: [{ type: Input }],
    size: [{ type: Input }],
    emoji: [{ type: Input }],
    fallback: [{ type: Input }],
    hideObsolete: [{ type: Input }],
    emojiOver: [{ type: Output }],
    emojiLeave: [{ type: Output }],
    emojiClick: [{ type: Output }],
    backgroundImageFn: [{ type: Input }]
};
function EmojiComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiComponent.prototype.skin;
    /** @type {?} */
    EmojiComponent.prototype.set;
    /** @type {?} */
    EmojiComponent.prototype.sheetSize;
    /** @type {?} */
    EmojiComponent.prototype.native;
    /** @type {?} */
    EmojiComponent.prototype.forceSize;
    /** @type {?} */
    EmojiComponent.prototype.tooltip;
    /** @type {?} */
    EmojiComponent.prototype.size;
    /** @type {?} */
    EmojiComponent.prototype.emoji;
    /** @type {?} */
    EmojiComponent.prototype.fallback;
    /** @type {?} */
    EmojiComponent.prototype.hideObsolete;
    /** @type {?} */
    EmojiComponent.prototype.emojiOver;
    /** @type {?} */
    EmojiComponent.prototype.emojiLeave;
    /** @type {?} */
    EmojiComponent.prototype.emojiClick;
    /** @type {?} */
    EmojiComponent.prototype.style;
    /** @type {?} */
    EmojiComponent.prototype.title;
    /** @type {?} */
    EmojiComponent.prototype.unified;
    /** @type {?} */
    EmojiComponent.prototype.custom;
    /** @type {?} */
    EmojiComponent.prototype.SHEET_COLUMNS;
    /** @type {?} */
    EmojiComponent.prototype.isVisible;
    /** @type {?} */
    EmojiComponent.prototype.backgroundImageFn;
    /** @type {?} */
    EmojiComponent.prototype.emojiService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppLyIsInNvdXJjZXMiOlsiZW1vamkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQy9DLE1BQU07Ozs7SUEyQkosWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBMUJmLENBQUM7bUJBQ0gsT0FBTzt5QkFDSyxFQUFFO3NCQUNSLEtBQUs7eUJBQ0MsS0FBSzt1QkFDVCxLQUFLO29CQUNYLEVBQUU7cUJBQ0EsRUFBRTs0QkFFWCxLQUFLO3lCQUNhLElBQUksWUFBWSxFQUFFOzBCQUNoQixJQUFJLFlBQVksRUFBRTswQkFDbEIsSUFBSSxZQUFZLEVBQUU7cUJBRXRELEVBQUU7c0JBRUQsS0FBSzs2QkFDRSxFQUFFO3lCQUNOLElBQUk7O2lDQUdnQyxDQUFDLEdBQVcsRUFBRSxTQUFpQixFQUFFLEVBQUUsQ0FDakYsc0NBQXNDLElBQUksQ0FBQyxHQUFHLGNBQzVDLElBQUksQ0FBQyxHQUNQLGVBQWUsSUFBSSxDQUFDLFNBQVMsTUFBTTtLQUVhOzs7O0lBRWxELFdBQVc7UUFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUMvQjtRQUNELHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FB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QUVELFdBQVcsQ0FBQyxNQUFhO1FBQ3ZCLHVCQUFNLEtBQUssc0JBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ3pDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFhO1FBQ3RCLHVCQUFNLEtBQUssc0JBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFhO1FBQ3ZCLHVCQUFNLEtBQUssc0JBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ3pDOzs7WUFsSkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0dBY1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUExQ1EsWUFBWTs7O21CQTRDbEIsS0FBSztrQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxNQUFNO3lCQUNOLE1BQU07eUJBQ04sTUFBTTtnQ0FRTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaURhdGEgfSBmcm9tICcuL2RhdGEvZGF0YS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IEVtb2ppU2VydmljZSB9IGZyb20gJy4vZW1vamkuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1vamkge1xuICBuYXRpdmU6IGJvb2xlYW47XG4gIGZvcmNlU2l6ZTogYm9vbGVhbjtcbiAgdG9vbHRpcDogYm9vbGVhbjtcbiAgc2tpbjogMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuICBzaGVldFNpemU6IDE2IHwgMjAgfCAzMiB8IDY0O1xuICBzZXQ6ICdhcHBsZScgfCAnZ29vZ2xlJyB8ICd0d2l0dGVyJyB8ICdlbW9qaW9uZScgfCAnbWVzc2VuZ2VyJyB8ICdmYWNlYm9vaycgfCAnJztcbiAgc2l6ZTogbnVtYmVyO1xuICBlbW9qaTogc3RyaW5nIHwgRW1vamlEYXRhO1xuICBiYWNrZ3JvdW5kSW1hZ2VGbjogKHNldDogc3RyaW5nLCBzaGVldFNpemU6IEVtb2ppWydzaGVldFNpemUnXSkgPT4gc3RyaW5nO1xuICBmYWxsYmFjaz86IChkYXRhOiBhbnkpID0+IHN0cmluZztcbiAgZW1vamlPdmVyOiBFdmVudEVtaXR0ZXI8RW1vamlFdmVudD47XG4gIGVtb2ppTGVhdmU6IEV2ZW50RW1pdHRlcjxFbW9qaUV2ZW50PjtcbiAgZW1vamlDbGljazogRXZlbnRFbWl0dGVyPEVtb2ppRXZlbnQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtb2ppRXZlbnQge1xuICBlbW9qaTogRW1vamlEYXRhO1xuICAkZXZlbnQ6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZW1vamknLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiAqbmdJZj1cImlzVmlzaWJsZVwiXG4gICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxuICAgIChtb3VzZWVudGVyKT1cImhhbmRsZU92ZXIoJGV2ZW50KVwiXG4gICAgKG1vdXNlbGVhdmUpPVwiaGFuZGxlTGVhdmUoJGV2ZW50KVwiXG4gICAgW3RpdGxlXT1cInRpdGxlXCJcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtZW1vamlcIlxuICAgIFtjbGFzcy5lbW9qaS1tYXJ0LWVtb2ppLW5hdGl2ZV09XCJuYXRpdmVcIlxuICAgIFtjbGFzcy5lbW9qaS1tYXJ0LWVtb2ppLWN1c3RvbV09XCJjdXN0b21cIj5cbiAgICA8c3BhbiBbbmdTdHlsZV09XCJzdHlsZVwiPlxuICAgICAge3sgdW5pZmllZCB9fVxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgPC9zcGFuPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEVtb2ppQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBFbW9qaSB7XG4gIEBJbnB1dCgpIHNraW46IEVtb2ppWydza2luJ10gPSAxO1xuICBASW5wdXQoKSBzZXQ6IEVtb2ppWydzZXQnXSA9ICdhcHBsZSc7XG4gIEBJbnB1dCgpIHNoZWV0U2l6ZTogRW1vamlbJ3NoZWV0U2l6ZSddID0gNjQ7XG4gIEBJbnB1dCgpIG5hdGl2ZTogRW1vamlbJ25hdGl2ZSddID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcmNlU2l6ZTogRW1vamlbJ2ZvcmNlU2l6ZSddID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IEVtb2ppWyd0b29sdGlwJ10gPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZTogRW1vamlbJ3NpemUnXSA9IDI0O1xuICBASW5wdXQoKSBlbW9qaTogRW1vamlbJ2Vtb2ppJ10gPSAnJztcbiAgQElucHV0KCkgZmFsbGJhY2s/OiBFbW9qaVsnZmFsbGJhY2snXTtcbiAgQElucHV0KCkgaGlkZU9ic29sZXRlID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBlbW9qaU92ZXI6IEVtb2ppWydlbW9qaU92ZXInXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVtb2ppTGVhdmU6IEVtb2ppWydlbW9qaUxlYXZlJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbW9qaUNsaWNrOiBFbW9qaVsnZW1vamlDbGljayddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzdHlsZTogYW55O1xuICB0aXRsZSA9ICcnO1xuICB1bmlmaWVkPzogc3RyaW5nIHwgbnVsbDtcbiAgY3VzdG9tID0gZmFsc2U7XG4gIFNIRUVUX0NPTFVNTlMgPSA1MjtcbiAgaXNWaXNpYmxlID0gdHJ1ZTtcbiAgLy8gVE9ETzogcmVwbGFjZSA0LjAuMyB3LyBkeW5hbWljIGdldCB2ZXJpc29uIGZyb20gZW1vamktZGF0YXNvdXJjZSBpbiBwYWNrYWdlLmpzb25cbiAgQElucHV0KClcbiAgYmFja2dyb3VuZEltYWdlRm46IEVtb2ppWydiYWNrZ3JvdW5kSW1hZ2VGbiddID0gKHNldDogc3RyaW5nLCBzaGVldFNpemU6IG51bWJlcikgPT5cbiAgICBgaHR0cHM6Ly91bnBrZy5jb20vZW1vamktZGF0YXNvdXJjZS0ke3RoaXMuc2V0fUA0LjAuNC9pbWcvJHtcbiAgICAgIHRoaXMuc2V0XG4gICAgfS9zaGVldHMtMjU2LyR7dGhpcy5zaGVldFNpemV9LnBuZ2BcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5lbW9qaSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG4gICAgdGhpcy51bmlmaWVkID0gZGF0YS5uYXRpdmUgfHwgbnVsbDtcbiAgICBpZiAoZGF0YS5jdXN0b20pIHtcbiAgICAgIHRoaXMuY3VzdG9tID0gZGF0YS5jdXN0b207XG4gICAgfVxuICAgIGlmICghZGF0YS51bmlmaWVkICYmICFkYXRhLmN1c3RvbSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgIHRoaXMudGl0bGUgPSBkYXRhLnNob3J0X25hbWVzWzBdO1xuICAgIH1cbiAgICBpZiAoZGF0YS5vYnNvbGV0ZWRfYnkgJiYgdGhpcy5oaWRlT2Jzb2xldGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5hdGl2ZSAmJiBkYXRhLnVuaWZpZWQgJiYgZGF0YS5uYXRpdmUpIHtcbiAgICAgIC8vIGhpZGUgb2xkZXIgZW1vamkgYmVmb3JlIHRoZSBzcGxpdCBpbnRvIGdlbmRlcmVkIGVtb2ppXG4gICAgICB0aGlzLnN0eWxlID0geyBmb250U2l6ZTogYCR7dGhpcy5zaXplfXB4YCB9O1xuXG4gICAgICBpZiAodGhpcy5mb3JjZVNpemUpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBgJHt0aGlzLnNpemV9cHhgO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuc2l6ZX1weGA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLmN1c3RvbSkge1xuICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IGAke3RoaXMuc2l6ZX1weGAsXG4gICAgICAgIGhlaWdodDogYCR7dGhpcy5zaXplfXB4YCxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2RhdGEuaW1hZ2VVcmx9KWAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2V0SGFzRW1vamkgPSB0cnVlO1xuICAgICAgaWYgKGRhdGEuaGlkZGVuICYmIGRhdGEuaGlkZGVuLmluY2x1ZGVzKHRoaXMuc2V0KSkge1xuICAgICAgICBzZXRIYXNFbW9qaSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2V0SGFzRW1vamkpIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2spIHtcbiAgICAgICAgICB0aGlzLnN0eWxlID0geyBmb250U2l6ZTogYCR7dGhpcy5zaXplfXB4YCB9O1xuICAgICAgICAgIHRoaXMudW5pZmllZCA9IHRoaXMuZmFsbGJhY2soZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgICAgd2lkdGg6IGAke3RoaXMuc2l6ZX1weGAsXG4gICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLnNpemV9cHhgLFxuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3RoaXMuYmFja2dyb3VuZEltYWdlRm4oXG4gICAgICAgICAgICB0aGlzLnNldCxcbiAgICAgICAgICAgIHRoaXMuc2hlZXRTaXplLFxuICAgICAgICAgICl9KWAsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IGAkezEwMCAqIHRoaXMuU0hFRVRfQ09MVU1OU30lYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IFtzaGVldF94LCBzaGVldF95XSA9IHRoaXMuZ2V0RGF0YSgpIS5zaGVldDtcbiAgICBjb25zdCBtdWx0aXBseSA9IDEwMCAvICh0aGlzLlNIRUVUX0NPTFVNTlMgLSAxKTtcbiAgICByZXR1cm4gYCR7bXVsdGlwbHkgKiBzaGVldF94fSUgJHttdWx0aXBseSAqIHNoZWV0X3l9JWA7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmVtb2ppU2VydmljZS5nZXREYXRhKHRoaXMuZW1vamksIHRoaXMuc2tpbiwgdGhpcy5zZXQpO1xuICB9XG5cbiAgZ2V0U2FuaXRpemVkRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbW9qaVNlcnZpY2UuZ2V0U2FuaXRpemVkRGF0YSh0aGlzLmVtb2ppLCB0aGlzLnNraW4sIHRoaXMuc2V0KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCRldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBlbW9qaSA9IHRoaXMuZ2V0U2FuaXRpemVkRGF0YSgpITtcbiAgICB0aGlzLmVtb2ppQ2xpY2suZW1pdCh7IGVtb2ppLCAkZXZlbnQgfSk7XG4gIH1cblxuICBoYW5kbGVPdmVyKCRldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBlbW9qaSA9IHRoaXMuZ2V0U2FuaXRpemVkRGF0YSgpITtcbiAgICB0aGlzLmVtb2ppT3Zlci5lbWl0KHsgZW1vamksICRldmVudCB9KTtcbiAgfVxuXG4gIGhhbmRsZUxlYXZlKCRldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBlbW9qaSA9IHRoaXMuZ2V0U2FuaXRpemVkRGF0YSgpITtcbiAgICB0aGlzLmVtb2ppTGVhdmUuZW1pdCh7IGVtb2ppLCAkZXZlbnQgfSk7XG4gIH1cbn1cbiJdfQ==