import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CheckboxConfigurableExample } from './checkbox-configurable/checkbox-configurable-example';
import { CheckboxHarnessExample } from './checkbox-harness/checkbox-harness-example';
import { CheckboxOverviewExample } from './checkbox-overview/checkbox-overview-example';
import { CheckboxReactiveFormsExample } from './checkbox-reactive-forms/checkbox-reactive-forms-example';
import * as i0 from "@angular/core";
export { CheckboxConfigurableExample, CheckboxOverviewExample, CheckboxHarnessExample, CheckboxReactiveFormsExample, };
const EXAMPLES = [
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    CheckboxHarnessExample,
    CheckboxReactiveFormsExample,
];
export class CheckboxExamplesModule {
}
CheckboxExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CheckboxExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CheckboxExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CheckboxExamplesModule, declarations: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample], imports: [CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample] });
CheckboxExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CheckboxExamplesModule, imports: [[
            CommonModule,
            MatCardModule,
            MatCheckboxModule,
            MatRadioModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CheckboxExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQ0wsNEJBQTRCLEVBQzdCLE1BQU0sMkRBQTJELENBQUM7O0FBRW5FLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0Qiw0QkFBNEIsR0FDN0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsNEJBQTRCO0NBQzdCLENBQUM7QUFlRixNQUFNLE9BQU8sc0JBQXNCOzsySEFBdEIsc0JBQXNCOzRIQUF0QixzQkFBc0IsaUJBbkJqQywyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0Qiw0QkFBNEIsYUFLMUIsWUFBWTtRQUNaLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsY0FBYztRQUNkLFdBQVc7UUFDWCxtQkFBbUIsYUFickIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsNEJBQTRCOzRIQWdCakIsc0JBQXNCLFlBWnhCO1lBQ1AsWUFBWTtZQUNaLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsY0FBYztZQUNkLFdBQVc7WUFDWCxtQkFBbUI7U0FDcEI7bUdBS1Usc0JBQXNCO2tCQWJsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtDaGVja2JveENvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtY29uZmlndXJhYmxlL2NoZWNrYm94LWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7Q2hlY2tib3hIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9jaGVja2JveC1oYXJuZXNzL2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge0NoZWNrYm94T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZVxufSBmcm9tICcuL2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zL2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBDaGVja2JveENvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIENoZWNrYm94T3ZlcnZpZXdFeGFtcGxlLFxuICBDaGVja2JveEhhcm5lc3NFeGFtcGxlLFxuICBDaGVja2JveFJlYWN0aXZlRm9ybXNFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZSxcbiAgQ2hlY2tib3hPdmVydmlld0V4YW1wbGUsXG4gIENoZWNrYm94SGFybmVzc0V4YW1wbGUsXG4gIENoZWNrYm94UmVhY3RpdmVGb3Jtc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94RXhhbXBsZXNNb2R1bGUge1xufVxuIl19