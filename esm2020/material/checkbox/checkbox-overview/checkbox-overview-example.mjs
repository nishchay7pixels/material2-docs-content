import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
/**
 * @title Basic checkboxes
 */
export class CheckboxOverviewExample {
    constructor() {
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' }
            ]
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => t.completed = completed);
    }
}
CheckboxOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CheckboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: CheckboxOverviewExample, selector: "checkbox-overview-example", ngImport: i0, template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"], components: [{ type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CheckboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-overview-example', template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1vdmVydmlldy9jaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFVeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTUUsU0FBSSxHQUFTO1lBQ1gsSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFO2dCQUNSLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7Z0JBQ3JELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7Z0JBQ25ELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7YUFDaEQ7U0FDRixDQUFDO1FBRUYsZ0JBQVcsR0FBWSxLQUFLLENBQUM7S0FvQjlCO0lBbEJDLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNyRixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7NEhBL0JVLHVCQUF1QjtnSEFBdkIsdUJBQXVCLGlFQ2xCcEMsdTdCQTJCQTttR0RUYSx1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhc2sge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbXBsZXRlZDogYm9vbGVhbjtcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbiAgc3VidGFza3M/OiBUYXNrW107XG59XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGNoZWNrYm94ZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94T3ZlcnZpZXdFeGFtcGxlIHtcbiAgdGFzazogVGFzayA9IHtcbiAgICBuYW1lOiAnSW5kZXRlcm1pbmF0ZScsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHN1YnRhc2tzOiBbXG4gICAgICB7bmFtZTogJ1ByaW1hcnknLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ3ByaW1hcnknfSxcbiAgICAgIHtuYW1lOiAnQWNjZW50JywgY29tcGxldGVkOiBmYWxzZSwgY29sb3I6ICdhY2NlbnQnfSxcbiAgICAgIHtuYW1lOiAnV2FybicsIGNvbXBsZXRlZDogZmFsc2UsIGNvbG9yOiAnd2Fybid9XG4gICAgXVxuICB9O1xuXG4gIGFsbENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgdXBkYXRlQWxsQ29tcGxldGUoKSB7XG4gICAgdGhpcy5hbGxDb21wbGV0ZSA9IHRoaXMudGFzay5zdWJ0YXNrcyAhPSBudWxsICYmIHRoaXMudGFzay5zdWJ0YXNrcy5ldmVyeSh0ID0+IHQuY29tcGxldGVkKTtcbiAgfVxuXG4gIHNvbWVDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy50YXNrLnN1YnRhc2tzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGFzay5zdWJ0YXNrcy5maWx0ZXIodCA9PiB0LmNvbXBsZXRlZCkubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDb21wbGV0ZTtcbiAgfVxuXG4gIHNldEFsbChjb21wbGV0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbENvbXBsZXRlID0gY29tcGxldGVkO1xuICAgIGlmICh0aGlzLnRhc2suc3VidGFza3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRhc2suc3VidGFza3MuZm9yRWFjaCh0ID0+IHQuY29tcGxldGVkID0gY29tcGxldGVkKTtcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCI+Q2hlY2sgbWUhPC9tYXQtY2hlY2tib3g+XG4gIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+RGlzYWJsZWQ8L21hdC1jaGVja2JveD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWxpc3Qtc2VjdGlvblwiPlxuICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJhbGxDb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICBbY29sb3JdPVwidGFzay5jb2xvclwiXG4gICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzb21lQ29tcGxldGUoKVwiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInNldEFsbCgkZXZlbnQuY2hlY2tlZClcIj5cbiAgICAgIHt7dGFzay5uYW1lfX1cbiAgICA8L21hdC1jaGVja2JveD5cbiAgPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtbGlzdC1zZWN0aW9uXCI+XG4gICAgPHVsPlxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBzdWJ0YXNrIG9mIHRhc2suc3VidGFza3NcIj5cbiAgICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cInN1YnRhc2suY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwic3VidGFzay5jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQWxsQ29tcGxldGUoKVwiPlxuICAgICAgICAgIHt7c3VidGFzay5uYW1lfX1cbiAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvc3Bhbj5cbjwvc2VjdGlvbj5cbiJdfQ==