import { DataSource } from '@angular/cdk/collections';
import { Component, ContentChildren, Input, QueryList, ViewChild, ContentChild, } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/material/sort";
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
];
/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    clearTable() {
        this.dataSource.data = [];
    }
    addData() {
        this.dataSource.data = ELEMENT_DATA;
    }
}
TableWrappedExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TableWrappedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableWrappedExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: TableWrappedExample, selector: "table-wrapped-example", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }], ngImport: i0, template: "<div>\n  <button mat-raised-button (click)=\"clearTable()\">Clear table</button>\n  <button mat-raised-button (click)=\"addData()\">Add data</button>\n</div>\n\n<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->\n  <tr class=\"mat-row\" *matNoDataRow>\n    <td class=\"mat-cell\" colspan=\"4\">No data</td>\n  </tr>\n</wrapper-table>\n", styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 0 8px 8px 0;\n}\n"], components: [{ type: i0.forwardRef(function () { return i1.MatButton; }), selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i0.forwardRef(function () { return WrapperTable; }), selector: "wrapper-table", inputs: ["columns", "dataSource"] }, { type: i0.forwardRef(function () { return i2.MatHeaderRow; }), selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i0.forwardRef(function () { return i2.MatRow; }), selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }], directives: [{ type: i0.forwardRef(function () { return i3.MatSort; }), selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i0.forwardRef(function () { return i2.MatColumnDef; }), selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i0.forwardRef(function () { return i2.MatHeaderCellDef; }), selector: "[matHeaderCellDef]" }, { type: i0.forwardRef(function () { return i2.MatHeaderCell; }), selector: "mat-header-cell, th[mat-header-cell]" }, { type: i0.forwardRef(function () { return i2.MatCellDef; }), selector: "[matCellDef]" }, { type: i0.forwardRef(function () { return i2.MatCell; }), selector: "mat-cell, td[mat-cell]" }, { type: i0.forwardRef(function () { return i2.MatHeaderRowDef; }), selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i0.forwardRef(function () { return i2.MatRowDef; }), selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i0.forwardRef(function () { return i2.MatNoDataRow; }), selector: "ng-template[matNoDataRow]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TableWrappedExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-wrapped-example', template: "<div>\n  <button mat-raised-button (click)=\"clearTable()\">Clear table</button>\n  <button mat-raised-button (click)=\"addData()\">Add data</button>\n</div>\n\n<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->\n  <tr class=\"mat-row\" *matNoDataRow>\n    <td class=\"mat-cell\" colspan=\"4\">No data</td>\n  </tr>\n</wrapper-table>\n", styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 0 8px 8px 0;\n}\n"] }]
        }], propDecorators: { sort: [{
                type: ViewChild,
                args: ['sort']
            }] } });
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
export class WrapperTable {
    ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
        this.table.setNoDataRow(this.noDataRow);
    }
}
WrapperTable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: WrapperTable, deps: [], target: i0.ɵɵFactoryTarget.Component });
WrapperTable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: WrapperTable, selector: "wrapper-table", inputs: { columns: "columns", dataSource: "dataSource" }, queries: [{ propertyName: "noDataRow", first: true, predicate: MatNoDataRow, descendants: true }, { propertyName: "headerRowDefs", predicate: MatHeaderRowDef }, { propertyName: "rowDefs", predicate: MatRowDef }, { propertyName: "columnDefs", predicate: MatColumnDef }], viewQueries: [{ propertyName: "table", first: true, predicate: MatTable, descendants: true, static: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n", styles: ["\n    table {\n      width: 100%;\n    }\n  "], components: [{ type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i3.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }], directives: [{ type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i2.MatCellDef, selector: "[matCellDef]" }, { type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: WrapperTable, decorators: [{
            type: Component,
            args: [{ selector: 'wrapper-table', styles: [`
    table {
      width: 100%;
    }
  `], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n" }]
        }], propDecorators: { headerRowDefs: [{
                type: ContentChildren,
                args: [MatHeaderRowDef]
            }], rowDefs: [{
                type: ContentChildren,
                args: [MatRowDef]
            }], columnDefs: [{
                type: ContentChildren,
                args: [MatColumnDef]
            }], noDataRow: [{
                type: ContentChild,
                args: [MatNoDataRow]
            }], table: [{
                type: ViewChild,
                args: [MatTable, { static: true }]
            }], columns: [{
                type: Input
            }], dataSource: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd3JhcHBlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC90YWJsZS13cmFwcGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC93cmFwcGVyLXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFlBQVksRUFDWixlQUFlLEVBQ2YsWUFBWSxFQUNaLFNBQVMsRUFDVCxRQUFRLEVBQ1Isa0JBQWtCLEVBQ25CLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBU2pDLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFB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QUM7Ozs7R0FJUixDQUFDOzhCQUdnQyxhQUFhO3NCQUE5QyxlQUFlO3VCQUFDLGVBQWU7Z0JBQ0osT0FBTztzQkFBbEMsZUFBZTt1QkFBQyxTQUFTO2dCQUNLLFVBQVU7c0JBQXhDLGVBQWU7dUJBQUMsWUFBWTtnQkFDRCxTQUFTO3NCQUFwQyxZQUFZO3VCQUFDLFlBQVk7Z0JBRVcsS0FBSztzQkFBekMsU0FBUzt1QkFBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO2dCQUUxQixPQUFPO3NCQUFmLEtBQUs7Z0JBRUcsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIENvbnRlbnRDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtcbiAgTWF0Q29sdW1uRGVmLFxuICBNYXRIZWFkZXJSb3dEZWYsXG4gIE1hdE5vRGF0YVJvdyxcbiAgTWF0Um93RGVmLFxuICBNYXRUYWJsZSxcbiAgTWF0VGFibGVEYXRhU291cmNlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSBleGFtcGxlIHRoYXQgc2hvd3MgaG93IHRvIHdyYXAgYSB0YWJsZSBjb21wb25lbnQgZm9yIGRlZmluaXRpb24gYW5kIGJlaGF2aW9yIHJldXNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS13cmFwcGVkLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtd3JhcHBlZC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVXcmFwcGVkRXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4oRUxFTUVOVF9EQVRBKTtcblxuICBAVmlld0NoaWxkKCdzb3J0Jykgc29ydDogTWF0U29ydDtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICBjbGVhclRhYmxlKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XG4gIH1cblxuICBhZGREYXRhKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gRUxFTUVOVF9EQVRBO1xuICB9XG59XG5cbi8qKlxuICogVGFibGUgY29tcG9uZW50IHRoYXQgYWNjZXB0cyBjb2x1bW4gYW5kIHJvdyBkZWZpbml0aW9ucyBpbiBpdHMgY29udGVudCB0byBiZSByZWdpc3RlcmVkIHRvIHRoZVxuICogdGFibGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dyYXBwZXItdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ3dyYXBwZXItdGFibGUuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFdyYXBwZXJUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE1hdEhlYWRlclJvd0RlZikgaGVhZGVyUm93RGVmczogUXVlcnlMaXN0PE1hdEhlYWRlclJvd0RlZj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Um93RGVmKSByb3dEZWZzOiBRdWVyeUxpc3Q8TWF0Um93RGVmPFQ+PjtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRDb2x1bW5EZWYpIGNvbHVtbkRlZnM6IFF1ZXJ5TGlzdDxNYXRDb2x1bW5EZWY+O1xuICBAQ29udGVudENoaWxkKE1hdE5vRGF0YVJvdykgbm9EYXRhUm93OiBNYXROb0RhdGFSb3c7XG5cbiAgQFZpZXdDaGlsZChNYXRUYWJsZSwge3N0YXRpYzogdHJ1ZX0pIHRhYmxlOiBNYXRUYWJsZTxUPjtcblxuICBASW5wdXQoKSBjb2x1bW5zOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKSBkYXRhU291cmNlOiBEYXRhU291cmNlPFQ+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtbkRlZnMuZm9yRWFjaChjb2x1bW5EZWYgPT4gdGhpcy50YWJsZS5hZGRDb2x1bW5EZWYoY29sdW1uRGVmKSk7XG4gICAgdGhpcy5yb3dEZWZzLmZvckVhY2gocm93RGVmID0+IHRoaXMudGFibGUuYWRkUm93RGVmKHJvd0RlZikpO1xuICAgIHRoaXMuaGVhZGVyUm93RGVmcy5mb3JFYWNoKGhlYWRlclJvd0RlZiA9PiB0aGlzLnRhYmxlLmFkZEhlYWRlclJvd0RlZihoZWFkZXJSb3dEZWYpKTtcbiAgICB0aGlzLnRhYmxlLnNldE5vRGF0YVJvdyh0aGlzLm5vRGF0YVJvdyk7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImNsZWFyVGFibGUoKVwiPkNsZWFyIHRhYmxlPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImFkZERhdGEoKVwiPkFkZCBkYXRhPC9idXR0b24+XG48L2Rpdj5cblxuPHdyYXBwZXItdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFtjb2x1bW5zXT1cImRpc3BsYXllZENvbHVtbnNcIlxuICAgICAgICAgICAgICAgbWF0U29ydCAjc29ydD1cIm1hdFNvcnRcIj5cbiAgPCEtLSBDdXN0b20gY29sdW1uIGRlZmluaXRpb24gdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHdyYXBwZXIgdGFibGUuIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEN1c3RvbSByb3cgZGVmaW5pdGlvbnMgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHdyYXBwZXIgdGFibGUuIC0tPlxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gIDwhLS0gUm93IHNob3duIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgZGF0YSB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIHdyYXBwZXIgdGFibGUuIC0tPlxuICA8dHIgY2xhc3M9XCJtYXQtcm93XCIgKm1hdE5vRGF0YVJvdz5cbiAgICA8dGQgY2xhc3M9XCJtYXQtY2VsbFwiIGNvbHNwYW49XCI0XCI+Tm8gZGF0YTwvdGQ+XG4gIDwvdHI+XG48L3dyYXBwZXItdGFibGU+XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gV2VpZ2h0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gQ29sb3IgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvdGFibGU+XG4iXX0=