import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/common";
export class StepperIntl extends MatStepperIntl {
    constructor() {
        super(...arguments);
        // the default optional label text, if unspecified is "Optional"
        this.optionalLabel = 'Optional Label';
    }
}
StepperIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: StepperIntl, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
StepperIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: StepperIntl });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: StepperIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Stepper that uses the MatStepperIntl service
 */
export class StepperIntlExample {
    constructor(_formBuilder, _matStepperIntl) {
        this._formBuilder = _formBuilder;
        this._matStepperIntl = _matStepperIntl;
        this.optionalLabelTextChoices = ['Option 1', 'Option 2', 'Option 3'];
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
    updateOptionalLabel() {
        this._matStepperIntl.optionalLabel = this.optionalLabelText;
        // Required for the optional label text to be updated
        // Notifies the MatStepperIntl service that a change has been made
        this._matStepperIntl.changes.next();
    }
}
StepperIntlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: StepperIntlExample, deps: [{ token: i1.FormBuilder }, { token: i2.MatStepperIntl }], target: i0.ɵɵFactoryTarget.Component });
StepperIntlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.15", type: StepperIntlExample, selector: "stepper-intl-example", providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], ngImport: i0, template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\" appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i6.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i6.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: StepperIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-intl-example', providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\" appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.MatStepperIntl }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaW50bC9zdGVwcGVyLWludGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1pbnRsL3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztBQUd6RCxNQUFNLE9BQU8sV0FBWSxTQUFRLGNBQWM7SUFEL0M7O1FBRUUsZ0VBQWdFO1FBQ3ZELGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7S0FDM0M7O2dIQUhZLFdBQVc7b0hBQVgsV0FBVzttR0FBWCxXQUFXO2tCQUR2QixVQUFVOztBQU1YOztHQUVHO0FBT0gsTUFBTSxPQUFPLGtCQUFrQjtJQVU3QixZQUFvQixZQUF5QixFQUFVLGVBQStCO1FBQWxFLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBUnRGLDZCQUF3QixHQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxRSxtQkFBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILG9CQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDeEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBRXNGLENBQUM7SUFFMUYsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7O3VIQWpCVSxrQkFBa0I7MkdBQWxCLGtCQUFrQiwrQ0FGbEIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDLDBCQ2pCL0QsbzZEQTJEQTttR0R4Q2Esa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLHNCQUFzQixhQUdyQixDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFN0ZXBwZXJJbnRsfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJJbnRsIGV4dGVuZHMgTWF0U3RlcHBlckludGwge1xuICAvLyB0aGUgZGVmYXVsdCBvcHRpb25hbCBsYWJlbCB0ZXh0LCBpZiB1bnNwZWNpZmllZCBpcyBcIk9wdGlvbmFsXCJcbiAgb3ZlcnJpZGUgb3B0aW9uYWxMYWJlbCA9ICdPcHRpb25hbCBMYWJlbCc7XG59XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgdGhhdCB1c2VzIHRoZSBNYXRTdGVwcGVySW50bCBzZXJ2aWNlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItaW50bC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWludGwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItaW50bC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTWF0U3RlcHBlckludGwsIHVzZUNsYXNzOiBTdGVwcGVySW50bH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bEV4YW1wbGUge1xuICBvcHRpb25hbExhYmVsVGV4dDogc3RyaW5nO1xuICBvcHRpb25hbExhYmVsVGV4dENob2ljZXM6IHN0cmluZ1tdID0gWydPcHRpb24gMScsICdPcHRpb24gMicsICdPcHRpb24gMyddO1xuICBmaXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuICBzZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9tYXRTdGVwcGVySW50bDogTWF0U3RlcHBlckludGwpIHt9XG5cbiAgdXBkYXRlT3B0aW9uYWxMYWJlbCgpIHtcbiAgICB0aGlzLl9tYXRTdGVwcGVySW50bC5vcHRpb25hbExhYmVsID0gdGhpcy5vcHRpb25hbExhYmVsVGV4dDtcbiAgICAvLyBSZXF1aXJlZCBmb3IgdGhlIG9wdGlvbmFsIGxhYmVsIHRleHQgdG8gYmUgdXBkYXRlZFxuICAgIC8vIE5vdGlmaWVzIHRoZSBNYXRTdGVwcGVySW50bCBzZXJ2aWNlIHRoYXQgYSBjaGFuZ2UgaGFzIGJlZW4gbWFkZVxuICAgIHRoaXMuX21hdFN0ZXBwZXJJbnRsLmNoYW5nZXMubmV4dCgpO1xuICB9XG59XG4iLCI8bGFiZWwgZm9yPVwiZGVtby1vcHRpb25hbC1sYWJlbC1ncm91cFwiPlBpY2sgdGhlIHRleHQgZm9yIHRoZSBvcHRpb25hbCBsYWJlbDwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGlkPVwiZGVtby1vcHRpb25hbC1sYWJlbC1ncm91cFwiXG4gIGNsYXNzPVwiZGVtby1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwib3B0aW9uYWxMYWJlbFRleHRcIlxuICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVPcHRpb25hbExhYmVsKClcIj5cbiAgPG1hdC1yYWRpby1idXR0b25cbiAgICBjbGFzcz1cImRlbW8tcmFkaW8tYnV0dG9uXCJcbiAgICAqbmdGb3I9XCJsZXQgb3B0aW9uYWxMYWJlbFRleHRDaG9pY2Ugb2Ygb3B0aW9uYWxMYWJlbFRleHRDaG9pY2VzXCJcbiAgICBbdmFsdWVdPVwib3B0aW9uYWxMYWJlbFRleHRDaG9pY2VcIj5cbiAgICB7e29wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlfX1cbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48bWF0LXN0ZXBwZXIgY2xhc3M9XCJkZW1vLXN0ZXBwZXJcIiAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZm9ybS1maWVsZFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+TmFtZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lLCBGaXJzdCBuYW1lXCJcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwXG4gICAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiXG4gICAgbGFiZWw9XCJGaWxsIG91dCB5b3VyIGFkZHJlc3NcIlxuICAgIG9wdGlvbmFsPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ3RybFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeC4gMSBNYWluIFN0LCBOZXcgWW9yaywgTllcIlxuICAgICAgICAvPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5Eb25lPC9uZy10ZW1wbGF0ZT5cbiAgICA8cD5Zb3UgYXJlIG5vdyBkb25lLjwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInN0ZXBwZXIucmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC1zdGVwcGVyPlxuIl19