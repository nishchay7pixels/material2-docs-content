import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
/** @title Drawer with explicit backdrop setting */
export class SidenavBackdropExample {
}
SidenavBackdropExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SidenavBackdropExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidenavBackdropExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: SidenavBackdropExample, selector: "sidenav-backdrop-example", ngImport: i0, template: "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\n  <mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer>\n  <mat-drawer-content>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Sidenav mode</mat-label>\n      <mat-select #mode value=\"side\">\n        <mat-option value=\"side\">Side</mat-option>\n        <mat-option value=\"over\">Over</mat-option>\n        <mat-option value=\"push\">Push</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Has backdrop</mat-label>\n      <mat-select #hasBackdrop>\n        <mat-option>Unset</mat-option>\n        <mat-option [value]=\"true\">True</mat-option>\n        <mat-option [value]=\"false\">False</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n  </mat-drawer-content>\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"], components: [{ type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { type: i1.MatDrawerContent, selector: "mat-drawer-content" }, { type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2.MatLabel, selector: "mat-label" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SidenavBackdropExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-backdrop-example', template: "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\n  <mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer>\n  <mat-drawer-content>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Sidenav mode</mat-label>\n      <mat-select #mode value=\"side\">\n        <mat-option value=\"side\">Side</mat-option>\n        <mat-option value=\"over\">Over</mat-option>\n        <mat-option value=\"push\">Push</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Has backdrop</mat-label>\n      <mat-select #hasBackdrop>\n        <mat-option>Unset</mat-option>\n        <mat-option [value]=\"true\">True</mat-option>\n        <mat-option [value]=\"false\">False</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n  </mat-drawer-content>\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1iYWNrZHJvcC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWJhY2tkcm9wL3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1iYWNrZHJvcC9zaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRXhDLG1EQUFtRDtBQU1uRCxNQUFNLE9BQU8sc0JBQXNCOzswSEFBdEIsc0JBQXNCOzhHQUF0QixzQkFBc0IsZ0VDUm5DLHE4QkFzQkE7a0dEZGEsc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEcmF3ZXIgd2l0aCBleHBsaWNpdCBiYWNrZHJvcCBzZXR0aW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkJhY2tkcm9wRXhhbXBsZSB7fVxuIiwiPG1hdC1kcmF3ZXItY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBbaGFzQmFja2Ryb3BdPVwiaGFzQmFja2Ryb3AudmFsdWVcIj5cbiAgPG1hdC1kcmF3ZXIgI2RyYXdlciBbbW9kZV09XCJtb2RlLnZhbHVlXCI+SSdtIGEgZHJhd2VyPC9tYXQtZHJhd2VyPlxuICA8bWF0LWRyYXdlci1jb250ZW50PlxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5TaWRlbmF2IG1vZGU8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0ICNtb2RlIHZhbHVlPVwic2lkZVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm92ZXJcIj5PdmVyPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInB1c2hcIj5QdXNoPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkhhcyBiYWNrZHJvcDwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgI2hhc0JhY2tkcm9wPlxuICAgICAgICA8bWF0LW9wdGlvbj5VbnNldDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInRydWVcIj5UcnVlPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiZmFsc2VcIj5GYWxzZTwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImRyYXdlci50b2dnbGUoKVwiPlRvZ2dsZSBkcmF3ZXI8L2J1dHRvbj5cbiAgPC9tYXQtZHJhd2VyLWNvbnRlbnQ+XG48L21hdC1kcmF3ZXItY29udGFpbmVyPlxuIl19