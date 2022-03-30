import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/input";
/**
 * @title Stepper with customized states
 */
export class StepperStatesExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
}
StepperStatesExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: StepperStatesExample, deps: [{ token: i1.UntypedFormBuilder }], target: i0.ɵɵFactoryTarget.Component });
StepperStatesExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.9", type: StepperStatesExample, selector: "stepper-states-example", providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false },
        },
    ], ngImport: i0, template: "<mat-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n\n<!-- #docregion states -->\n<mat-stepper>\n<!-- #docregion label -->\n  <mat-step label=\"Step 1\" state=\"phone\">\n    <p>Put down your phones.</p>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n<!-- #enddocregion label -->\n  <mat-step label=\"Step 2\" state=\"chat\">\n    <p>Socialize with each other.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 3\">\n    <p>You're welcome.</p>\n  </mat-step>\n\n  <!-- Icon overrides. -->\n<!-- #docregion override-icons -->\n  <ng-template matStepperIcon=\"phone\">\n    <mat-icon>call_end</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"chat\">\n    <mat-icon>forum</mat-icon>\n  </ng-template>\n</mat-stepper>\n<!-- #enddocregion override-icons -->\n<!-- #enddocregion states -->\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"], components: [{ type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i4.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.MatStepLabel, selector: "[matStepLabel]" }, { type: i3.MatLabel, selector: "mat-label" }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { type: i2.MatStepperIcon, selector: "ng-template[matStepperIcon]", inputs: ["matStepperIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: StepperStatesExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-states-example', providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false },
                        },
                    ], template: "<mat-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n\n<!-- #docregion states -->\n<mat-stepper>\n<!-- #docregion label -->\n  <mat-step label=\"Step 1\" state=\"phone\">\n    <p>Put down your phones.</p>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n<!-- #enddocregion label -->\n  <mat-step label=\"Step 2\" state=\"chat\">\n    <p>Socialize with each other.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 3\">\n    <p>You're welcome.</p>\n  </mat-step>\n\n  <!-- Icon overrides. -->\n<!-- #docregion override-icons -->\n  <ng-template matStepperIcon=\"phone\">\n    <mat-icon>call_end</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"chat\">\n    <mat-icon>forum</mat-icon>\n  </ng-template>\n</mat-stepper>\n<!-- #enddocregion override-icons -->\n<!-- #enddocregion states -->\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.UntypedFormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGtCQUFrQixFQUFvQixVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7QUFFNUQ7O0dBRUc7QUFZSCxNQUFNLE9BQU8sb0JBQW9CO0lBSS9CLFlBQW9CLFlBQWdDO1FBQWhDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtJQUFHLENBQUM7SUFFeEQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDNUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3SEFiVSxvQkFBb0I7NEdBQXBCLG9CQUFvQixpREFQcEI7UUFDVDtZQUNFLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsUUFBUSxFQUFFLEVBQUMsMkJBQTJCLEVBQUUsS0FBSyxFQUFDO1NBQy9DO0tBQ0YsMEJDaEJILGl1RUFxRUE7a0dEbkRhLG9CQUFvQjtrQkFYaEMsU0FBUzsrQkFDRSx3QkFBd0IsYUFHdkI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHNCQUFzQjs0QkFDL0IsUUFBUSxFQUFFLEVBQUMsMkJBQTJCLEVBQUUsS0FBSyxFQUFDO3lCQUMvQztxQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVbnR5cGVkRm9ybUJ1aWxkZXIsIFVudHlwZWRGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U1RFUFBFUl9HTE9CQUxfT1BUSU9OU30gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIHdpdGggY3VzdG9taXplZCBzdGF0ZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RlcHBlci1zdGF0ZXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1zdGF0ZXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNURVBQRVJfR0xPQkFMX09QVElPTlMsXG4gICAgICB1c2VWYWx1ZToge2Rpc3BsYXlEZWZhdWx0SW5kaWNhdG9yVHlwZTogZmFsc2V9LFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJTdGF0ZXNFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmlyc3RGb3JtR3JvdXA6IFVudHlwZWRGb3JtR3JvdXA7XG4gIHNlY29uZEZvcm1Hcm91cDogVW50eXBlZEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogVW50eXBlZEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bWF0LXN0ZXBwZXIgI3N0ZXBwZXI+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5OYW1lPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBhZGRyZXNzPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIiBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiXG4gICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgPHA+WW91IGFyZSBub3cgZG9uZS48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtc3RlcHBlcj5cblxuPCEtLSAjZG9jcmVnaW9uIHN0YXRlcyAtLT5cbjxtYXQtc3RlcHBlcj5cbjwhLS0gI2RvY3JlZ2lvbiBsYWJlbCAtLT5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAxXCIgc3RhdGU9XCJwaG9uZVwiPlxuICAgIDxwPlB1dCBkb3duIHlvdXIgcGhvbmVzLjwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBsYWJlbCAtLT5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAyXCIgc3RhdGU9XCJjaGF0XCI+XG4gICAgPHA+U29jaWFsaXplIHdpdGggZWFjaCBvdGhlci48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIGxhYmVsPVwiU3RlcCAzXCI+XG4gICAgPHA+WW91J3JlIHdlbGNvbWUuPC9wPlxuICA8L21hdC1zdGVwPlxuXG4gIDwhLS0gSWNvbiBvdmVycmlkZXMuIC0tPlxuPCEtLSAjZG9jcmVnaW9uIG92ZXJyaWRlLWljb25zIC0tPlxuICA8bmctdGVtcGxhdGUgbWF0U3RlcHBlckljb249XCJwaG9uZVwiPlxuICAgIDxtYXQtaWNvbj5jYWxsX2VuZDwvbWF0LWljb24+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSBtYXRTdGVwcGVySWNvbj1cImNoYXRcIj5cbiAgICA8bWF0LWljb24+Zm9ydW08L21hdC1pY29uPlxuICA8L25nLXRlbXBsYXRlPlxuPC9tYXQtc3RlcHBlcj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBvdmVycmlkZS1pY29ucyAtLT5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBzdGF0ZXMgLS0+XG4iXX0=