import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/stepper";
import * as i3 from "@angular/common";
/** @title A custom CDK linear stepper with forms */
export class CdkLinearStepperWithFormExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.firstFormGroup = this._formBuilder.group({
            firstControl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondControl: ['', Validators.required],
        });
    }
    toggleLinearity() {
        this.isLinear = !this.isLinear;
    }
}
CdkLinearStepperWithFormExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: CdkLinearStepperWithFormExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
CdkLinearStepperWithFormExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-rc.1", type: CdkLinearStepperWithFormExample, selector: "cdk-linear-stepper-with-form-example", ngImport: i0, template: "<example-custom-linear-stepper [linear]=\"isLinear\">\n  <cdk-step [stepControl]=\"firstFormGroup\">\n    <label for=\"stepOneInput\">Step 1 input</label>\n    <form [formGroup]=\"firstFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"firstControl\" id=\"stepOneInput\" required>\n    </form>\n  </cdk-step>\n  <cdk-step [stepControl]=\"secondFormGroup\">\n    <label for=\"stepTwoInput\">Step 2 input</label>\n    <form [formGroup]=\"secondFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"secondControl\" id=\"stepTwoInput\" required>\n    </form>\n  </cdk-step>\n</example-custom-linear-stepper>\n<button class=\"example-toggle-linear-button\" (click)=\"toggleLinearity()\">\n  {{isLinear ? 'Disable linear mode' : 'Enable linear mode'}}\n</button>\n", styles: [".example-toggle-linear-button {\n  margin-left: 10px;\n}\n"], components: [{ type: i0.forwardRef(function () { return CustomLinearStepper; }), selector: "example-custom-linear-stepper" }, { type: i0.forwardRef(function () { return i2.CdkStep; }), selector: "cdk-step", inputs: ["stepControl", "label", "errorMessage", "aria-label", "aria-labelledby", "state", "editable", "optional", "completed", "hasError"], outputs: ["interacted"], exportAs: ["cdkStep"] }], directives: [{ type: i0.forwardRef(function () { return i1.ɵNgNoValidate; }), selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i0.forwardRef(function () { return i1.NgControlStatusGroup; }), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i0.forwardRef(function () { return i1.FormGroupDirective; }), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i0.forwardRef(function () { return i1.DefaultValueAccessor; }), selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i0.forwardRef(function () { return i1.NgControlStatus; }), selector: "[formControlName],[ngModel],[formControl]" }, { type: i0.forwardRef(function () { return i1.FormControlName; }), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i0.forwardRef(function () { return i1.RequiredValidator; }), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: CdkLinearStepperWithFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-linear-stepper-with-form-example', template: "<example-custom-linear-stepper [linear]=\"isLinear\">\n  <cdk-step [stepControl]=\"firstFormGroup\">\n    <label for=\"stepOneInput\">Step 1 input</label>\n    <form [formGroup]=\"firstFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"firstControl\" id=\"stepOneInput\" required>\n    </form>\n  </cdk-step>\n  <cdk-step [stepControl]=\"secondFormGroup\">\n    <label for=\"stepTwoInput\">Step 2 input</label>\n    <form [formGroup]=\"secondFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"secondControl\" id=\"stepTwoInput\" required>\n    </form>\n  </cdk-step>\n</example-custom-linear-stepper>\n<button class=\"example-toggle-linear-button\" (click)=\"toggleLinearity()\">\n  {{isLinear ? 'Disable linear mode' : 'Enable linear mode'}}\n</button>\n", styles: [".example-toggle-linear-button {\n  margin-left: 10px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
/** Custom CDK linear stepper component */
export class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
}
CustomLinearStepper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: CustomLinearStepper, deps: null, target: i0.ɵɵFactoryTarget.Component });
CustomLinearStepper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-rc.1", type: CustomLinearStepper, selector: "example-custom-linear-stepper", providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }], usesInheritance: true, ngImport: i0, template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      [class.example-active]=\"selectedIndex === i\"\n      *ngFor=\"let step of steps; let i = index\"\n      (click)=\"selectStepByIndex(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"], directives: [{ type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { type: i2.CdkStepperPrevious, selector: "button[cdkStepperPrevious]", inputs: ["type"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.CdkStepperNext, selector: "button[cdkStepperNext]", inputs: ["type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: CustomLinearStepper, decorators: [{
            type: Component,
            args: [{ selector: 'example-custom-linear-stepper', providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }], template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      [class.example-active]=\"selectedIndex === i\"\n      *ngFor=\"let step of steps; let i = index\"\n      (click)=\"selectStepByIndex(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS9leGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRWxFLG9EQUFvRDtBQU1wRCxNQUFNLE9BQU8sK0JBQStCO0lBSzFDLFlBQTZCLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBSnRELGFBQVEsR0FBRyxJQUFJLENBQUM7UUFLZCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzVDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDN0MsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDOztpSUFoQlUsK0JBQStCO3FIQUEvQiwrQkFBK0IsNEVDVjVDLHF4QkFpQkEsa0lEbUJhLG1CQUFtQjtnR0ExQm5CLCtCQUErQjtrQkFMM0MsU0FBUzsrQkFDRSxzQ0FBc0M7O0FBdUJsRCwwQ0FBMEM7QUFPMUMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFDakQsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOztxSEFIVSxtQkFBbUI7eUdBQW5CLG1CQUFtQix3REFGbkIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLENBQUMsaURFbEN0RSxvcEJBb0JBO2dHRmdCYSxtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0UsK0JBQStCLGFBRzlCLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcscUJBQXFCLEVBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrU3RlcHBlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgQSBjdXN0b20gQ0RLIGxpbmVhciBzdGVwcGVyIHdpdGggZm9ybXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGluZWFyU3RlcHBlcldpdGhGb3JtRXhhbXBsZSB7XG4gIGlzTGluZWFyID0gdHJ1ZTtcbiAgZmlyc3RGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q29udHJvbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlY29uZENvbnRyb2w6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVMaW5lYXJpdHkoKSB7XG4gICAgdGhpcy5pc0xpbmVhciA9ICF0aGlzLmlzTGluZWFyO1xuICB9XG59XG5cbi8qKiBDdXN0b20gQ0RLIGxpbmVhciBzdGVwcGVyIGNvbXBvbmVudCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyLmNzcyddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrU3RlcHBlciwgdXNlRXhpc3Rpbmc6IEN1c3RvbUxpbmVhclN0ZXBwZXJ9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tTGluZWFyU3RlcHBlciBleHRlbmRzIENka1N0ZXBwZXIge1xuICBzZWxlY3RTdGVwQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cbn1cbiIsIjxleGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlciBbbGluZWFyXT1cImlzTGluZWFyXCI+XG4gIDxjZGstc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8bGFiZWwgZm9yPVwic3RlcE9uZUlucHV0XCI+U3RlcCAxIGlucHV0PC9sYWJlbD5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q29udHJvbFwiIGlkPVwic3RlcE9uZUlucHV0XCIgcmVxdWlyZWQ+XG4gICAgPC9mb3JtPlxuICA8L2Nkay1zdGVwPlxuICA8Y2RrLXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgIDxsYWJlbCBmb3I9XCJzdGVwVHdvSW5wdXRcIj5TdGVwIDIgaW5wdXQ8L2xhYmVsPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cInNlY29uZENvbnRyb2xcIiBpZD1cInN0ZXBUd29JbnB1dFwiIHJlcXVpcmVkPlxuICAgIDwvZm9ybT5cbiAgPC9jZGstc3RlcD5cbjwvZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXI+XG48YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS10b2dnbGUtbGluZWFyLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVMaW5lYXJpdHkoKVwiPlxuICB7e2lzTGluZWFyID8gJ0Rpc2FibGUgbGluZWFyIG1vZGUnIDogJ0VuYWJsZSBsaW5lYXIgbW9kZSd9fVxuPC9idXR0b24+XG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoZWFkZXI+XG4gICAgPGgyPlN0ZXAge3tzZWxlY3RlZEluZGV4ICsgMX19L3t7c3RlcHMubGVuZ3RofX08L2gyPlxuICA8L2hlYWRlcj5cblxuICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlbGVjdGVkID8gc2VsZWN0ZWQuY29udGVudCA6IG51bGxcIj48L2Rpdj5cblxuICA8Zm9vdGVyIGNsYXNzPVwiZXhhbXBsZS1zdGVwLW5hdmlnYXRpb24tYmFyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJQcmV2aW91cz4mbGFycjs8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImV4YW1wbGUtc3RlcFwiXG4gICAgICBbY2xhc3MuZXhhbXBsZS1hY3RpdmVdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiXG4gICAgICAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0U3RlcEJ5SW5kZXgoaSlcIlxuICAgID5cbiAgICAgIFN0ZXAge3sgaSArIDEgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlck5leHQ+JnJhcnI7PC9idXR0b24+XG4gIDwvZm9vdGVyPlxuPC9zZWN0aW9uPlxuIl19