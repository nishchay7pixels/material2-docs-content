import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/common";
/** @title Checkboxes with reactive forms */
export class CheckboxReactiveFormsExample {
    constructor(fb) {
        this.toppings = fb.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false,
        });
    }
}
CheckboxReactiveFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CheckboxReactiveFormsExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
CheckboxReactiveFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CheckboxReactiveFormsExample, selector: "checkbox-reactive-forms-example", ngImport: i0, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"], components: [{ type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], directives: [{ type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "json": i3.JsonPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CheckboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-reactive-forms-example', template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zL2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRXRELDRDQUE0QztBQU01QyxNQUFNLE9BQU8sNEJBQTRCO0lBR3ZDLFlBQVksRUFBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0lBVFUsNEJBQTRCO29IQUE1Qiw0QkFBNEIsdUVDVHpDLDhkQVdBO2tHREZhLDRCQUE0QjtrQkFMeEMsU0FBUzsrQkFDRSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBDaGVja2JveGVzIHdpdGggcmVhY3RpdmUgZm9ybXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFJlYWN0aXZlRm9ybXNFeGFtcGxlIHtcbiAgdG9wcGluZ3M6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLnRvcHBpbmdzID0gZmIuZ3JvdXAoe1xuICAgICAgcGVwcGVyb25pOiBmYWxzZSxcbiAgICAgIGV4dHJhY2hlZXNlOiBmYWxzZSxcbiAgICAgIG11c2hyb29tOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiBbZm9ybUdyb3VwXT1cInRvcHBpbmdzXCI+XG4gIDxoND5TZWxlY3QgeW91ciB0b3BwaW5nczo8L2g0PlxuICA8cD48bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cInBlcHBlcm9uaVwiPlBlcHBlcm9uaTwvbWF0LWNoZWNrYm94PjwvcD5cbiAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJleHRyYWNoZWVzZVwiPkV4dHJhIENoZWVzZTwvbWF0LWNoZWNrYm94PjwvcD5cbiAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJtdXNocm9vbVwiPk11c2hyb29tPC9tYXQtY2hlY2tib3g+PC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiIFtmb3JtR3JvdXBdPVwidG9wcGluZ3NcIj5cbiAgPGg0PllvdSBjaG9zZTo8L2g0PlxuICB7e3RvcHBpbmdzLnZhbHVlIHwganNvbn19XG48L3NlY3Rpb24+XG4iXX0=