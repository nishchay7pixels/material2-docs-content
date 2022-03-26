import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group animations
 */
export class TabGroupAnimationsExample {
}
TabGroupAnimationsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: TabGroupAnimationsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupAnimationsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.9", type: TabGroupAnimationsExample, selector: "tab-group-animations-example", ngImport: i0, template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<!-- #docregion slow-animation-duration -->\n<mat-tab-group animationDuration=\"2000ms\">\n<!-- #enddocregion slow-animation-duration -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"], components: [{ type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple"], exportAs: ["matTabGroup"] }, { type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.9", ngImport: i0, type: TabGroupAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-animations-example', template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<!-- #docregion slow-animation-duration -->\n<mat-tab-group animationDuration=\"2000ms\">\n<!-- #enddocregion slow-animation-duration -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx5QkFBeUI7OzZIQUF6Qix5QkFBeUI7aUhBQXpCLHlCQUF5QixvRUNWdEMsdWpCQWdCQTtrR0ROYSx5QkFBeUI7a0JBTHJDLFNBQVM7K0JBQ0UsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgYW5pbWF0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtYW5pbWF0aW9ucy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtYW5pbWF0aW9ucy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBBbmltYXRpb25zRXhhbXBsZSB7fVxuIiwiPGgzPk5vIGFuaW1hdGlvbjwvaDM+XG5cbjxtYXQtdGFiLWdyb3VwIGFuaW1hdGlvbkR1cmF0aW9uPVwiMG1zXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuXG48aDM+VmVyeSBzbG93IGFuaW1hdGlvbjwvaDM+XG48IS0tICNkb2NyZWdpb24gc2xvdy1hbmltYXRpb24tZHVyYXRpb24gLS0+XG48bWF0LXRhYi1ncm91cCBhbmltYXRpb25EdXJhdGlvbj1cIjIwMDBtc1wiPlxuPCEtLSAjZW5kZG9jcmVnaW9uIHNsb3ctYW5pbWF0aW9uLWR1cmF0aW9uIC0tPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+Q29udGVudCAxPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPkNvbnRlbnQgMjwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPkNvbnRlbnQgMzwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==