import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
/** @title Simple form field */
export class FormFieldOverviewExample {
}
FormFieldOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: FormFieldOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFieldOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: FormFieldOverviewExample, selector: "form-field-overview-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: FormFieldOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-overview-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLW92ZXJ2aWV3L2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEMsK0JBQStCO0FBTS9CLE1BQU0sT0FBTyx3QkFBd0I7OzZIQUF4Qix3QkFBd0I7aUhBQXhCLHdCQUF3QixtRUNSckMsMmRBZUE7bUdEUGEsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTaW1wbGUgZm9ybSBmaWVsZCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+SW5wdXQ8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlNlbGVjdDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdD5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9uZVwiPkZpcnN0IG9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInR3b1wiPlNlY29uZCBvcHRpb248L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5UZXh0YXJlYTwvbWF0LWxhYmVsPlxuICA8dGV4dGFyZWEgbWF0SW5wdXQ+PC90ZXh0YXJlYT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=