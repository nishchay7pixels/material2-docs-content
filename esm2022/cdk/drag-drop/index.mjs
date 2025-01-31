import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkDragDropAxisLockExample } from './cdk-drag-drop-axis-lock/cdk-drag-drop-axis-lock-example';
import { CdkDragDropBoundaryExample } from './cdk-drag-drop-boundary/cdk-drag-drop-boundary-example';
import { CdkDragDropConnectedSortingGroupExample } from './cdk-drag-drop-connected-sorting-group/cdk-drag-drop-connected-sorting-group-example';
import { CdkDragDropConnectedSortingExample } from './cdk-drag-drop-connected-sorting/cdk-drag-drop-connected-sorting-example';
import { CdkDragDropCustomPlaceholderExample } from './cdk-drag-drop-custom-placeholder/cdk-drag-drop-custom-placeholder-example';
import { CdkDragDropCustomPreviewExample } from './cdk-drag-drop-custom-preview/cdk-drag-drop-custom-preview-example';
import { CdkDragDropDelayExample } from './cdk-drag-drop-delay/cdk-drag-drop-delay-example';
import { CdkDragDropDisabledSortingExample } from './cdk-drag-drop-disabled-sorting/cdk-drag-drop-disabled-sorting-example';
import { CdkDragDropDisabledExample } from './cdk-drag-drop-disabled/cdk-drag-drop-disabled-example';
import { CdkDragDropEnterPredicateExample } from './cdk-drag-drop-enter-predicate/cdk-drag-drop-enter-predicate-example';
import { CdkDragDropFreeDragPositionExample } from './cdk-drag-drop-free-drag-position/cdk-drag-drop-free-drag-position-example';
import { CdkDragDropHandleExample } from './cdk-drag-drop-handle/cdk-drag-drop-handle-example';
import { CdkDragDropHorizontalSortingExample } from './cdk-drag-drop-horizontal-sorting/cdk-drag-drop-horizontal-sorting-example';
import { CdkDragDropOverviewExample } from './cdk-drag-drop-overview/cdk-drag-drop-overview-example';
import { CdkDragDropRootElementExample } from './cdk-drag-drop-root-element/cdk-drag-drop-root-element-example';
import { CdkDragDropSortingExample } from './cdk-drag-drop-sorting/cdk-drag-drop-sorting-example';
import { CdkDragDropSortPredicateExample } from './cdk-drag-drop-sort-predicate/cdk-drag-drop-sort-predicate-example';
import * as i0 from "@angular/core";
export { CdkDragDropAxisLockExample, CdkDragDropBoundaryExample, CdkDragDropConnectedSortingExample, CdkDragDropConnectedSortingGroupExample, CdkDragDropCustomPlaceholderExample, CdkDragDropCustomPreviewExample, CdkDragDropDelayExample, CdkDragDropDisabledExample, CdkDragDropDisabledSortingExample, CdkDragDropEnterPredicateExample, CdkDragDropFreeDragPositionExample, CdkDragDropHandleExample, CdkDragDropHorizontalSortingExample, CdkDragDropOverviewExample, CdkDragDropRootElementExample, CdkDragDropSortingExample, CdkDragDropSortPredicateExample, };
const EXAMPLES = [
    CdkDragDropAxisLockExample,
    CdkDragDropBoundaryExample,
    CdkDragDropConnectedSortingExample,
    CdkDragDropConnectedSortingGroupExample,
    CdkDragDropCustomPlaceholderExample,
    CdkDragDropCustomPreviewExample,
    CdkDragDropDelayExample,
    CdkDragDropDisabledExample,
    CdkDragDropDisabledSortingExample,
    CdkDragDropEnterPredicateExample,
    CdkDragDropFreeDragPositionExample,
    CdkDragDropHandleExample,
    CdkDragDropHorizontalSortingExample,
    CdkDragDropOverviewExample,
    CdkDragDropRootElementExample,
    CdkDragDropSortingExample,
    CdkDragDropSortPredicateExample,
];
class CdkDragDropExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDragDropExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: CdkDragDropExamplesModule, declarations: [CdkDragDropAxisLockExample,
            CdkDragDropBoundaryExample,
            CdkDragDropConnectedSortingExample,
            CdkDragDropConnectedSortingGroupExample,
            CdkDragDropCustomPlaceholderExample,
            CdkDragDropCustomPreviewExample,
            CdkDragDropDelayExample,
            CdkDragDropDisabledExample,
            CdkDragDropDisabledSortingExample,
            CdkDragDropEnterPredicateExample,
            CdkDragDropFreeDragPositionExample,
            CdkDragDropHandleExample,
            CdkDragDropHorizontalSortingExample,
            CdkDragDropOverviewExample,
            CdkDragDropRootElementExample,
            CdkDragDropSortingExample,
            CdkDragDropSortPredicateExample], imports: [DragDropModule, OverlayModule, CommonModule], exports: [CdkDragDropAxisLockExample,
            CdkDragDropBoundaryExample,
            CdkDragDropConnectedSortingExample,
            CdkDragDropConnectedSortingGroupExample,
            CdkDragDropCustomPlaceholderExample,
            CdkDragDropCustomPreviewExample,
            CdkDragDropDelayExample,
            CdkDragDropDisabledExample,
            CdkDragDropDisabledSortingExample,
            CdkDragDropEnterPredicateExample,
            CdkDragDropFreeDragPositionExample,
            CdkDragDropHandleExample,
            CdkDragDropHorizontalSortingExample,
            CdkDragDropOverviewExample,
            CdkDragDropRootElementExample,
            CdkDragDropSortingExample,
            CdkDragDropSortPredicateExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDragDropExamplesModule, imports: [DragDropModule, OverlayModule, CommonModule] }); }
}
export { CdkDragDropExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDragDropExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [DragDropModule, OverlayModule, CommonModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDckcsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLHVDQUF1QyxFQUFDLE1BQU0sdUZBQXVGLENBQUM7QUFDOUksT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sMkVBQTJFLENBQUM7QUFDN0gsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDaEksT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0scUVBQXFFLENBQUM7QUFDcEgsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0seUVBQXlFLENBQUM7QUFDMUgsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLGdDQUFnQyxFQUFDLE1BQU0sdUVBQXVFLENBQUM7QUFDdkgsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDL0gsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLG1DQUFtQyxFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDaEksT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0scUVBQXFFLENBQUM7O0FBRXBILE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQzFCLGtDQUFrQyxFQUNsQyx1Q0FBdUMsRUFDdkMsbUNBQW1DLEVBQ25DLCtCQUErQixFQUMvQix1QkFBdUIsRUFDdkIsMEJBQTBCLEVBQzFCLGlDQUFpQyxFQUNqQyxnQ0FBZ0MsRUFDaEMsa0NBQWtDLEVBQ2xDLHdCQUF3QixFQUN4QixtQ0FBbUMsRUFDbkMsMEJBQTBCLEVBQzFCLDZCQUE2QixFQUM3Qix5QkFBeUIsRUFDekIsK0JBQStCLEdBQ2hDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QiwrQkFBK0I7Q0FDaEMsQ0FBQztBQUVGLE1BS2EseUJBQXlCOzhHQUF6Qix5QkFBeUI7K0dBQXpCLHlCQUF5QixpQkF4QnBDLDBCQUEwQjtZQUMxQiwwQkFBMEI7WUFDMUIsa0NBQWtDO1lBQ2xDLHVDQUF1QztZQUN2QyxtQ0FBbUM7WUFDbkMsK0JBQStCO1lBQy9CLHVCQUF1QjtZQUN2QiwwQkFBMEI7WUFDMUIsaUNBQWlDO1lBQ2pDLGdDQUFnQztZQUNoQyxrQ0FBa0M7WUFDbEMsd0JBQXdCO1lBQ3hCLG1DQUFtQztZQUNuQywwQkFBMEI7WUFDMUIsNkJBQTZCO1lBQzdCLHlCQUF5QjtZQUN6QiwrQkFBK0IsYUFJckIsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZLGFBcEJyRCwwQkFBMEI7WUFDMUIsMEJBQTBCO1lBQzFCLGtDQUFrQztZQUNsQyx1Q0FBdUM7WUFDdkMsbUNBQW1DO1lBQ25DLCtCQUErQjtZQUMvQix1QkFBdUI7WUFDdkIsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQyxnQ0FBZ0M7WUFDaEMsa0NBQWtDO1lBQ2xDLHdCQUF3QjtZQUN4QixtQ0FBbUM7WUFDbkMsMEJBQTBCO1lBQzFCLDZCQUE2QjtZQUM3Qix5QkFBeUI7WUFDekIsK0JBQStCOytHQVFwQix5QkFBeUIsWUFKMUIsY0FBYyxFQUFFLGFBQWEsRUFBRSxZQUFZOztTQUkxQyx5QkFBeUI7MkZBQXpCLHlCQUF5QjtrQkFMckMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztvQkFDdEQsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWF4aXMtbG9jay9jZGstZHJhZy1kcm9wLWF4aXMtbG9jay1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1ib3VuZGFyeS9jZGstZHJhZy1kcm9wLWJvdW5kYXJ5LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdHcm91cEV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BDdXN0b21QbGFjZWhvbGRlckV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXIvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcERlbGF5RXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRlbGF5L2Nkay1kcmFnLWRyb3AtZGVsYXktZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wRGlzYWJsZWRTb3J0aW5nRXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRpc2FibGVkL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wSG9yaXpvbnRhbFNvcnRpbmdFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLW92ZXJ2aWV3L2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50L2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3Atc29ydGluZy9jZGstZHJhZy1kcm9wLXNvcnRpbmctZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wU29ydFByZWRpY2F0ZUV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS9jZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0dyb3VwRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QbGFjZWhvbGRlckV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGUsXG4gIENka0RyYWdEcm9wRGVsYXlFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BGcmVlRHJhZ1Bvc2l0aW9uRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BIYW5kbGVFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEhvcml6b250YWxTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BPdmVydmlld0V4YW1wbGUsXG4gIENka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFNvcnRQcmVkaWNhdGVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka0RyYWdEcm9wQXhpc0xvY2tFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEJvdW5kYXJ5RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nR3JvdXBFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEN1c3RvbVBsYWNlaG9sZGVyRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QcmV2aWV3RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEZWxheUV4YW1wbGUsXG4gIENka0RyYWdEcm9wRGlzYWJsZWRFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERpc2FibGVkU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlLFxuICBDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGUsXG4gIENka0RyYWdEcm9wSG9yaXpvbnRhbFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BSb290RWxlbWVudEV4YW1wbGUsXG4gIENka0RyYWdEcm9wU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wU29ydFByZWRpY2F0ZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRHJhZ0Ryb3BNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=