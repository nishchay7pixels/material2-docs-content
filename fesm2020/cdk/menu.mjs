import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/cdk/menu';
import { CdkMenuModule } from '@angular/cdk/menu';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

/** @title Menu with Standalone Trigger. */
class CdkMenuStandaloneMenuExample {
}
CdkMenuStandaloneMenuExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuStandaloneMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuStandaloneMenuExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.15", type: CdkMenuStandaloneMenuExample, selector: "cdk-menu-standalone-menu-example", ngImport: i0, template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Refresh</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Settings</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Help</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Sign out</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuStandaloneMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-menu-example', template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Refresh</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Settings</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Help</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Sign out</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n"] }]
        }] });

/** @title Stateful Menu with Standalone Trigger. */
class CdkMenuStandaloneStatefulMenuExample {
    constructor() {
        this.bold = true;
        this.italic = false;
        this.sizes = ['Small', 'Normal', 'Large'];
        this.selectedSize = 'Normal';
    }
}
CdkMenuStandaloneStatefulMenuExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuStandaloneStatefulMenuExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.15", type: CdkMenuStandaloneStatefulMenuExample, selector: "cdk-menu-standalone-stateful-menu-example", ngImport: i0, template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"bold\"\n        (cdkMenuItemTriggered)=\"bold = !bold\">\n      Bold\n    </button>\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"italic\"\n        (cdkMenuItemTriggered)=\"italic = !italic\">\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup>\n      <button\n          *ngFor=\"let size of sizes\"\n          cdkMenuItemRadio\n          class=\"example-menu-item\"\n          [cdkMenuItemChecked]=\"size === selectedSize\"\n          (cdkMenuItemTriggered)=\"selectedSize = size\">\n        {{size}}\n      </button>\n    </div>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }, { kind: "directive", type: i1.CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: i1.CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: i1.CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-stateful-menu-example', template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"bold\"\n        (cdkMenuItemTriggered)=\"bold = !bold\">\n      Bold\n    </button>\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"italic\"\n        (cdkMenuItemTriggered)=\"italic = !italic\">\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup>\n      <button\n          *ngFor=\"let size of sizes\"\n          cdkMenuItemRadio\n          class=\"example-menu-item\"\n          [cdkMenuItemChecked]=\"size === selectedSize\"\n          (cdkMenuItemTriggered)=\"selectedSize = size\">\n        {{size}}\n      </button>\n    </div>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"] }]
        }] });

/** @title Google Docs Menu Bar. */
class CdkMenuMenubarExample {
}
CdkMenuMenubarExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuMenubarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuMenubarExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.15", type: CdkMenuMenubarExample, selector: "cdk-menu-menubar-example", exportAs: ["cdkMenuMenubarExample"], ngImport: i0, template: "<div cdkMenuBar>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template #file>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format >\n  <div class=\"example-menu\" cdkMenu>\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button class=\"example-menu-item\" checked id=\"bf\" cdkMenuItemCheckbox>Bold</button>\n      <button class=\"example-menu-item\" id=\"if\" cdkMenuItemCheckbox>Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button class=\"example-menu-item\" id=\"small\" cdkMenuItemRadio>Small</button>\n      <button class=\"example-menu-item\" checked id=\"normal\" cdkMenuItemRadio>Normal</button>\n      <button class=\"example-menu-item\" id=\"large\" cdkMenuItemRadio>Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenuBar, selector: "[cdkMenuBar]", exportAs: ["cdkMenuBar"] }, { kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }, { kind: "directive", type: i1.CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: i1.CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: i1.CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuMenubarExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-menubar-example', exportAs: 'cdkMenuMenubarExample', template: "<div cdkMenuBar>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template #file>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format >\n  <div class=\"example-menu\" cdkMenu>\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button class=\"example-menu-item\" checked id=\"bf\" cdkMenuItemCheckbox>Bold</button>\n      <button class=\"example-menu-item\" id=\"if\" cdkMenuItemCheckbox>Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button class=\"example-menu-item\" id=\"small\" cdkMenuItemRadio>Small</button>\n      <button class=\"example-menu-item\" checked id=\"normal\" cdkMenuItemRadio>Normal</button>\n      <button class=\"example-menu-item\" id=\"large\" cdkMenuItemRadio>Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"] }]
        }] });

/** @title Gmail inline menu. */
class CdkMenuInlineExample {
}
CdkMenuInlineExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuInlineExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuInlineExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.15", type: CdkMenuInlineExample, selector: "cdk-menu-inline-example", exportAs: ["cdkMenuInlineExample"], ngImport: i0, template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuInlineExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-inline-example', exportAs: 'cdkMenuInlineExample', template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });

/** @title Context menu. */
class CdkMenuContextExample {
}
CdkMenuContextExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuContextExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.15", type: CdkMenuContextExample, selector: "cdk-menu-context-example", exportAs: ["cdkMenuContextExample"], ngImport: i0, template: "<div [cdkContextMenuTriggerFor]=\"context_menu\">\n  Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\n  would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\n  wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\n  of the dark side that he could even keep the ones he cared about from dying. The dark side of the\n  Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the\n  only thing he was afraid of was losing his power, which eventually, of course, he did.\n  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his\n  sleep. Ironic. He could save others from death, but not himself.\n</div>\n\n<ng-template #context_menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Link</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuPosition", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-context-example', exportAs: 'cdkMenuContextExample', template: "<div [cdkContextMenuTriggerFor]=\"context_menu\">\n  Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\n  would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\n  wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\n  of the dark side that he could even keep the ones he cared about from dying. The dark side of the\n  Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the\n  only thing he was afraid of was losing his power, which eventually, of course, he did.\n  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his\n  sleep. Ironic. He could save others from death, but not himself.\n</div>\n\n<ng-template #context_menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Link</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });

const EXAMPLES = [
    CdkMenuStandaloneMenuExample,
    CdkMenuMenubarExample,
    CdkMenuInlineExample,
    CdkMenuContextExample,
    CdkMenuStandaloneStatefulMenuExample,
];
class CdkMenuExamplesModule {
}
CdkMenuExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkMenuExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuExamplesModule, declarations: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample], imports: [CdkMenuModule, CommonModule], exports: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample] });
CdkMenuExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuExamplesModule, imports: [CdkMenuModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: CdkMenuExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkMenuModule, CommonModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkMenuContextExample, CdkMenuExamplesModule, CdkMenuInlineExample, CdkMenuMenubarExample, CdkMenuStandaloneMenuExample, CdkMenuStandaloneStatefulMenuExample };
//# sourceMappingURL=menu.mjs.map
