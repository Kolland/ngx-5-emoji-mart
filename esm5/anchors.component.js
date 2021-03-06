/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import SVGs from './svgs';
var AnchorsComponent = /** @class */ (function () {
    function AnchorsComponent() {
        this.categories = [];
        this.anchorClick = new EventEmitter();
        this.svgs = SVGs;
    }
    /**
     * @param {?} idx
     * @param {?} cat
     * @return {?}
     */
    AnchorsComponent.prototype.trackByFn = /**
     * @param {?} idx
     * @param {?} cat
     * @return {?}
     */
    function (idx, cat) {
        return cat.id;
    };
    /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    AnchorsComponent.prototype.handleClick = /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    function ($event, index) {
        this.anchorClick.emit({
            category: this.categories[index],
            index: index,
        });
    };
    AnchorsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-mart-anchors',
                    template: "\n  <div class=\"emoji-mart-anchors\">\n    <ng-template ngFor let-category [ngForOf]=\"categories\" let-idx=\"index\" [ngForTrackBy]=\"trackByFn\">\n      <span\n        *ngIf=\"category.anchor !== false\"\n        [attr.title]=\"i18n.categories[category.id]\"\n        (click)=\"this.handleClick($event, idx)\"\n        class=\"emoji-mart-anchor\"\n        [class.emoji-mart-anchor-selected]=\"category.name === selected\"\n        [style.color]=\"category.name === selected ? color : null\"\n      >\n        <div>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n            <path [attr.d]=\"svgs[category.id]\" />\n          </svg>\n        </div>\n        <span\n          class=\"emoji-mart-anchor-bar\"\n          [style.background-color]=\"color\"\n        ></span>\n      </span>\n    </ng-template>\n  </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                },] },
    ];
    AnchorsComponent.propDecorators = {
        categories: [{ type: Input }],
        color: [{ type: Input }],
        selected: [{ type: Input }],
        i18n: [{ type: Input }],
        anchorClick: [{ type: Output }]
    };
    return AnchorsComponent;
}());
export { AnchorsComponent };
function AnchorsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AnchorsComponent.prototype.categories;
    /** @type {?} */
    AnchorsComponent.prototype.color;
    /** @type {?} */
    AnchorsComponent.prototype.selected;
    /** @type {?} */
    AnchorsComponent.prototype.i18n;
    /** @type {?} */
    AnchorsComponent.prototype.anchorClick;
    /** @type {?} */
    AnchorsComponent.prototype.svgs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC8iLCJzb3VyY2VzIjpbImFuY2hvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7OzswQkFnQ2UsRUFBRTsyQkFJakIsSUFBSSxZQUFZLEVBQThDO29CQUMxRSxJQUFJOzs7Ozs7O0lBRWhCLG9DQUFTOzs7OztJQUFULFVBQVUsR0FBVyxFQUFFLEdBQWtCO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0tBQ2Y7Ozs7OztJQUNELHNDQUFXOzs7OztJQUFYLFVBQVksTUFBYSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2hDLEtBQUssT0FBQTtTQUNOLENBQUMsQ0FBQztLQUNKOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxnM0JBdUJUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OzZCQUVFLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsTUFBTTs7MkJBN0NUOztTQXdDYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaUNhdGVnb3J5IH0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCBTVkdzIGZyb20gJy4vc3Zncyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLW1hcnQtYW5jaG9ycycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvcnNcIj5cbiAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWNhdGVnb3J5IFtuZ0Zvck9mXT1cImNhdGVnb3JpZXNcIiBsZXQtaWR4PVwiaW5kZXhcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlGblwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nSWY9XCJjYXRlZ29yeS5hbmNob3IgIT09IGZhbHNlXCJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwiaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXVwiXG4gICAgICAgIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKCRldmVudCwgaWR4KVwiXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JcIlxuICAgICAgICBbY2xhc3MuZW1vamktbWFydC1hbmNob3Itc2VsZWN0ZWRdPVwiY2F0ZWdvcnkubmFtZSA9PT0gc2VsZWN0ZWRcIlxuICAgICAgICBbc3R5bGUuY29sb3JdPVwiY2F0ZWdvcnkubmFtZSA9PT0gc2VsZWN0ZWQgPyBjb2xvciA6IG51bGxcIlxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIFthdHRyLmRdPVwic3Znc1tjYXRlZ29yeS5pZF1cIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIlxuICAgICAgICA+PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEFuY2hvcnNDb21wb25lbnQge1xuICBASW5wdXQoKSBjYXRlZ29yaWVzOiBFbW9qaUNhdGVnb3J5W10gPSBbXTtcbiAgQElucHV0KCkgY29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdGVkPzogc3RyaW5nO1xuICBASW5wdXQoKSBpMThuOiBhbnk7XG4gIEBPdXRwdXQoKSBhbmNob3JDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjYXRlZ29yeTogRW1vamlDYXRlZ29yeSwgaW5kZXg6IG51bWJlciB9PigpO1xuICBzdmdzOiBhbnkgPSBTVkdzO1xuXG4gIHRyYWNrQnlGbihpZHg6IG51bWJlciwgY2F0OiBFbW9qaUNhdGVnb3J5KSB7XG4gICAgcmV0dXJuIGNhdC5pZDtcbiAgfVxuICBoYW5kbGVDbGljaygkZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5hbmNob3JDbGljay5lbWl0KHtcbiAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3JpZXNbaW5kZXhdLFxuICAgICAgaW5kZXgsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==