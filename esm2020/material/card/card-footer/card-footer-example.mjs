import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/card";
import * as i3 from "@angular/material/divider";
import * as i4 from "@angular/material/progress-bar";
/**
 * @title Card with footer
 */
export class CardFooterExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardFooterExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CardFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardFooterExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: CardFooterExample, selector: "card-footer-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n  </mat-card-content>\n  <mat-divider inset></mat-divider>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { kind: "directive", type: i2.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { kind: "directive", type: i2.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "directive", type: i2.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i2.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i2.MatCardFooter, selector: "mat-card-footer" }, { kind: "component", type: i3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CardFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-footer-example', template: "<mat-card class=\"example-card\">\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n  </mat-card-content>\n  <mat-divider inset></mat-divider>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFNRSxhQUFRLEdBQUc7OytCQUVrQixDQUFDO0tBQy9COzs4R0FKWSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwyRENWOUIsNmlCQWVXOzJGRExFLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENhcmQgd2l0aCBmb290ZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FyZC1mb290ZXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1mb290ZXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NhcmQtZm9vdGVyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRGb290ZXJFeGFtcGxlIHtcbiAgbG9uZ1RleHQgPSBgVGhlIFNoaWJhIEludSBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIHNpeCBvcmlnaW5hbCBhbmQgZGlzdGluY3Qgc3BpdHogYnJlZWRzIG9mIGRvZ1xuICBmcm9tIEphcGFuLiBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhc1xuICBvcmlnaW5hbGx5IGJyZWQgZm9yIGh1bnRpbmcuYDtcbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxuICA8bWF0LWNhcmQtc3VidGl0bGU+RG9nIEJyZWVkPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxwPlRoaXMgY2FyZCBoYXMgZGl2aWRlciBhbmQgaW5kZXRlcm1pbmF0ZSBwcm9ncmVzcyBhcyBmb290ZXI8L3A+XG4gICAgPHA+e3sgbG9uZ1RleHQgfX08L3A+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbiAgPG1hdC1kaXZpZGVyIGluc2V0PjwvbWF0LWRpdmlkZXI+XG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbiAgPG1hdC1jYXJkLWZvb3Rlcj5cbiAgICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPC9tYXQtY2FyZC1mb290ZXI+XG48L21hdC1jYXJkPiJdfQ==