import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Tooltip that can be manually shown/hidden.
 */
export class TooltipManualExample {
}
TooltipManualExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: TooltipManualExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipManualExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: TooltipManualExample, selector: "tooltip-manual-example", ngImport: i0, template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"], components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: TooltipManualExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-manual-example', template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9COzt3SEFBcEIsb0JBQW9COzRHQUFwQixvQkFBb0IsOERDVmpDLGc4QkEyQlM7a0dEakJJLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgdGhhdCBjYW4gYmUgbWFudWFsbHkgc2hvd24vaGlkZGVuLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLW1hbnVhbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLW1hbnVhbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1tYW51YWwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1hbnVhbEV4YW1wbGUge31cbiIsIjxkaXY+XG4gIDxzcGFuPiBDbGljayB0aGUgZm9sbG93aW5nIGJ1dHRvbnMgdG8uLi4gPC9zcGFuPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC5zaG93KClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaG93IHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIj5cbiAgICBzaG93XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC5oaWRlKClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJIaWRlIHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIj5cbiAgICBoaWRlXG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC50b2dnbGUoKVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cvSGlkZSB0b29sdGlwIG9uIHRoZSBidXR0b24gYXQgdGhlIGVuZCBvZiB0aGlzIHNlY3Rpb25cIlxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCI+XG4gICAgdG9nZ2xlIHNob3cvaGlkZVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgIGFyaWEtdG9vbHRpcD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGFuZCBoaWRlcyBhIHRvb2x0aXAgdHJpZ2dlcmVkIGJ5IG90aGVyIGJ1dHRvbnNcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj4iXX0=