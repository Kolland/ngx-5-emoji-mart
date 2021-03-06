/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AnchorsComponent } from './anchors.component';
import { CategoryComponent } from './category.component';
import { EmojiFrequentlyService } from './emoji-frequently.service';
import { EmojiSearch } from './emoji-search.service';
import { PickerComponent } from './picker.component';
import { PreviewComponent } from './preview.component';
import { SearchComponent } from './search.component';
import { SkinComponent } from './skins.component';
const /** @type {?} */ components = [
    PickerComponent,
    AnchorsComponent,
    CategoryComponent,
    SearchComponent,
    PreviewComponent,
    SkinComponent,
];
export class PickerModule {
}
PickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, EmojiModule],
                exports: components,
                declarations: components,
                providers: [EmojiSearch, EmojiFrequentlyService],
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0LyIsInNvdXJjZXMiOlsicGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsdUJBQU0sVUFBVSxHQUFVO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtDQUNkLENBQUM7QUFRRixNQUFNOzs7WUFOTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSxVQUFVO2dCQUNuQixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRW1vamlNb2R1bGUgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuaW1wb3J0IHsgQW5jaG9yc0NvbXBvbmVudCB9IGZyb20gJy4vYW5jaG9ycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIH0gZnJvbSAnLi9lbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1vamlTZWFyY2ggfSBmcm9tICcuL2Vtb2ppLXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2tpbkNvbXBvbmVudCB9IGZyb20gJy4vc2tpbnMuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50czogYW55W10gPSBbXG4gIFBpY2tlckNvbXBvbmVudCxcbiAgQW5jaG9yc0NvbXBvbmVudCxcbiAgQ2F0ZWdvcnlDb21wb25lbnQsXG4gIFNlYXJjaENvbXBvbmVudCxcbiAgUHJldmlld0NvbXBvbmVudCxcbiAgU2tpbkNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBFbW9qaU1vZHVsZV0sXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcbiAgcHJvdmlkZXJzOiBbRW1vamlTZWFyY2gsIEVtb2ppRnJlcXVlbnRseVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJNb2R1bGUge31cbiJdfQ==