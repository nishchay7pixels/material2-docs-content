import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "@angular/cdk-experimental/selection";
/**
 * @title CDK Selection Column on a CDK table.
 */
export class CdkSelectionColumnExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.selected = [];
    }
    selectionChanged(event) {
        this.selected = event.after.map(select => select.value.name);
    }
}
CdkSelectionColumnExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CdkSelectionColumnExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkSelectionColumnExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CdkSelectionColumnExample, selector: "cdk-selection-column-example", ngImport: i0, template: "Selected: {{selected}}\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\n    <!-- Position Column -->\n    <ng-container cdkColumnDef=\"position\">\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container cdkColumnDef=\"weight\">\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container cdkColumnDef=\"symbol\">\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected {\n  background-color: yellow;\n}\n"], components: [{ type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { type: i2.CdkSelectionColumn, selector: "cdk-selection-column", inputs: ["cdkSelectionColumnName"] }, { type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }], directives: [{ type: i2.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }, { type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { type: i2.CdkRowSelection, selector: "[cdkRowSelection]", inputs: ["cdkRowSelectionValue", "cdkRowSelectionIndex"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CdkSelectionColumnExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-column-example', template: "Selected: {{selected}}\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\n    <!-- Position Column -->\n    <ng-container cdkColumnDef=\"position\">\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container cdkColumnDef=\"weight\">\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container cdkColumnDef=\"symbol\">\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected {\n  background-color: yellow;\n}\n"] }]
        }] });
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1jb2x1bW4tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay1leHBlcmltZW50YWwvc2VsZWN0aW9uL2Nkay1zZWxlY3Rpb24tY29sdW1uL2Nkay1zZWxlY3Rpb24tY29sdW1uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWNvbHVtbi9jZGstc2VsZWN0aW9uLWNvbHVtbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFNRSxxQkFBZ0IsR0FBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLGFBQVEsR0FBYSxFQUFFLENBQUM7S0FLekI7SUFIQyxnQkFBZ0IsQ0FBQyxLQUF1QztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs2SEFQVSx5QkFBeUI7aUhBQXpCLHlCQUF5QixvRUNYdEMsdTJDQThCQTtrR0RuQmEseUJBQXlCO2tCQUxyQyxTQUFTOytCQUNFLDhCQUE4Qjs7QUFxQjFDLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUNoRSxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlbGVjdGlvbkNoYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDREsgU2VsZWN0aW9uIENvbHVtbiBvbiBhIENESyB0YWJsZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXNlbGVjdGlvbi1jb2x1bW4tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXNlbGVjdGlvbi1jb2x1bW4tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1zZWxlY3Rpb24tY29sdW1uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1NlbGVjdGlvbkNvbHVtbkV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnc2VsZWN0JywgJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuICBzZWxlY3RlZDogc3RyaW5nW10gPSBbXTtcblxuICBzZWxlY3Rpb25DaGFuZ2VkKGV2ZW50OiBTZWxlY3Rpb25DaGFuZ2U8UGVyaW9kaWNFbGVtZW50Pikge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBldmVudC5hZnRlci5tYXAoc2VsZWN0ID0+IHNlbGVjdC52YWx1ZS5uYW1lKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuICB7cG9zaXRpb246IDExLCBuYW1lOiAnU29kaXVtJywgd2VpZ2h0OiAyMi45ODk3LCBzeW1ib2w6ICdOYSd9LFxuICB7cG9zaXRpb246IDEyLCBuYW1lOiAnTWFnbmVzaXVtJywgd2VpZ2h0OiAyNC4zMDUsIHN5bWJvbDogJ01nJ30sXG4gIHtwb3NpdGlvbjogMTMsIG5hbWU6ICdBbHVtaW51bScsIHdlaWdodDogMjYuOTgxNSwgc3ltYm9sOiAnQWwnfSxcbiAge3Bvc2l0aW9uOiAxNCwgbmFtZTogJ1NpbGljb24nLCB3ZWlnaHQ6IDI4LjA4NTUsIHN5bWJvbDogJ1NpJ30sXG4gIHtwb3NpdGlvbjogMTUsIG5hbWU6ICdQaG9zcGhvcnVzJywgd2VpZ2h0OiAzMC45NzM4LCBzeW1ib2w6ICdQJ30sXG4gIHtwb3NpdGlvbjogMTYsIG5hbWU6ICdTdWxmdXInLCB3ZWlnaHQ6IDMyLjA2NSwgc3ltYm9sOiAnUyd9LFxuICB7cG9zaXRpb246IDE3LCBuYW1lOiAnQ2hsb3JpbmUnLCB3ZWlnaHQ6IDM1LjQ1Mywgc3ltYm9sOiAnQ2wnfSxcbiAge3Bvc2l0aW9uOiAxOCwgbmFtZTogJ0FyZ29uJywgd2VpZ2h0OiAzOS45NDgsIHN5bWJvbDogJ0FyJ30sXG4gIHtwb3NpdGlvbjogMTksIG5hbWU6ICdQb3Rhc3NpdW0nLCB3ZWlnaHQ6IDM5LjA5ODMsIHN5bWJvbDogJ0snfSxcbiAge3Bvc2l0aW9uOiAyMCwgbmFtZTogJ0NhbGNpdW0nLCB3ZWlnaHQ6IDQwLjA3OCwgc3ltYm9sOiAnQ2EnfSxcbl07XG4iLCJTZWxlY3RlZDoge3tzZWxlY3RlZH19XG48dGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgY2RrLXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjZGtTZWxlY3Rpb24gW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGlvbkNoYW5nZWQoJGV2ZW50KVwiPlxuICAgIDxjZGstc2VsZWN0aW9uLWNvbHVtbiBjZGtTZWxlY3Rpb25Db2x1bW5OYW1lPVwic2VsZWN0XCI+PC9jZGstc2VsZWN0aW9uLWNvbHVtbj5cbiAgICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgICA8dGggY2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBOby4gPC90aD5cbiAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwibmFtZVwiPlxuICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gTmFtZSA8L3RoPlxuICAgICAgPHRkIGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgICA8dGggY2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBXZWlnaHQgPC90aD5cbiAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgICA8dGggY2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPHRyIGNkay1oZWFkZXItcm93ICpjZGtIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICA8dHIgY2RrLXJvdyAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIiBjZGtSb3dTZWxlY3Rpb24gW2Nka1Jvd1NlbGVjdGlvblZhbHVlXT1cInJvd1wiPjwvdHI+XG48L3RhYmxlPlxuIl19