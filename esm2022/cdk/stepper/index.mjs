import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkCustomStepperWithoutFormExample, CustomStepper, } from './cdk-custom-stepper-without-form/cdk-custom-stepper-without-form-example';
import { CdkLinearStepperWithFormExample, CustomLinearStepper, } from './cdk-linear-stepper-with-form/cdk-linear-stepper-with-form-example';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export { CdkCustomStepperWithoutFormExample, CustomStepper, CdkLinearStepperWithFormExample, CustomLinearStepper, };
const EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
    CdkLinearStepperWithFormExample,
    CustomLinearStepper,
];
class CdkStepperExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkStepperExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: CdkStepperExamplesModule, declarations: [CdkCustomStepperWithoutFormExample,
            CustomStepper,
            CdkLinearStepperWithFormExample,
            CustomLinearStepper], imports: [CdkStepperModule, CommonModule, ReactiveFormsModule], exports: [CdkCustomStepperWithoutFormExample,
            CustomStepper,
            CdkLinearStepperWithFormExample,
            CustomLinearStepper] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkStepperExamplesModule, imports: [CdkStepperModule, CommonModule, ReactiveFormsModule] }); }
}
export { CdkStepperExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkStepperExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkStepperModule, CommonModule, ReactiveFormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGFBQWEsR0FDZCxNQUFNLDJFQUEyRSxDQUFDO0FBQ25GLE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsbUJBQW1CLEdBQ3BCLE1BQU0scUVBQXFFLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbEMsYUFBYSxFQUNiLCtCQUErQixFQUMvQixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRixNQUthLHdCQUF3Qjs4R0FBeEIsd0JBQXdCOytHQUF4Qix3QkFBd0IsaUJBWG5DLGtDQUFrQztZQUNsQyxhQUFhO1lBQ2IsK0JBQStCO1lBQy9CLG1CQUFtQixhQUlULGdCQUFnQixFQUFFLFlBQVksRUFBRSxtQkFBbUIsYUFQN0Qsa0NBQWtDO1lBQ2xDLGFBQWE7WUFDYiwrQkFBK0I7WUFDL0IsbUJBQW1COytHQVFSLHdCQUF3QixZQUp6QixnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsbUJBQW1COztTQUlsRCx3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFMcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLENBQUM7b0JBQzlELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1N0ZXBwZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlLFxuICBDdXN0b21TdGVwcGVyLFxufSBmcm9tICcuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0xpbmVhclN0ZXBwZXJXaXRoRm9ybUV4YW1wbGUsXG4gIEN1c3RvbUxpbmVhclN0ZXBwZXIsXG59IGZyb20gJy4vY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCB7XG4gIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUsXG4gIEN1c3RvbVN0ZXBwZXIsXG4gIENka0xpbmVhclN0ZXBwZXJXaXRoRm9ybUV4YW1wbGUsXG4gIEN1c3RvbUxpbmVhclN0ZXBwZXIsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlcixcbiAgQ2RrTGluZWFyU3RlcHBlcldpdGhGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tTGluZWFyU3RlcHBlcixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDZGtTdGVwcGVyTW9kdWxlLCBDb21tb25Nb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=