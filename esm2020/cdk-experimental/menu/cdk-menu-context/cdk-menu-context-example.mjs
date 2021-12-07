import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
/** @title Context menu. */
export class CdkMenuContextExample {
}
CdkMenuContextExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CdkMenuContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuContextExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: CdkMenuContextExample, selector: "cdk-menu-context-example", exportAs: ["cdkMenuContextExample"], ngImport: i0, template: "<div [cdkContextMenuTriggerFor]=\"context_menu\">\n  Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\n  would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\n  wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\n  of the dark side that he could even keep the ones he cared about from dying. The dark side of the\n  Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the\n  only thing he was afraid of was losing his power, which eventually, of course, he did.\n  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his\n  sleep. Ironic. He could save others from death, but not himself.\n</div>\n\n<ng-template #context_menu=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"context_menu\">\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Link</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], directives: [{ type: i1.CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }, { type: i1.CdkMenuPanel, selector: "ng-template[cdkMenuPanel]", exportAs: ["cdkMenuPanel"] }, { type: i1.CdkMenu, selector: "[cdkMenu]", inputs: ["cdkMenuOrientation", "cdkMenuPanel"], outputs: ["closed"], exportAs: ["cdkMenu"] }, { type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["disabled"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: CdkMenuContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-context-example', exportAs: 'cdkMenuContextExample', template: "<div [cdkContextMenuTriggerFor]=\"context_menu\">\n  Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\n  would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\n  wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\n  of the dark side that he could even keep the ones he cared about from dying. The dark side of the\n  Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the\n  only thing he was afraid of was losing his power, which eventually, of course, he did.\n  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his\n  sleep. Ironic. He could save others from death, but not himself.\n</div>\n\n<ng-template #context_menu=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"context_menu\">\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Link</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDLDJCQUEyQjtBQU8zQixNQUFNLE9BQU8scUJBQXFCOzt5SEFBckIscUJBQXFCOzZHQUFyQixxQkFBcUIscUdDVGxDLDBxQ0FrQkE7a0dEVGEscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLDBCQUEwQixZQUMxQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgQ29udGV4dCBtZW51LiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtY29udGV4dC1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtNZW51Q29udGV4dEV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudUNvbnRleHRFeGFtcGxlIHt9XG4iLCI8ZGl2IFtjZGtDb250ZXh0TWVudVRyaWdnZXJGb3JdPVwiY29udGV4dF9tZW51XCI+XG4gIERpZCB5b3UgZXZlciBoZWFyIHRoZSB0cmFnZWR5IG9mIERhcnRoIFBsYWd1ZWlzIFRoZSBXaXNlPyBJIHRob3VnaHQgbm90LiBJdCdzIG5vdCBhIHN0b3J5IHRoZSBKZWRpXG4gIHdvdWxkIHRlbGwgeW91LiBJdCdzIGEgU2l0aCBsZWdlbmQuIERhcnRoIFBsYWd1ZWlzIHdhcyBhIERhcmsgTG9yZCBvZiB0aGUgU2l0aCwgc28gcG93ZXJmdWwgYW5kIHNvXG4gIHdpc2UgaGUgY291bGQgdXNlIHRoZSBGb3JjZSB0byBpbmZsdWVuY2UgdGhlIG1pZGljaGxvcmlhbnMgdG8gY3JlYXRlIGxpZmXigKYgSGUgaGFkIHN1Y2ggYSBrbm93bGVkZ2VcbiAgb2YgdGhlIGRhcmsgc2lkZSB0aGF0IGhlIGNvdWxkIGV2ZW4ga2VlcCB0aGUgb25lcyBoZSBjYXJlZCBhYm91dCBmcm9tIGR5aW5nLiBUaGUgZGFyayBzaWRlIG9mIHRoZVxuICBGb3JjZSBpcyBhIHBhdGh3YXkgdG8gbWFueSBhYmlsaXRpZXMgc29tZSBjb25zaWRlciB0byBiZSB1bm5hdHVyYWwuIEhlIGJlY2FtZSBzbyBwb3dlcmZ1bOKApiB0aGVcbiAgb25seSB0aGluZyBoZSB3YXMgYWZyYWlkIG9mIHdhcyBsb3NpbmcgaGlzIHBvd2VyLCB3aGljaCBldmVudHVhbGx5LCBvZiBjb3Vyc2UsIGhlIGRpZC5cbiAgVW5mb3J0dW5hdGVseSwgaGUgdGF1Z2h0IGhpcyBhcHByZW50aWNlIGV2ZXJ5dGhpbmcgaGUga25ldywgdGhlbiBoaXMgYXBwcmVudGljZSBraWxsZWQgaGltIGluIGhpc1xuICBzbGVlcC4gSXJvbmljLiBIZSBjb3VsZCBzYXZlIG90aGVycyBmcm9tIGRlYXRoLCBidXQgbm90IGhpbXNlbGYuXG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNjb250ZXh0X21lbnU9XCJjZGtNZW51UGFuZWxcIiBjZGtNZW51UGFuZWw+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51IFtjZGtNZW51UGFuZWxdPVwiY29udGV4dF9tZW51XCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q3V0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q29weTwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkxpbms8L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19