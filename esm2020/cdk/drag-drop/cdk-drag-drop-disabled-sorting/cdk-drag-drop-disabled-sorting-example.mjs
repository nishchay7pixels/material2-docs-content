import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
/**
 * @title Drag&Drop disabled sorting
 */
export class CdkDragDropDisabledSortingExample {
    constructor() {
        this.items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];
        this.basket = ['Oranges', 'Bananas', 'Cucumbers'];
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
CdkDragDropDisabledSortingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CdkDragDropDisabledSortingExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkDragDropDisabledSortingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CdkDragDropDisabledSortingExample, selector: "cdk-drag-drop-disabled-sorting-example", ngImport: i0, template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>Available items</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"items\"\n      class=\"example-list\"\n      cdkDropListSortingDisabled\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of items\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Shopping basket</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"basket\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of basket\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n</div>\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], directives: [{ type: i1.CdkDropListGroup, selector: "[cdkDropListGroup]", inputs: ["cdkDropListGroupDisabled"], exportAs: ["cdkDropListGroup"] }, { type: i1.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CdkDragDropDisabledSortingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-disabled-sorting-example', template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>Available items</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"items\"\n      class=\"example-list\"\n      cdkDropListSortingDisabled\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of items\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Shopping basket</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"basket\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of basket\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n</div>\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFdkY7O0dBRUc7QUFNSCxNQUFNLE9BQU8saUNBQWlDO0lBTDlDO1FBTUUsVUFBSyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRWhFLFdBQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FjOUM7SUFaQyxJQUFJLENBQUMsS0FBNEI7UUFDL0IsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEY7YUFBTTtZQUNMLGlCQUFpQixDQUNmLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQzVCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUNwQixLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxDQUNuQixDQUFDO1NBQ0g7SUFDSCxDQUFDOztxSUFoQlUsaUNBQWlDO3lIQUFqQyxpQ0FBaUMsOEVDWDlDLGtzQkEwQkE7a0dEZmEsaUNBQWlDO2tCQUw3QyxTQUFTOytCQUNFLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW19IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgZGlzYWJsZWQgc29ydGluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BEaXNhYmxlZFNvcnRpbmdFeGFtcGxlIHtcbiAgaXRlbXMgPSBbJ0NhcnJvdHMnLCAnVG9tYXRvZXMnLCAnT25pb25zJywgJ0FwcGxlcycsICdBdm9jYWRvcyddO1xuXG4gIGJhc2tldCA9IFsnT3JhbmdlcycsICdCYW5hbmFzJywgJ0N1Y3VtYmVycyddO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKFxuICAgICAgICBldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxuICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgZXZlbnQuY3VycmVudEluZGV4LFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2RrRHJvcExpc3RHcm91cD5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPGgyPkF2YWlsYWJsZSBpdGVtczwvaDI+XG5cbiAgICA8ZGl2XG4gICAgICBjZGtEcm9wTGlzdFxuICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJpdGVtc1wiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgICBjZGtEcm9wTGlzdFNvcnRpbmdEaXNhYmxlZFxuICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgY2RrRHJhZz57e2l0ZW19fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICA8aDI+U2hvcHBpbmcgYmFza2V0PC9oMj5cblxuICAgIDxkaXZcbiAgICAgIGNka0Ryb3BMaXN0XG4gICAgICBbY2RrRHJvcExpc3REYXRhXT1cImJhc2tldFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgYmFza2V0XCIgY2RrRHJhZz57e2l0ZW19fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19