import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/autocomplete";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/common";
/**
 * @title Display value autocomplete
 */
export class AutocompleteDisplayExample {
    constructor() {
        this.myControl = new FormControl();
        this.options = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => (typeof value === 'string' ? value : value.name)), map(name => (name ? this._filter(name) : this.options.slice())));
    }
    displayFn(user) {
        return user && user.name ? user.name : '';
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }
}
AutocompleteDisplayExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: AutocompleteDisplayExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteDisplayExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.9", type: AutocompleteDisplayExample, selector: "autocomplete-display-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Assignee</mat-label>\n    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: AutocompleteDisplayExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-display-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Assignee</mat-label>\n    <input type=\"text\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtZGlzcGxheS9hdXRvY29tcGxldGUtZGlzcGxheS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1kaXNwbGF5L2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQU05Qzs7R0FFRztBQU1ILE1BQU0sT0FBTywwQkFBMEI7SUFMdkM7UUFNRSxjQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQVcsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0tBb0J2RTtJQWpCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3JELFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDOUQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFVO1FBQ2xCLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU8sT0FBTyxDQUFDLElBQVk7UUFDMUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7OzhIQXJCVSwwQkFBMEI7a0hBQTFCLDBCQUEwQixvRUNqQnZDLGlmQVdBO2tHRE1hLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgRGlzcGxheSB2YWx1ZSBhdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIG9wdGlvbnM6IFVzZXJbXSA9IFt7bmFtZTogJ01hcnknfSwge25hbWU6ICdTaGVsbGV5J30sIHtuYW1lOiAnSWdvcid9XTtcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPFVzZXJbXT47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsdWUgPT4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IHZhbHVlLm5hbWUpKSxcbiAgICAgIG1hcChuYW1lID0+IChuYW1lID8gdGhpcy5fZmlsdGVyKG5hbWUpIDogdGhpcy5vcHRpb25zLnNsaWNlKCkpKSxcbiAgICApO1xuICB9XG5cbiAgZGlzcGxheUZuKHVzZXI6IFVzZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB1c2VyICYmIHVzZXIubmFtZSA/IHVzZXIubmFtZSA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyKG5hbWU6IHN0cmluZyk6IFVzZXJbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+QXNzaWduZWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBbZm9ybUNvbnRyb2xdPVwibXlDb250cm9sXCIgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCI+XG4gICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiBbZGlzcGxheVdpdGhdPVwiZGlzcGxheUZuXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlcmVkT3B0aW9ucyB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdGlvblwiPlxuICAgICAgICB7e29wdGlvbi5uYW1lfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=