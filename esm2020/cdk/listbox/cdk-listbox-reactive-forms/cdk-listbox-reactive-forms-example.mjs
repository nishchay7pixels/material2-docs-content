import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/cdk/listbox";
/** @title Listbox with reactive forms. */
export class CdkListboxReactiveFormsExample {
    constructor() {
        this.languages = ['C++', 'Java', 'JavaScript', 'Python', 'TypeScript'];
        this.languageCtrl = new FormControl(['TypeScript']);
    }
}
CdkListboxReactiveFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: CdkListboxReactiveFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxReactiveFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.1", type: CdkListboxReactiveFormsExample, selector: "cdk-listbox-reactive-forms-example", exportAs: ["cdkListboxReactiveFormsExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-language-label\">\n    Preferred Language\n  </label>\n  <ul cdkListbox\n      [formControl]=\"languageCtrl\"\n      aria-labelledby=\"example-language-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let language of languages\"\n        [cdkOption]=\"language\"\n        class=\"example-option\">\n      {{language}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your preferred language: <b>{{languageCtrl.value | json}}</b>&nbsp;\n  <button (click)=\"languageCtrl.reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i3.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: CdkListboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-reactive-forms-example', exportAs: 'cdkListboxReactiveFormsExample', template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-language-label\">\n    Preferred Language\n  </label>\n  <ul cdkListbox\n      [formControl]=\"languageCtrl\"\n      aria-labelledby=\"example-language-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let language of languages\"\n        [cdkOption]=\"language\"\n        class=\"example-option\">\n      {{language}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your preferred language: <b>{{languageCtrl.value | json}}</b>&nbsp;\n  <button (click)=\"languageCtrl.reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zL2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy9jZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTNDLDBDQUEwQztBQU8xQyxNQUFNLE9BQU8sOEJBQThCO0lBTjNDO1FBT0UsY0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2xFLGlCQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQ2hEOztnSUFIWSw4QkFBOEI7b0hBQTlCLDhCQUE4Qix3SENWM0MsdXBCQXFCQTtnR0RYYSw4QkFBOEI7a0JBTjFDLFNBQVM7K0JBQ0Usb0NBQW9DLFlBQ3BDLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggcmVhY3RpdmUgZm9ybXMuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtMaXN0Ym94UmVhY3RpdmVGb3Jtc0V4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94UmVhY3RpdmVGb3Jtc0V4YW1wbGUge1xuICBsYW5ndWFnZXMgPSBbJ0MrKycsICdKYXZhJywgJ0phdmFTY3JpcHQnLCAnUHl0aG9uJywgJ1R5cGVTY3JpcHQnXTtcbiAgbGFuZ3VhZ2VDdHJsID0gbmV3IEZvcm1Db250cm9sKFsnVHlwZVNjcmlwdCddKTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtbGFuZ3VhZ2UtbGFiZWxcIj5cbiAgICBQcmVmZXJyZWQgTGFuZ3VhZ2VcbiAgPC9sYWJlbD5cbiAgPHVsIGNka0xpc3Rib3hcbiAgICAgIFtmb3JtQ29udHJvbF09XCJsYW5ndWFnZUN0cmxcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1sYW5ndWFnZS1sYWJlbFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgbGFuZ3VhZ2Ugb2YgbGFuZ3VhZ2VzXCJcbiAgICAgICAgW2Nka09wdGlvbl09XCJsYW5ndWFnZVwiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIHt7bGFuZ3VhZ2V9fVxuICAgIDwvbGk+XG4gIDwvdWw+XG4gIDwhLS0gI2VuZGRvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuPC9kaXY+XG48cD5cbiAgWW91ciBwcmVmZXJyZWQgbGFuZ3VhZ2U6IDxiPnt7bGFuZ3VhZ2VDdHJsLnZhbHVlIHwganNvbn19PC9iPiZuYnNwO1xuICA8YnV0dG9uIChjbGljayk9XCJsYW5ndWFnZUN0cmwucmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG48L3A+XG4iXX0=