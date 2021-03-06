/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var EmojiFrequentlyService = /** @class */ (function () {
    function EmojiFrequentlyService() {
        this.NAMESPACE = 'emoji-mart';
        this.frequently = null;
        this.defaults = {};
        this.initialized = false;
        this.DEFAULTS = [
            '+1',
            'grinning',
            'kissing_heart',
            'heart_eyes',
            'laughing',
            'stuck_out_tongue_winking_eye',
            'sweat_smile',
            'joy',
            'scream',
            'disappointed',
            'unamused',
            'weary',
            'sob',
            'sunglasses',
            'heart',
            'poop',
        ];
    }
    /**
     * @return {?}
     */
    EmojiFrequentlyService.prototype.init = /**
     * @return {?}
     */
    function () {
        this.frequently = JSON.parse(localStorage.getItem(this.NAMESPACE + ".frequently") || 'null');
        this.initialized = true;
    };
    /**
     * @param {?} emoji
     * @return {?}
     */
    EmojiFrequentlyService.prototype.add = /**
     * @param {?} emoji
     * @return {?}
     */
    function (emoji) {
        if (!this.initialized) {
            this.init();
        }
        if (!this.frequently) {
            this.frequently = this.defaults;
        }
        if (!this.frequently[emoji.id]) {
            this.frequently[emoji.id] = 0;
        }
        this.frequently[emoji.id] += 1;
        localStorage.setItem(this.NAMESPACE + ".last", emoji.id);
        localStorage.setItem(this.NAMESPACE + ".frequently", JSON.stringify(this.frequently));
    };
    /**
     * @param {?} perLine
     * @return {?}
     */
    EmojiFrequentlyService.prototype.get = /**
     * @param {?} perLine
     * @return {?}
     */
    function (perLine) {
        var _this = this;
        if (!this.initialized) {
            this.init();
        }
        if (this.frequently === null) {
            this.defaults = {};
            var /** @type {?} */ result = [];
            for (var /** @type {?} */ i = 0; i < perLine; i++) {
                this.defaults[this.DEFAULTS[i]] = perLine - i;
                result.push(this.DEFAULTS[i]);
            }
            return result;
        }
        var /** @type {?} */ quantity = perLine * 4;
        var /** @type {?} */ frequentlyKeys = Object.keys(this.frequently);
        var /** @type {?} */ sorted = frequentlyKeys
            .sort(function (a, b) { return ((_this.frequently))[a] - /** @type {?} */ ((_this.frequently))[b]; })
            .reverse();
        var /** @type {?} */ sliced = sorted.slice(0, quantity);
        var /** @type {?} */ last = localStorage.getItem(this.NAMESPACE + ".last");
        if (last && !sliced.includes(last)) {
            sliced.pop();
            sliced.push(last);
        }
        return sliced;
    };
    EmojiFrequentlyService.decorators = [
        { type: Injectable },
    ];
    return EmojiFrequentlyService;
}());
export { EmojiFrequentlyService };
function EmojiFrequentlyService_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiFrequentlyService.prototype.NAMESPACE;
    /** @type {?} */
    EmojiFrequentlyService.prototype.frequently;
    /** @type {?} */
    EmojiFrequentlyService.prototype.defaults;
    /** @type {?} */
    EmojiFrequentlyService.prototype.initialized;
    /** @type {?} */
    EmojiFrequentlyService.prototype.DEFAULTS;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktZnJlcXVlbnRseS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJlbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozt5QkFNN0IsWUFBWTswQkFDdUIsSUFBSTt3QkFDYixFQUFFOzJCQUMxQixLQUFLO3dCQUNSO1lBQ1QsSUFBSTtZQUNKLFVBQVU7WUFDVixlQUFlO1lBQ2YsWUFBWTtZQUNaLFVBQVU7WUFDViw4QkFBOEI7WUFDOUIsYUFBYTtZQUNiLEtBQUs7WUFDTCxRQUFRO1lBQ1IsY0FBYztZQUNkLFVBQVU7WUFDVixPQUFPO1lBQ1AsS0FBSztZQUNMLFlBQVk7WUFDWixPQUFPO1lBQ1AsTUFBTTtTQUNQOzs7OztJQUVELHFDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFJLElBQUksQ0FBQyxTQUFTLGdCQUFhLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUN6Qjs7Ozs7SUFDRCxvQ0FBRzs7OztJQUFILFVBQUksS0FBZ0I7UUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9CLFlBQVksQ0FBQyxPQUFPLENBQUksSUFBSSxDQUFDLFNBQVMsVUFBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFJLElBQUksQ0FBQyxTQUFTLGdCQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztLQUN2Rjs7Ozs7SUFDRCxvQ0FBRzs7OztJQUFILFVBQUksT0FBZTtRQUFuQixpQkErQkM7UUE5QkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUVuQixxQkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWxCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDZjtRQUVELHFCQUFNLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLHFCQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwRCxxQkFBTSxNQUFNLEdBQUcsY0FBYzthQUMxQixJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxhQUFLLEtBQUksQ0FBQyxVQUFVLEdBQUUsQ0FBQyx1QkFBSSxLQUFJLENBQUMsVUFBVSxHQUFFLENBQUMsSUFBQyxDQUFDO2FBQ3pELE9BQU8sRUFBRSxDQUFDO1FBQ2IscUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLHFCQUFNLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFJLElBQUksQ0FBQyxTQUFTLFVBQU8sQ0FBQyxDQUFDO1FBRTVELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7O2dCQTNFRixVQUFVOztpQ0FKWDs7U0FLYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppRGF0YSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIHtcbiAgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnO1xuICBmcmVxdWVudGx5OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG4gIGRlZmF1bHRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIERFRkFVTFRTID0gW1xuICAgICcrMScsXG4gICAgJ2dyaW5uaW5nJyxcbiAgICAna2lzc2luZ19oZWFydCcsXG4gICAgJ2hlYXJ0X2V5ZXMnLFxuICAgICdsYXVnaGluZycsXG4gICAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAgICdzd2VhdF9zbWlsZScsXG4gICAgJ2pveScsXG4gICAgJ3NjcmVhbScsXG4gICAgJ2Rpc2FwcG9pbnRlZCcsXG4gICAgJ3VuYW11c2VkJyxcbiAgICAnd2VhcnknLFxuICAgICdzb2InLFxuICAgICdzdW5nbGFzc2VzJyxcbiAgICAnaGVhcnQnLFxuICAgICdwb29wJyxcbiAgXTtcblxuICBpbml0KCkge1xuICAgIHRoaXMuZnJlcXVlbnRseSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9LmZyZXF1ZW50bHlgKSB8fCAnbnVsbCcpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIGFkZChlbW9qaTogRW1vamlEYXRhKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZyZXF1ZW50bHkpIHtcbiAgICAgIHRoaXMuZnJlcXVlbnRseSA9IHRoaXMuZGVmYXVsdHM7XG4gICAgfVxuICAgIGlmICghdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSA9IDA7XG4gICAgfVxuICAgIHRoaXMuZnJlcXVlbnRseVtlbW9qaS5pZF0gKz0gMTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5sYXN0YCwgZW1vamkuaWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5mcmVxdWVudGx5YCwgSlNPTi5zdHJpbmdpZnkodGhpcy5mcmVxdWVudGx5KSk7XG4gIH1cbiAgZ2V0KHBlckxpbmU6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyZXF1ZW50bHkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyTGluZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHNbdGhpcy5ERUZBVUxUU1tpXV0gPSBwZXJMaW5lIC0gaTtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ERUZBVUxUU1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHF1YW50aXR5ID0gcGVyTGluZSAqIDQ7XG4gICAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZyZXF1ZW50bHkpO1xuXG4gICAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmZyZXF1ZW50bHkhW2FdIC0gdGhpcy5mcmVxdWVudGx5IVtiXSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gICAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KTtcblxuICAgIGNvbnN0IGxhc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0ubGFzdGApO1xuXG4gICAgaWYgKGxhc3QgJiYgIXNsaWNlZC5pbmNsdWRlcyhsYXN0KSkge1xuICAgICAgc2xpY2VkLnBvcCgpO1xuICAgICAgc2xpY2VkLnB1c2gobGFzdCk7XG4gICAgfVxuICAgIHJldHVybiBzbGljZWQ7XG4gIH1cbn1cbiJdfQ==