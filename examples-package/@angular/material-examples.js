/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CdkTableModule, DataSource } from '@angular/cdk';
import { MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule, MdDialog, MdDialogModule, MdDialogRef, MdGridListModule, MdIconModule, MdIconRegistry, MdInputModule, MdListModule, MdMenuModule, MdPaginator, MdPaginatorModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule, MdSelectModule, MdSidenavModule, MdSlideToggleModule, MdSliderModule, MdSnackBar, MdSnackBarModule, MdSort, MdSortModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule, SelectionModel } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/merge';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

class ExampleMaterialModule {
}
ExampleMaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    CdkTableModule,
                    MdAutocompleteModule,
                    MdButtonModule,
                    MdButtonToggleModule,
                    MdCardModule,
                    MdCheckboxModule,
                    MdChipsModule,
                    MdDatepickerModule,
                    MdDialogModule,
                    MdGridListModule,
                    MdIconModule,
                    MdInputModule,
                    MdListModule,
                    MdMenuModule,
                    MdProgressBarModule,
                    MdProgressSpinnerModule,
                    MdRadioModule,
                    MdSelectModule,
                    MdSlideToggleModule,
                    MdSliderModule,
                    MdSidenavModule,
                    MdSnackBarModule,
                    MdTableModule,
                    MdTabsModule,
                    MdToolbarModule,
                    MdTooltipModule,
                    MdPaginatorModule,
                    MdSortModule
                ]
            },] },
];
/**
 * @nocollapse
 */
ExampleMaterialModule.ctorParameters = () => [];

/**
 * \@title Basic autocomplete
 */
class AutocompleteOverviewExample {
    constructor() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(name => this.filterStates(name));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    filterStates(val) {
        return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
            : this.states;
    }
}
AutocompleteOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete-overview-example',
                template: "<md-input-container><input mdInput placeholder=\"State\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\"></md-input-container><md-autocomplete #auto=\"mdAutocomplete\"><md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">{{ state }}</md-option></md-autocomplete>",
            },] },
];
/**
 * @nocollapse
 */
AutocompleteOverviewExample.ctorParameters = () => [];

/**
 * \@title Basic buttons
 */
class ButtonOverviewExample {
}
ButtonOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'button-overview-example',
                template: "<button md-button>Click me!</button>",
            },] },
];
/**
 * @nocollapse
 */
ButtonOverviewExample.ctorParameters = () => [];

/**
 * \@title Exclusive selection
 */
class ButtonToggleExclusiveExample {
}
ButtonToggleExclusiveExample.decorators = [
    { type: Component, args: [{
                selector: 'button-toggle-exclusive-example',
                template: "<md-button-toggle-group #group=\"mdButtonToggleGroup\"><md-button-toggle value=\"left\"><md-icon>format_align_left</md-icon></md-button-toggle><md-button-toggle value=\"center\"><md-icon>format_align_center</md-icon></md-button-toggle><md-button-toggle value=\"right\"><md-icon>format_align_right</md-icon></md-button-toggle><md-button-toggle value=\"justify\" disabled=\"disabled\"><md-icon>format_align_justify</md-icon></md-button-toggle></md-button-toggle-group><div class=\"example-selected-value\">Selected value: {{group.value}}</div>",
                styles: [".example-selected-value { margin: 15px 0; } "],
            },] },
];
/**
 * @nocollapse
 */
ButtonToggleExclusiveExample.ctorParameters = () => [];

/**
 * \@title Basic button-toggles
 */
class ButtonToggleOverviewExample {
}
ButtonToggleOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'button-toggle-overview-example',
                template: "<md-button-toggle>Toggle me!</md-button-toggle>",
            },] },
];
/**
 * @nocollapse
 */
ButtonToggleOverviewExample.ctorParameters = () => [];

/**
 * \@title Button varieties
 */
class ButtonTypesExample {
}
ButtonTypesExample.decorators = [
    { type: Component, args: [{
                selector: 'button-types-example',
                template: "<h3>Basic Buttons</h3><div class=\"button-row\"><button md-button>Basic</button> <button md-button color=\"primary\">Primary</button> <button md-button color=\"accent\">Accent</button> <button md-button color=\"warn\">Warn</button> <button md-button disabled=\"disabled\">Disabled</button> <a md-button routerLink=\".\">Link</a></div><h3>Raised Buttons</h3><div class=\"button-row\"><button md-raised-button>Basic</button> <button md-raised-button color=\"primary\">Primary</button> <button md-raised-button color=\"accent\">Accent</button> <button md-raised-button color=\"warn\">Warn</button> <button md-raised-button disabled=\"disabled\">Disabled</button> <a md-raised-button routerLink=\".\">Link</a></div><h3>Icon Buttons</h3><div class=\"button-row\"><button md-icon-button><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <button md-icon-button color=\"primary\"><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <button md-icon-button color=\"accent\"><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <button md-icon-button color=\"warn\"><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <button md-icon-button disabled=\"disabled\"><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button></div><h3>Fab Buttons</h3><div class=\"button-row\"><button md-fab>Basic</button> <button md-fab color=\"primary\">Primary</button> <button md-fab color=\"accent\">Accent</button> <button md-fab color=\"warn\">Warn</button> <button md-fab disabled=\"disabled\">Disabled</button> <button md-fab><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <a md-fab routerLink=\".\">Link</a></div><h3>Mini Fab Buttons</h3><div class=\"button-row\"><button md-mini-fab>Basic</button> <button md-mini-fab color=\"primary\">Primary</button> <button md-mini-fab color=\"accent\">Accent</button> <button md-mini-fab color=\"warn\">Warn</button> <button md-mini-fab disabled=\"disabled\">Disabled</button> <button md-mini-fab><md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">favorite</md-icon></button> <a md-mini-fab routerLink=\".\">Link</a></div>",
                styles: [".example-button-row { display: flex; align-items: center; justify-content: space-around; } "],
            },] },
];
/**
 * @nocollapse
 */
ButtonTypesExample.ctorParameters = () => [];

/**
 * \@title Card with multiple sections
 */
class CardFancyExample {
}
CardFancyExample.decorators = [
    { type: Component, args: [{
                selector: 'card-fancy-example',
                template: "<md-card class=\"example-card\"><md-card-header><div md-card-avatar class=\"example-header-image\"></div><md-card-title>Shiba Inu</md-card-title><md-card-subtitle>Dog Breed</md-card-subtitle></md-card-header><img md-card-image src=\"assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"><md-card-content><p>The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.</p></md-card-content><md-card-actions><button md-button>LIKE</button> <button md-button>SHARE</button></md-card-actions></md-card>",
                styles: [".example-card { width: 400px; } .example-header-image { background-image: url('../../../assets/img/examples/shiba1.jpg'); background-size: cover; } "],
            },] },
];
/**
 * @nocollapse
 */
CardFancyExample.ctorParameters = () => [];

/**
 * \@title Basic cards
 */
class CardOverviewExample {
}
CardOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'card-overview-example',
                template: "<md-card>Simple card</md-card>",
            },] },
];
/**
 * @nocollapse
 */
CardOverviewExample.ctorParameters = () => [];

/**
 * \@title Basic CDK data-table
 */
class CdkTableBasicExample {
    constructor() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
    }
}
CdkTableBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-table-basic-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } /* * Styles to make the demo's cdk-table match the material design spec * https://material.io/guidelines/components/data-tables.html */ .example-table { flex: 1 1 auto; overflow: auto; max-height: 500px; } .example-header-row, .example-row { display: flex; border-bottom: 1px solid #ccc; align-items: center; height: 32px; padding: 0 8px; } .example-cell, .example-header-cell { flex: 1; } .example-header-cell { font-size: 12px; font-weight: bold; color: rgba(0, 0, 0, 0.54); } .example-cell { font-size: 13px; color: rgba(0, 0, 0, 0.87); } "],
                template: "<div class=\"example-container mat-elevation-z8\"><cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\"><ng-container cdkColumnDef=\"userId\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">ID</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.id}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"progress\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Progress</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.progress}}%</cdk-cell></ng-container><ng-container cdkColumnDef=\"userName\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Name</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\">{{row.name}}</cdk-cell></ng-container><ng-container cdkColumnDef=\"color\"><cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Color</cdk-header-cell><cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\" [style.color]=\"row.color\">{{row.color}}</cdk-cell></ng-container><cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"example-header-row\"></cdk-header-row><cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" class=\"example-row\"></cdk-row></cdk-table></div>",
            },] },
];
/**
 * @nocollapse
 */
CdkTableBasicExample.ctorParameters = () => [];
/**
 * Constants used to fill up our data base.
 */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleDatabase {
    constructor() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (let i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    addUser() {
        const /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    }
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    createNewUser() {
        const /** @type {?} */ name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    }
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource extends DataSource {
    /**
     * @param {?} _exampleDatabase
     */
    constructor(_exampleDatabase) {
        super();
        this._exampleDatabase = _exampleDatabase;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this._exampleDatabase.dataChange;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}

/**
 * \@title Configurable checkbox
 */
class CheckboxConfigurableExample {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
    }
}
CheckboxConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Checkbox configuration</h2><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</md-checkbox></section><section class=\"example-section\"><label class=\"example-margin\">Align:</label><md-radio-group [(ngModel)]=\"align\"><md-radio-button class=\"example-margin\" value=\"start\">Start</md-radio-button><md-radio-button class=\"example-margin\" value=\"end\">End</md-radio-button></md-radio-group></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-checkbox class=\"example-margin\" [checked]=\"checked\" [indeterminate]=\"indeterminate\" [align]=\"align\" [disabled]=\"disabled\">I'm a checkbox</md-checkbox></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
CheckboxConfigurableExample.ctorParameters = () => [];

/**
 * \@title Basic checkboxes
 */
class CheckboxOverviewExample {
}
CheckboxOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-overview-example',
                template: "<md-checkbox>Check me!</md-checkbox>",
            },] },
];
/**
 * @nocollapse
 */
CheckboxOverviewExample.ctorParameters = () => [];

/**
 * \@title Basic chips
 */
class ChipsOverviewExample {
}
ChipsOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-overview-example',
                template: "<md-chip-list><md-chip>One fish</md-chip><md-chip>Two fish</md-chip><md-chip color=\"primary\" selected=\"true\">Primary fish</md-chip><md-chip color=\"accent\" selected=\"true\">Accent fish</md-chip></md-chip-list>",
            },] },
];
/**
 * @nocollapse
 */
ChipsOverviewExample.ctorParameters = () => [];

/**
 * \@title Stacked chips
 */
class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
}
ChipsStackedExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-stacked-example',
                template: "<md-chip-list class=\"mat-chip-list-stacked\"><md-chip *ngFor=\"let chipColor of availableColors\" selected=\"true\" color=\"{{chipColor.color}}\">{{chipColor.name}}</md-chip></md-chip-list>",
                styles: ["md-chip { max-width: 200px; } "],
            },] },
];
/**
 * @nocollapse
 */
ChipsStackedExample.ctorParameters = () => [];

/**
 * \@title Datepicker API
 */
class DatepickerApiExample {
}
DatepickerApiExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-api-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"></md-input-container><md-datepicker #picker></md-datepicker><button md-raised-button (click)=\"picker.open()\">Open</button>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerApiExample.ctorParameters = () => [];

/**
 * \@title Datepicker Filter
 */
class DatepickerFilterExample {
    constructor() {
        this.myFilter = (d) => {
            const /** @type {?} */ day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
}
DatepickerFilterExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-filter-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepickerFilter]=\"myFilter\" [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerFilterExample.ctorParameters = () => [];

/**
 * \@title Datepicker Min Max
 */
class DatepickerMinMaxExample {
    constructor() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
}
DatepickerMinMaxExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-min-max-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [min]=\"minDate\" [max]=\"maxDate\" [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerMinMaxExample.ctorParameters = () => [];

/**
 * \@title Basic datepicker
 */
class DatepickerOverviewExample {
}
DatepickerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-overview-example',
                template: "<md-input-container><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerOverviewExample.ctorParameters = () => [];

/**
 * \@title Datepicker start date
 */
class DatepickerStartViewExample {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
}
DatepickerStartViewExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-start-view-example',
                template: "<md-input-container><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerStartViewExample.ctorParameters = () => [];

/**
 * \@title Datepicker Touch
 */
class DatepickerTouchExample {
}
DatepickerTouchExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-touch-example',
                template: "<md-input-container class=\"example-full-width\"><input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"> <button mdSuffix [mdDatepickerToggle]=\"picker\"></button></md-input-container><md-datepicker touchUi=\"true\" #picker></md-datepicker>",
                styles: ["/** No CSS for this example */ "],
            },] },
];
/**
 * @nocollapse
 */
DatepickerTouchExample.ctorParameters = () => [];

/**
 * \@title Dialog elements
 */
class DialogElementsExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
}
DialogElementsExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example',
                template: "<button md-button (click)=\"openDialog()\">Launch dialog</button>",
            },] },
];
/**
 * @nocollapse
 */
DialogElementsExample.ctorParameters = () => [
    { type: MdDialog, },
];
class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-elements-example-dialog',
                template: "<h1 md-dialog-title>Dialog with elements</h1><div md-dialog-content>This dialog showcases the title, close, content and actions elements.</div><div md-dialog-actions><button md-button md-dialog-close>Close</button></div>",
            },] },
];
/**
 * @nocollapse
 */
DialogElementsExampleDialog.ctorParameters = () => [];

/**
 * \@title Dialog Overview
 */
class DialogOverviewExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        this.dialog.open(DialogOverviewExampleDialog);
    }
}
DialogOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example',
                template: "<button md-button (click)=\"openDialog()\">Open dialog</button>",
            },] },
];
/**
 * @nocollapse
 */
DialogOverviewExample.ctorParameters = () => [
    { type: MdDialog, },
];
class DialogOverviewExampleDialog {
}
DialogOverviewExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-overview-example-dialog',
                template: "<p>Hi, I'm a dialog!</p>",
            },] },
];
/**
 * @nocollapse
 */
DialogOverviewExampleDialog.ctorParameters = () => [];

/**
 * \@title Dialog with a result
 */
class DialogResultExample {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    openDialog() {
        let /** @type {?} */ dialogRef = this.dialog.open(DialogResultExampleDialog);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }
}
DialogResultExample.decorators = [
    { type: Component, args: [{
                selector: 'dialog-result-example',
                template: "<button md-button (click)=\"openDialog()\">Launch dialog</button> You chose: {{selectedOption}}",
            },] },
];
/**
 * @nocollapse
 */
DialogResultExample.ctorParameters = () => [
    { type: MdDialog, },
];
class DialogResultExampleDialog {
    /**
     * @param {?} dialogRef
     */
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
DialogResultExampleDialog.decorators = [
    { type: Component, args: [{
                selector: 'dialog-result-example-dialog',
                template: "<h1 md-dialog-title>Dialog</h1><div md-dialog-content>What would you like to do?</div><div md-dialog-actions><button md-button md-dialog-close=\"Option 1\">Option 1</button> <button md-button md-dialog-close=\"Option 2\">Option 2</button></div>",
            },] },
];
/**
 * @nocollapse
 */
DialogResultExampleDialog.ctorParameters = () => [
    { type: MdDialogRef, },
];

/**
 * \@title Dynamic grid-list
 */
class GridListDynamicExample {
    constructor() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
}
GridListDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-dynamic-example',
                template: "<md-grid-list cols=\"4\" rowHeight=\"100px\"><md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">{{tile.text}}</md-grid-tile></md-grid-list>",
            },] },
];
/**
 * @nocollapse
 */
GridListDynamicExample.ctorParameters = () => [];

/**
 * \@title Basic grid-list
 */
class GridListOverviewExample {
}
GridListOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-overview-example',
                styles: ["md-grid-tile { background: lightblue; } "],
                template: "<md-grid-list cols=\"2\" rowHeight=\"2:1\"><md-grid-tile>1</md-grid-tile><md-grid-tile>2</md-grid-tile><md-grid-tile>3</md-grid-tile><md-grid-tile>4</md-grid-tile></md-grid-list>",
            },] },
];
/**
 * @nocollapse
 */
GridListOverviewExample.ctorParameters = () => [];

/**
 * \@title Basic icons
 */
class IconOverviewExample {
}
IconOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-overview-example',
                template: "<md-icon>home</md-icon>",
            },] },
];
/**
 * @nocollapse
 */
IconOverviewExample.ctorParameters = () => [];

/**
 * \@title SVG icons
 */
class IconSvgExample {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
}
IconSvgExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-svg-example',
                template: "<md-icon svgIcon=\"thumbs-up\"></md-icon>",
            },] },
];
/**
 * @nocollapse
 */
IconSvgExample.ctorParameters = () => [
    { type: MdIconRegistry, },
    { type: DomSanitizer, },
];

/**
 * \@title Input Clearable
 */
class InputClearableExample {
    constructor() {
        this.value = 'Clear me';
    }
}
InputClearableExample.decorators = [
    { type: Component, args: [{
                selector: 'input-clearable-example',
                template: "<md-input-container class=\"example-input-container\"><input mdInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"> <button md-button *ngIf=\"value\" mdSuffix md-icon-button aria-label=\"Clear\" (click)=\"value=''\"><md-icon>close</md-icon></button></md-input-container>",
                styles: [".example-input-container { width: 200px; } "],
            },] },
];
/**
 * @nocollapse
 */
InputClearableExample.ctorParameters = () => [];

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/**
 * \@title Input Errors
 */
class InputErrorsExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(EMAIL_REGEX)
        ]);
    }
}
InputErrorsExample.decorators = [
    { type: Component, args: [{
                selector: 'input-errors-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Email\" [formControl]=\"emailFormControl\"><md-error *ngIf=\"emailFormControl.hasError('pattern')\">Please enter a valid email address</md-error><md-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></md-error></md-input-container></form>",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputErrorsExample.ctorParameters = () => [];

/**
 * \@title Inputs in a form
 */
class InputFormExample {
}
InputFormExample.decorators = [
    { type: Component, args: [{
                selector: 'input-form-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Company (disabled)\" disabled=\"disabled\" value=\"Google\"></md-input-container><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"First name\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"Long Last Name That Will Be Truncated\"></md-input-container></td></tr></table><p><md-input-container class=\"example-full-width\"><textarea mdInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea></md-input-container><md-input-container class=\"example-full-width\"><textarea mdInput placeholder=\"Address 2\"></textarea></md-input-container></p><table class=\"example-full-width\" cellspacing=\"0\"><tr><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"City\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput placeholder=\"State\"></md-input-container></td><td><md-input-container class=\"example-full-width\"><input mdInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\"><md-hint align=\"end\">{{postalCode.value.length}} / 5</md-hint></md-input-container></td></tr></table></form>",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputFormExample.ctorParameters = () => [];

/**
 * \@title Input hints
 */
class InputHintExample {
}
InputHintExample.decorators = [
    { type: Component, args: [{
                selector: 'input-hint-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><input mdInput #message maxlength=\"256\" placeholder=\"Message\"><md-hint align=\"start\"><strong>Don't disclose personal info</strong></md-hint><md-hint align=\"end\">{{message.value.length}} / 256</md-hint></md-input-container></form>",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputHintExample.ctorParameters = () => [];

/**
 * \@title Basic Inputs
 */
class InputOverviewExample {
}
InputOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'input-overview-example',
                template: "<md-input-container><input mdInput placeholder=\"Favorite food\" value=\"Sushi\"></md-input-container>",
            },] },
];
/**
 * @nocollapse
 */
InputOverviewExample.ctorParameters = () => [];

/**
 * \@title Input Prefixes and Suffixes
 */
class InputPrefixSuffixExample {
}
InputPrefixSuffixExample.decorators = [
    { type: Component, args: [{
                selector: 'input-prefix-suffix-example',
                template: "<form class=\"example-form\"><md-input-container class=\"example-full-width\"><span mdPrefix>+1 &nbsp;</span> <input type=\"tel\" mdInput placeholder=\"Telephone\"><md-icon mdSuffix>mode_edit</md-icon></md-input-container></form>",
                styles: [".example-form { width: 500px; } .example-full-width { width: 100%; } "],
            },] },
];
/**
 * @nocollapse
 */
InputPrefixSuffixExample.ctorParameters = () => [];

/**
 * \@title Basic list
 */
class ListOverviewExample {
}
ListOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'list-overview-example',
                template: "<md-list><md-list-item>Item 1</md-list-item><md-list-item>Item 2</md-list-item><md-list-item>Item 3</md-list-item></md-list>",
            },] },
];
/**
 * @nocollapse
 */
ListOverviewExample.ctorParameters = () => [];

/**
 * \@title List with sections
 */
class ListSectionsExample {
    constructor() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
}
ListSectionsExample.decorators = [
    { type: Component, args: [{
                selector: 'list-sections-example',
                styles: [".mat-list-icon { color: rgba(0, 0, 0, 0.54); } "],
                template: "<md-list><h3 md-subheader>Folders</h3><md-list-item *ngFor=\"let folder of folders\"><md-icon md-list-icon>folder</md-icon><h4 md-line>{{folder.name}}</h4><p md-line>{{folder.updated | date}}</p></md-list-item><md-divider></md-divider><h3 md-subheader>Notes</h3><md-list-item *ngFor=\"let note of notes\"><md-icon md-list-icon>note</md-icon><h4 md-line>{{note.name}}</h4><p md-line>{{note.updated | date}}</p></md-list-item></md-list>",
            },] },
];
/**
 * @nocollapse
 */
ListSectionsExample.ctorParameters = () => [];

/**
 * \@title Menu with icons
 */
class MenuIconsExample {
}
MenuIconsExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-icons-example',
                template: "<button md-icon-button [mdMenuTriggerFor]=\"menu\"><md-icon>more_vert</md-icon></button><md-menu #menu=\"mdMenu\"><button md-menu-item><md-icon>dialpad</md-icon><span>Redial</span></button> <button md-menu-item disabled=\"disabled\"><md-icon>voicemail</md-icon><span>Check voicemail</span></button> <button md-menu-item><md-icon>notifications_off</md-icon><span>Disable alerts</span></button></md-menu>",
            },] },
];
/**
 * @nocollapse
 */
MenuIconsExample.ctorParameters = () => [];

/**
 * \@title Basic menu
 */
class MenuOverviewExample {
}
MenuOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-overview-example',
                template: "<button md-button [mdMenuTriggerFor]=\"menu\">Menu</button><md-menu #menu=\"mdMenu\"><button md-menu-item>Item 1</button> <button md-menu-item>Item 2</button></md-menu>",
            },] },
];
/**
 * @nocollapse
 */
MenuOverviewExample.ctorParameters = () => [];

/**
 * \@title Configurable paginator
 */
class PaginatorConfigurableExample {
    constructor() {
        // MdPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
}
PaginatorConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'paginator-configurable-example',
                template: "<md-input-container>List length: <input mdInput [(ngModel)]=\"length\"></md-input-container><md-input-container>Page size: <input mdInput [(ngModel)]=\"pageSize\"></md-input-container><md-input-container>Page size options: <input mdInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"></md-input-container><md-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\"></md-paginator><div *ngIf=\"pageEvent\"><h5>Page Change Event Properties</h5><div>List length: {{pageEvent.length}}</div><div>Page size: {{pageEvent.pageSize}}</div><div>Page index: {{pageEvent.pageIndex}}</div></div>",
            },] },
];
/**
 * @nocollapse
 */
PaginatorConfigurableExample.ctorParameters = () => [];

/**
 * \@title Paginator
 */
class PaginatorOverviewExample {
}
PaginatorOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'paginator-overview-example',
                template: "<md-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator>",
            },] },
];
/**
 * @nocollapse
 */
PaginatorOverviewExample.ctorParameters = () => [];

/**
 * \@title Configurable progress-bar
 */
class ProgressBarConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
}
ProgressBarConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Progress bar configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><md-radio-group [(ngModel)]=\"mode\"><md-radio-button class=\"example-margin\" value=\"determinate\">Determinate</md-radio-button><md-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</md-radio-button><md-radio-button class=\"example-margin\" value=\"buffer\">Buffer</md-radio-button><md-radio-button class=\"example-margin\" value=\"query\">Query</md-radio-button></md-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\"><label class=\"example-margin\">Progress:</label><md-slider class=\"example-margin\" [(ngModel)]=\"value\"></md-slider></section><section class=\"example-section\" *ngIf=\"mode == 'buffer'\"><label class=\"example-margin\">Buffer:</label><md-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></md-slider></section></md-card-content></md-card><md-card><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\"></md-progress-bar></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
ProgressBarConfigurableExample.ctorParameters = () => [];

/**
 * \@title Basic progress-bar
 */
class ProgressBarOverviewExample {
}
ProgressBarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-bar-overview-example',
                template: "<md-progress-bar mode=\"indeterminate\"></md-progress-bar>",
            },] },
];
/**
 * @nocollapse
 */
ProgressBarOverviewExample.ctorParameters = () => [];

/**
 * \@title Configurable progress spinner
 */
class ProgressSpinnerConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
}
ProgressSpinnerConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Progress spinner configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><label class=\"example-margin\">Mode:</label><md-radio-group [(ngModel)]=\"mode\"><md-radio-button class=\"example-margin\" value=\"determinate\">Determinate</md-radio-button><md-radio-button class=\"example-margin\" value=\"indeterminate\">Indeterminate</md-radio-button></md-radio-group></section><section class=\"example-section\" *ngIf=\"mode == 'determinate'\"><label class=\"example-margin\">Progress:</label><md-slider class=\"example-margin\" [(ngModel)]=\"value\"></md-slider></section></md-card-content></md-card><md-card><md-card-content><h2 class=\"example-h2\">Result</h2><md-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></md-progress-spinner></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
ProgressSpinnerConfigurableExample.ctorParameters = () => [];

/**
 * \@title Basic progress-spinner
 */
class ProgressSpinnerOverviewExample {
}
ProgressSpinnerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-overview-example',
                template: "<md-spinner></md-spinner>",
            },] },
];
/**
 * @nocollapse
 */
ProgressSpinnerOverviewExample.ctorParameters = () => [];

/**
 * \@title Radios with ngModel
 */
class RadioNgModelExample {
    constructor() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
}
RadioNgModelExample.decorators = [
    { type: Component, args: [{
                selector: 'radio-ng-model-example',
                template: "<md-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\"><md-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">{{season}}</md-radio-button></md-radio-group><div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>",
                styles: [".example-radio-group { display: inline-flex; flex-direction: column; } .example-radio-button { margin: 5px; } .example-selected-value { margin: 15px 0; } "],
            },] },
];
/**
 * @nocollapse
 */
RadioNgModelExample.ctorParameters = () => [];

/**
 * \@title Basic radios
 */
class RadioOverviewExample {
}
RadioOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'radio-overview-example',
                template: "<md-radio-group><md-radio-button value=\"1\">Option 1</md-radio-button><md-radio-button value=\"2\">Option 2</md-radio-button></md-radio-group>",
            },] },
];
/**
 * @nocollapse
 */
RadioOverviewExample.ctorParameters = () => [];

/**
 * \@title Select in a form
 */
class SelectFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
}
SelectFormExample.decorators = [
    { type: Component, args: [{
                selector: 'select-form-example',
                template: "<form><md-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\"><md-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{food.viewValue}}</md-option></md-select><p>Selected value: {{selectedValue}}</p></form>",
            },] },
];
/**
 * @nocollapse
 */
SelectFormExample.ctorParameters = () => [];

/**
 * \@title Basic select
 */
class SelectOverviewExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
}
SelectOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'select-overview-example',
                template: "<md-select placeholder=\"Favorite food\"><md-option *ngFor=\"let food of foods\" [value]=\"food.value\">{{ food.viewValue }}</md-option></md-select>",
            },] },
];
/**
 * @nocollapse
 */
SelectOverviewExample.ctorParameters = () => [];

/**
 * \@title Sidenav with a FAB
 */
class SidenavFabExample {
}
SidenavFabExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-fab-example',
                template: "<md-sidenav-container class=\"example-sidenav-fab-container\"><md-sidenav #sidenav mode=\"side\" opened=\"true\"><button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><md-icon>add</md-icon></button><div class=\"example-scrolling-content\">Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.</div></md-sidenav><button md-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\"><md-icon>add</md-icon></button><div class=\"example-scrolling-content\">Lorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.</div></md-sidenav-container>",
                styles: [".example-sidenav-fab-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-fab-container md-sidenav { max-width: 200px; } .example-sidenav-fab-container .mat-sidenav-content, .example-sidenav-fab-container md-sidenav { display: flex; overflow: visible; } .example-scrolling-content { overflow: auto; } .example-fab { position: absolute; right: 20px; bottom: 10px; } "],
                encapsulation: ViewEncapsulation.None,
            },] },
];
/**
 * @nocollapse
 */
SidenavFabExample.ctorParameters = () => [];

/**
 * \@title Basic sidenav
 */
class SidenavOverviewExample {
}
SidenavOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-overview-example',
                template: "<md-sidenav-container class=\"example-container\"><md-sidenav #sidenav class=\"example-sidenav\">Jolly good!</md-sidenav><div class=\"example-sidenav-content\"><button type=\"button\" md-button (click)=\"sidenav.open()\">Open sidenav</button></div></md-sidenav-container>",
                styles: [".example-container { width: 500px; height: 300px; border: 1px solid rgba(0, 0, 0, 0.5); } .example-sidenav-content { display: flex; height: 100%; align-items: center; justify-content: center; } .example-sidenav { padding: 20px; } "],
            },] },
];
/**
 * @nocollapse
 */
SidenavOverviewExample.ctorParameters = () => [];

/**
 * \@title Configurable slide-toggle
 */
class SlideToggleConfigurableExample {
    constructor() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
}
SlideToggleConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><label class=\"example-margin\">Color:</label><md-radio-group [(ngModel)]=\"color\"><md-radio-button class=\"example-margin\" value=\"primary\">Primary</md-radio-button><md-radio-button class=\"example-margin\" value=\"accent\">Accent</md-radio-button><md-radio-button class=\"example-margin\" value=\"warn\">Warn</md-radio-button></md-radio-group></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><section class=\"example-section\"><md-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">Slide me!</md-slide-toggle></section></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
SlideToggleConfigurableExample.ctorParameters = () => [];

/**
 * \@title Slide-toggle with forms
 */
class SlideToggleFormsExample {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue]
        });
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    onFormSubmit(formValue) {
        alert(JSON.stringify(formValue, null, 2));
    }
}
SlideToggleFormsExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-forms-example',
                template: "<p>Slide Toggle using a simple NgModel.</p><md-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{ isChecked }}</md-slide-toggle><p>Slide Toggle inside of a Template-driven form</p><form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit(form.value)\" ngNativeValidate><md-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</md-slide-toggle><md-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</md-slide-toggle><button md-raised-button type=\"submit\">Save Settings</button></form><p>Slide Toggle inside of a Reactive form</p><form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit(formGroup.value)\" ngNativeValidate><md-slide-toggle formControlName=\"enableWifi\">Enable Wifi</md-slide-toggle><md-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</md-slide-toggle><p>Form Group Status: {{ formGroup.status}}</p><button md-rasied-button type=\"submit\">Save Settings</button></form>",
                styles: [".example-form md-slide-toggle { margin: 8px 0; display: block; } "],
            },] },
];
/**
 * @nocollapse
 */
SlideToggleFormsExample.ctorParameters = () => [
    { type: FormBuilder, },
];

/**
 * \@title Basic slide-toggles
 */
class SlideToggleOverviewExample {
}
SlideToggleOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-overview-example',
                template: "<md-slide-toggle>Slide me!</md-slide-toggle>",
            },] },
];
/**
 * @nocollapse
 */
SlideToggleOverviewExample.ctorParameters = () => [];

/**
 * \@title Configurable slider
 */
class SliderConfigurableExample {
    constructor() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    /**
     * @return {?}
     */
    get tickInterval() {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set tickInterval(v) {
        this._tickInterval = Number(v);
    }
}
SliderConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-configurable-example',
                template: "<md-card><md-card-content><h2 class=\"example-h2\">Slider configuration</h2><section class=\"example-section\"><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\"></md-input-container><md-input-container class=\"example-margin\"><input mdInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\"></md-input-container></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">Auto ticks</md-checkbox><md-input-container class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\"><input mdInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\"></md-input-container></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</md-checkbox><md-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</md-checkbox></section><section class=\"example-section\"><md-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</md-checkbox></section></md-card-content></md-card><md-card class=\"result\"><md-card-content><h2 class=\"example-h2\">Result</h2><md-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumb-label]=\"thumbLabel\" [tick-interval]=\"tickInterval\" [value]=\"value\" [vertical]=\"vertical\"></md-slider></md-card-content></md-card>",
                styles: [".example-h2 { margin: 10px; } .example-section { display: flex; align-content: center; align-items: center; height: 60px; } .example-margin { margin: 10px; } .mat-slider-horizontal { width: 300px; } .mat-slider-vertical { height: 300px; } "],
                encapsulation: ViewEncapsulation.None,
            },] },
];
/**
 * @nocollapse
 */
SliderConfigurableExample.ctorParameters = () => [];

/**
 * \@title Basic slider
 */
class SliderOverviewExample {
}
SliderOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'slider-overview-example',
                template: "<md-slider></md-slider>",
                styles: ["/** No CSS for this example */ md-slider { width: 300px; } "],
            },] },
];
/**
 * @nocollapse
 */
SliderOverviewExample.ctorParameters = () => [];

/**
 * \@title Snack-bar with a custom component
 */
class SnackBarComponentExample {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    }
}
SnackBarComponentExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example',
                template: "<button md-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">Pizza party</button>",
            },] },
];
/**
 * @nocollapse
 */
SnackBarComponentExample.ctorParameters = () => [
    { type: MdSnackBar, },
];
class PizzaPartyComponent {
}
PizzaPartyComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"example-pizza-party\">🍕🍕🍕🍕🍕 Pizza party!!! 🍕🍕🍕🍕🍕</span>",
                styles: [".example-pizza-party { color: hotpink; } "],
            },] },
];
/**
 * @nocollapse
 */
PizzaPartyComponent.ctorParameters = () => [];

/**
 * \@title Basic snack-bar
 */
class SnackBarOverviewExample {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
SnackBarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-overview-example',
                template: "<md-input-container><input mdInput value=\"Disco party!\" placeholder=\"Message\" #message></md-input-container><md-input-container><input mdInput value=\"Dance\" placeholder=\"Action\" #action></md-input-container><button md-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>",
            },] },
];
/**
 * @nocollapse
 */
SnackBarOverviewExample.ctorParameters = () => [
    { type: MdSnackBar, },
];

/**
 * \@title Sorting overview
 */
class SortOverviewExample {
    constructor() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4' },
        ];
        this.sortedData = this.desserts.slice();
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    sortData(sort) {
        const /** @type {?} */ data = this.desserts.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            let /** @type {?} */ isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(+a.calories, +b.calories, isAsc);
                case 'fat': return compare(+a.fat, +b.fat, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                default: return 0;
            }
        });
    }
}
SortOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'sort-overview-example',
                template: "<table mdSort (mdSortChange)=\"sortData($event)\"><tr><th md-sort-header=\"name\">Dessert (100g)</th><th md-sort-header=\"calories\">Calories</th><th md-sort-header=\"fat\">Fat (g)</th><th md-sort-header=\"carbs\">Carbs (g)</th><th md-sort-header=\"protein\">Protein (g)</th></tr><tr *ngFor=\"let dessert of sortedData\"><td>{{dessert.name}}</td><td>{{dessert.calories}}</td><td>{{dessert.fat}}</td><td>{{dessert.carbs}}</td><td>{{dessert.protein}}</td></tr></table>",
                styles: [".mat-sort-header-container { align-items: center; } "],
            },] },
];
/**
 * @nocollapse
 */
SortOverviewExample.ctorParameters = () => [];
/**
 * @param {?} a
 * @param {?} b
 * @param {?} isAsc
 * @return {?}
 */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**
 * \@title Basic table
 */
class TableBasicExample {
    constructor() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$1();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new ExampleDataSource$1(this.exampleDatabase);
    }
}
TableBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'table-basic-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; max-height: 500px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableBasicExample.ctorParameters = () => [];
/**
 * Constants used to fill up our data base.
 */
const COLORS$1 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES$1 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleDatabase$1 {
    constructor() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (let i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    addUser() {
        const /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    }
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    createNewUser() {
        const /** @type {?} */ name = NAMES$1[Math.round(Math.random() * (NAMES$1.length - 1))] + ' ' +
            NAMES$1[Math.round(Math.random() * (NAMES$1.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$1[Math.round(Math.random() * (COLORS$1.length - 1))]
        };
    }
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$1 extends DataSource {
    /**
     * @param {?} _exampleDatabase
     */
    constructor(_exampleDatabase) {
        super();
        this._exampleDatabase = _exampleDatabase;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this._exampleDatabase.dataChange;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}

/**
 * \@title Table with filtering
 */
class TableFilteringExample {
    constructor() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$2();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new ExampleDataSource$2(this.exampleDatabase);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
}
TableFilteringExample.decorators = [
    { type: Component, args: [{
                selector: 'table-filtering-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .example-header { min-height: 64px; display: flex; align-items: baseline; padding: 8px 24px 0; font-size: 20px; justify-content: space-between; } .mat-input-container { font-size: 14px; flex-grow: 1; margin-left: 32px; } .mat-table { overflow: auto; max-height: 500px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\"><md-input-container floatPlaceholder=\"never\"><input mdInput #filter placeholder=\"Filter users\"></md-input-container></div><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableFilteringExample.ctorParameters = () => [];
TableFilteringExample.propDecorators = {
    'filter': [{ type: ViewChild, args: ['filter',] },],
};
/**
 * Constants used to fill up our data base.
 */
const COLORS$2 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES$2 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleDatabase$2 {
    constructor() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (let i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    addUser() {
        const /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    }
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    createNewUser() {
        const /** @type {?} */ name = NAMES$2[Math.round(Math.random() * (NAMES$2.length - 1))] + ' ' +
            NAMES$2[Math.round(Math.random() * (NAMES$2.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$2[Math.round(Math.random() * (COLORS$2.length - 1))]
        };
    }
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$2 extends DataSource {
    /**
     * @param {?} _exampleDatabase
     */
    constructor(_exampleDatabase) {
        super();
        this._exampleDatabase = _exampleDatabase;
        this._filterChange = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    get filter() { return this._filterChange.value; }
    /**
     * @param {?} filter
     * @return {?}
     */
    set filter(filter) { this._filterChange.next(filter); }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        const /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return Observable.merge(...displayDataChanges).map(() => {
            return this._exampleDatabase.data.slice().filter((item) => {
                let /** @type {?} */ searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) != -1;
            });
        });
    }
    /**
     * @return {?}
     */
    disconnect() { }
}

/**
 * \@title Feature-rich data table
 */
class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$3();
        this.selection = new SelectionModel(true, []);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new ExampleDataSource$3(this.exampleDatabase, this.paginator, this.sort);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
    /**
     * @return {?}
     */
    isAllSelected() {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.exampleDatabase.data.length;
        }
    }
    /**
     * @return {?}
     */
    masterToggle() {
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
        }
        else {
            this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
        }
    }
}
TableOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'table-overview-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 56px; max-height: 56px; display: flex; align-items: center; padding: 8px 24px 0; font-size: 20px; justify-content: space-between; border-bottom: 1px solid transparent; } .mat-input-container { font-size: 14px; flex-grow: 1; margin-left: 32px; margin-top: 8px; } .example-no-results { display: flex; justify-content: center; padding: 24px; font-size: 12px; font-style: italic; } /** Selection styles */ .example-selection-header { font-size: 18px; background: rgba(255, 64, 129, 0.3); border-bottom: 1px solid #d696ac; } .mat-column-select { max-width: 54px; } .mat-row:hover, .example-selected-row { background: #f5f5f5; } .mat-row:active, .mat-row.example-selected-row { background: #eaeaea; } .mat-table { overflow: auto; max-height: 500px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\"><md-input-container floatPlaceholder=\"never\"><input mdInput #filter placeholder=\"Filter users\"></md-input-container></div><div class=\"example-header example-selection-header\" *ngIf=\"!selection.isEmpty()\">{{selection.selected.length}} {{selection.selected.length == 1 ? 'user' : 'users'}} selected</div><md-table #table [dataSource]=\"dataSource\" mdSort><ng-container cdkColumnDef=\"select\"><md-header-cell *cdkHeaderCellDef><md-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\"></md-checkbox></md-header-cell><md-cell *cdkCellDef=\"let row\"><md-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row.id) : null\" [checked]=\"selection.isSelected(row.id)\"></md-checkbox></md-cell></ng-container><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef md-sort-header>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef md-sort-header>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef md-sort-header>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef md-sort-header>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\" [class.example-selected-row]=\"selection.isSelected(row.id)\" (click)=\"selection.toggle(row.id)\"></md-row></md-table><div class=\"example-no-results\" [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">No users found matching filter.</div><md-paginator #paginator [length]=\"dataSource.filteredData.length\" [pageIndex]=\"0\" [pageSize]=\"25\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator></div>",
            },] },
];
/**
 * @nocollapse
 */
TableOverviewExample.ctorParameters = () => [];
TableOverviewExample.propDecorators = {
    'paginator': [{ type: ViewChild, args: [MdPaginator,] },],
    'sort': [{ type: ViewChild, args: [MdSort,] },],
    'filter': [{ type: ViewChild, args: ['filter',] },],
};
/**
 * Constants used to fill up our data base.
 */
const COLORS$3 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES$3 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleDatabase$3 {
    constructor() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (let i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    addUser() {
        const /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    }
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    createNewUser() {
        const /** @type {?} */ name = NAMES$3[Math.round(Math.random() * (NAMES$3.length - 1))] + ' ' +
            NAMES$3[Math.round(Math.random() * (NAMES$3.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$3[Math.round(Math.random() * (COLORS$3.length - 1))]
        };
    }
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$3 extends DataSource {
    /**
     * @param {?} _exampleDatabase
     * @param {?} _paginator
     * @param {?} _sort
     */
    constructor(_exampleDatabase, _paginator, _sort) {
        super();
        this._exampleDatabase = _exampleDatabase;
        this._paginator = _paginator;
        this._sort = _sort;
        this._filterChange = new BehaviorSubject('');
        this.filteredData = [];
        this.renderedData = [];
    }
    /**
     * @return {?}
     */
    get filter() { return this._filterChange.value; }
    /**
     * @param {?} filter
     * @return {?}
     */
    set filter(filter) { this._filterChange.next(filter); }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.mdSortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return Observable.merge(...displayDataChanges).map(() => {
            // Filter data
            this.filteredData = this._exampleDatabase.data.slice().filter((item) => {
                let /** @type {?} */ searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            const /** @type {?} */ sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const /** @type {?} */ startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
            return this.renderedData;
        });
    }
    /**
     * @return {?}
     */
    disconnect() { }
    /**
     * Returns a sorted copy of the database data.
     * @param {?} data
     * @return {?}
     */
    sortData(data) {
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort((a, b) => {
            let /** @type {?} */ propertyA = '';
            let /** @type {?} */ propertyB = '';
            switch (this._sort.active) {
                case 'userId':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'userName':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'progress':
                    [propertyA, propertyB] = [a.progress, b.progress];
                    break;
                case 'color':
                    [propertyA, propertyB] = [a.color, b.color];
                    break;
            }
            let /** @type {?} */ valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            let /** @type {?} */ valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
        });
    }
}

/**
 * \@title Table with pagination
 */
class TablePaginationExample {
    constructor() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$4();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new ExampleDataSource$4(this.exampleDatabase, this.paginator);
    }
}
TablePaginationExample.decorators = [
    { type: Component, args: [{
                selector: 'table-pagination-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; max-height: 500px; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><md-table #table [dataSource]=\"dataSource\"><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table><md-paginator #paginator [length]=\"exampleDatabase.data.length\" [pageIndex]=\"0\" [pageSize]=\"25\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></md-paginator></div>",
            },] },
];
/**
 * @nocollapse
 */
TablePaginationExample.ctorParameters = () => [];
TablePaginationExample.propDecorators = {
    'paginator': [{ type: ViewChild, args: [MdPaginator,] },],
};
/**
 * Constants used to fill up our data base.
 */
const COLORS$4 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES$4 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleDatabase$4 {
    constructor() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (let i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    addUser() {
        const /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    }
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    createNewUser() {
        const /** @type {?} */ name = NAMES$4[Math.round(Math.random() * (NAMES$4.length - 1))] + ' ' +
            NAMES$4[Math.round(Math.random() * (NAMES$4.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$4[Math.round(Math.random() * (COLORS$4.length - 1))]
        };
    }
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$4 extends DataSource {
    /**
     * @param {?} _exampleDatabase
     * @param {?} _paginator
     */
    constructor(_exampleDatabase, _paginator) {
        super();
        this._exampleDatabase = _exampleDatabase;
        this._paginator = _paginator;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        const /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
        ];
        return Observable.merge(...displayDataChanges).map(() => {
            const /** @type {?} */ data = this._exampleDatabase.data.slice();
            // Grab the page's slice of data.
            const /** @type {?} */ startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        });
    }
    /**
     * @return {?}
     */
    disconnect() { }
}

/**
 * \@title Table with sorting
 */
class TableSortingExample {
    constructor() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase$5();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new ExampleDataSource$5(this.exampleDatabase, this.sort);
    }
}
TableSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sorting-example',
                styles: ["/* Structure */ .example-container { display: flex; flex-direction: column; min-width: 300px; } .example-header { min-height: 64px; display: flex; align-items: center; padding-left: 24px; font-size: 20px; } .mat-table { overflow: auto; max-height: 500px; } .mat-header-cell .mat-sort-header-sorted { color: black; } "],
                template: "<div class=\"example-container mat-elevation-z8\"><md-table #table [dataSource]=\"dataSource\" mdSort><ng-container cdkColumnDef=\"userId\"><md-header-cell *cdkHeaderCellDef md-sort-header>ID</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.id}}</md-cell></ng-container><ng-container cdkColumnDef=\"progress\"><md-header-cell *cdkHeaderCellDef md-sort-header>Progress</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.progress}}%</md-cell></ng-container><ng-container cdkColumnDef=\"userName\"><md-header-cell *cdkHeaderCellDef md-sort-header>Name</md-header-cell><md-cell *cdkCellDef=\"let row\">{{row.name}}</md-cell></ng-container><ng-container cdkColumnDef=\"color\"><md-header-cell *cdkHeaderCellDef md-sort-header>Color</md-header-cell><md-cell *cdkCellDef=\"let row\" [style.color]=\"row.color\">{{row.color}}</md-cell></ng-container><md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row><md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row></md-table></div>",
            },] },
];
/**
 * @nocollapse
 */
TableSortingExample.ctorParameters = () => [];
TableSortingExample.propDecorators = {
    'sort': [{ type: ViewChild, args: [MdSort,] },],
};
/**
 * Constants used to fill up our data base.
 */
const COLORS$5 = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES$5 = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleDatabase$5 {
    constructor() {
        /**
         * Stream that emits whenever the data has been modified.
         */
        this.dataChange = new BehaviorSubject([]);
        // Fill up the database with 100 users.
        for (let i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    /**
     * @return {?}
     */
    get data() { return this.dataChange.value; }
    /**
     * Adds a new user to the database.
     * @return {?}
     */
    addUser() {
        const /** @type {?} */ copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    }
    /**
     * Builds and returns a new User.
     * @return {?}
     */
    createNewUser() {
        const /** @type {?} */ name = NAMES$5[Math.round(Math.random() * (NAMES$5.length - 1))] + ' ' +
            NAMES$5[Math.round(Math.random() * (NAMES$5.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS$5[Math.round(Math.random() * (COLORS$5.length - 1))]
        };
    }
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$5 extends DataSource {
    /**
     * @param {?} _exampleDatabase
     * @param {?} _sort
     */
    constructor(_exampleDatabase, _sort) {
        super();
        this._exampleDatabase = _exampleDatabase;
        this._sort = _sort;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        const /** @type {?} */ displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.mdSortChange,
        ];
        return Observable.merge(...displayDataChanges).map(() => {
            return this.getSortedData();
        });
    }
    /**
     * @return {?}
     */
    disconnect() { }
    /**
     * Returns a sorted copy of the database data.
     * @return {?}
     */
    getSortedData() {
        const /** @type {?} */ data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort((a, b) => {
            let /** @type {?} */ propertyA = '';
            let /** @type {?} */ propertyB = '';
            switch (this._sort.active) {
                case 'userId':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'userName':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'progress':
                    [propertyA, propertyB] = [a.progress, b.progress];
                    break;
                case 'color':
                    [propertyA, propertyB] = [a.color, b.color];
                    break;
            }
            let /** @type {?} */ valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            let /** @type {?} */ valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
        });
    }
}

/**
 * \@title Basic tabs
 */
class TabsOverviewExample {
}
TabsOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tabs-overview-example',
                template: "<md-tab-group><md-tab label=\"Tab 1\">Content 1</md-tab><md-tab label=\"Tab 2\">Content 2</md-tab></md-tab-group>",
            },] },
];
/**
 * @nocollapse
 */
TabsOverviewExample.ctorParameters = () => [];

/**
 * \@title Coming soon!
 */
class TabsTemplateLabelExample {
}
TabsTemplateLabelExample.decorators = [
    { type: Component, args: [{
                selector: 'tabs-template-label-example',
                template: "More examples coming soon!",
            },] },
];
/**
 * @nocollapse
 */
TabsTemplateLabelExample.ctorParameters = () => [];

/**
 * \@title Multi-row toolbar
 */
class ToolbarMultirowExample {
}
ToolbarMultirowExample.decorators = [
    { type: Component, args: [{
                selector: 'toolbar-multirow-example',
                template: "<md-toolbar color=\"primary\"><span>Custom Toolbar</span><md-toolbar-row><span>Second Line</span> <span class=\"example-spacer\"></span><md-icon class=\"example-icon\">verified_user</md-icon></md-toolbar-row><md-toolbar-row><span>Third Line</span> <span class=\"example-spacer\"></span><md-icon class=\"example-icon\">favorite</md-icon><md-icon class=\"example-icon\">delete</md-icon></md-toolbar-row></md-toolbar>",
                styles: [".example-icon { padding: 0 14px; } .example-spacer { flex: 1 1 auto; } "],
            },] },
];
/**
 * @nocollapse
 */
ToolbarMultirowExample.ctorParameters = () => [];

/**
 * \@title Basic toolbar
 */
class ToolbarOverviewExample {
}
ToolbarOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'toolbar-overview-example',
                template: "<md-toolbar>My App</md-toolbar>",
            },] },
];
/**
 * @nocollapse
 */
ToolbarOverviewExample.ctorParameters = () => [];

/**
 * \@title Basic tooltip
 */
class TooltipOverviewExample {
}
TooltipOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-overview-example',
                template: "<span mdTooltip=\"Tooltip!\">I have a tooltip</span>",
            },] },
];
/**
 * @nocollapse
 */
TooltipOverviewExample.ctorParameters = () => [];

/**
 * \@title Tooltip with custom position
 */
class TooltipPositionExample {
    constructor() {
        this.position = 'before';
    }
}
TooltipPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-position-example',
                template: "<div class=\"example-tooltip-host\" mdTooltip=\"Tooltip!\" [mdTooltipPosition]=\"position\"><span>Show tooltip</span><md-select class=\"example-select\" [(ngModel)]=\"position\"><md-option value=\"before\">Before</md-option><md-option value=\"after\">After</md-option><md-option value=\"above\">Above</md-option><md-option value=\"below\">Below</md-option><md-option value=\"left\">Left</md-option><md-option value=\"right\">Right</md-option></md-select></div>",
                styles: [".example-tooltip-host { display: inline-flex; align-items: center; margin: 50px; } .example-select { margin: 0 10px; } "],
            },] },
];
/**
 * @nocollapse
 */
TooltipPositionExample.ctorParameters = () => [];

/* tslint:disable */
/** DO NOT MANUALLY EDIT THIS FILE, IT IS GENERATED VIA GULP 'build-examples-module' */
const EXAMPLE_COMPONENTS = {
    'autocomplete-overview': {
        title: 'Basic autocomplete',
        component: AutocompleteOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-overview': {
        title: 'Basic buttons',
        component: ButtonOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-toggle-exclusive': {
        title: 'Exclusive selection',
        component: ButtonToggleExclusiveExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-toggle-overview': {
        title: 'Basic button-toggles',
        component: ButtonToggleOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'button-types': {
        title: 'Button varieties',
        component: ButtonTypesExample,
        additionalFiles: null,
        selectorName: null
    },
    'card-fancy': {
        title: 'Card with multiple sections',
        component: CardFancyExample,
        additionalFiles: null,
        selectorName: null
    },
    'card-overview': {
        title: 'Basic cards',
        component: CardOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'cdk-table-basic': {
        title: 'Basic CDK data-table',
        component: CdkTableBasicExample,
        additionalFiles: null,
        selectorName: null
    },
    'checkbox-configurable': {
        title: 'Configurable checkbox',
        component: CheckboxConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'checkbox-overview': {
        title: 'Basic checkboxes',
        component: CheckboxOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'chips-overview': {
        title: 'Basic chips',
        component: ChipsOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'chips-stacked': {
        title: 'Stacked chips',
        component: ChipsStackedExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-api': {
        title: 'Datepicker API',
        component: DatepickerApiExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-filter': {
        title: 'Datepicker Filter',
        component: DatepickerFilterExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-min-max': {
        title: 'Datepicker Min Max',
        component: DatepickerMinMaxExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-overview': {
        title: 'Basic datepicker',
        component: DatepickerOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-start-view': {
        title: 'Datepicker start date',
        component: DatepickerStartViewExample,
        additionalFiles: null,
        selectorName: null
    },
    'datepicker-touch': {
        title: 'Datepicker Touch',
        component: DatepickerTouchExample,
        additionalFiles: null,
        selectorName: null
    },
    'dialog-elements': {
        title: 'Dialog elements',
        component: DialogElementsExample,
        additionalFiles: ["dialog-elements-example-dialog.html"],
        selectorName: 'DialogElementsExample, DialogElementsExampleDialog'
    },
    'dialog-overview': {
        title: 'Dialog Overview',
        component: DialogOverviewExample,
        additionalFiles: ["dialog-overview-example-dialog.html"],
        selectorName: 'DialogOverviewExample, DialogOverviewExampleDialog'
    },
    'dialog-result': {
        title: 'Dialog with a result',
        component: DialogResultExample,
        additionalFiles: ["dialog-result-example-dialog.html"],
        selectorName: 'DialogResultExample, DialogResultExampleDialog'
    },
    'grid-list-dynamic': {
        title: 'Dynamic grid-list',
        component: GridListDynamicExample,
        additionalFiles: null,
        selectorName: null
    },
    'grid-list-overview': {
        title: 'Basic grid-list',
        component: GridListOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'icon-overview': {
        title: 'Basic icons',
        component: IconOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'icon-svg': {
        title: 'SVG icons',
        component: IconSvgExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-clearable': {
        title: 'Input Clearable',
        component: InputClearableExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-errors': {
        title: 'Input Errors',
        component: InputErrorsExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-form': {
        title: 'Inputs in a form',
        component: InputFormExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-hint': {
        title: 'Input hints',
        component: InputHintExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-overview': {
        title: 'Basic Inputs',
        component: InputOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'input-prefix-suffix': {
        title: 'Input Prefixes and Suffixes',
        component: InputPrefixSuffixExample,
        additionalFiles: null,
        selectorName: null
    },
    'list-overview': {
        title: 'Basic list',
        component: ListOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'list-sections': {
        title: 'List with sections',
        component: ListSectionsExample,
        additionalFiles: null,
        selectorName: null
    },
    'menu-icons': {
        title: 'Menu with icons',
        component: MenuIconsExample,
        additionalFiles: null,
        selectorName: null
    },
    'menu-overview': {
        title: 'Basic menu',
        component: MenuOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'paginator-configurable': {
        title: 'Configurable paginator',
        component: PaginatorConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'paginator-overview': {
        title: 'Paginator',
        component: PaginatorOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-configurable': {
        title: 'Configurable progress-bar',
        component: ProgressBarConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-bar-overview': {
        title: 'Basic progress-bar',
        component: ProgressBarOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-spinner-configurable': {
        title: 'Configurable progress spinner',
        component: ProgressSpinnerConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'progress-spinner-overview': {
        title: 'Basic progress-spinner',
        component: ProgressSpinnerOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'radio-ng-model': {
        title: 'Radios with ngModel',
        component: RadioNgModelExample,
        additionalFiles: null,
        selectorName: null
    },
    'radio-overview': {
        title: 'Basic radios',
        component: RadioOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-form': {
        title: 'Select in a form',
        component: SelectFormExample,
        additionalFiles: null,
        selectorName: null
    },
    'select-overview': {
        title: 'Basic select',
        component: SelectOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'sidenav-fab': {
        title: 'Sidenav with a FAB',
        component: SidenavFabExample,
        additionalFiles: null,
        selectorName: null
    },
    'sidenav-overview': {
        title: 'Basic sidenav',
        component: SidenavOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-configurable': {
        title: 'Configurable slide-toggle',
        component: SlideToggleConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-forms': {
        title: 'Slide-toggle with forms',
        component: SlideToggleFormsExample,
        additionalFiles: null,
        selectorName: null
    },
    'slide-toggle-overview': {
        title: 'Basic slide-toggles',
        component: SlideToggleOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'slider-configurable': {
        title: 'Configurable slider',
        component: SliderConfigurableExample,
        additionalFiles: null,
        selectorName: null
    },
    'slider-overview': {
        title: 'Basic slider',
        component: SliderOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'snack-bar-component': {
        title: 'Snack-bar with a custom component',
        component: SnackBarComponentExample,
        additionalFiles: ["snack-bar-component-example-snack.html"],
        selectorName: 'SnackBarComponentExample, PizzaPartyComponent'
    },
    'snack-bar-overview': {
        title: 'Basic snack-bar',
        component: SnackBarOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'sort-overview': {
        title: 'Sorting overview',
        component: SortOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-basic': {
        title: 'Basic table',
        component: TableBasicExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-filtering': {
        title: 'Table with filtering',
        component: TableFilteringExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-overview': {
        title: 'Feature-rich data table',
        component: TableOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-pagination': {
        title: 'Table with pagination',
        component: TablePaginationExample,
        additionalFiles: null,
        selectorName: null
    },
    'table-sorting': {
        title: 'Table with sorting',
        component: TableSortingExample,
        additionalFiles: null,
        selectorName: null
    },
    'tabs-overview': {
        title: 'Basic tabs',
        component: TabsOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tabs-template-label': {
        title: 'Coming soon!',
        component: TabsTemplateLabelExample,
        additionalFiles: null,
        selectorName: null
    },
    'toolbar-multirow': {
        title: 'Multi-row toolbar',
        component: ToolbarMultirowExample,
        additionalFiles: null,
        selectorName: null
    },
    'toolbar-overview': {
        title: 'Basic toolbar',
        component: ToolbarOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tooltip-overview': {
        title: 'Basic tooltip',
        component: TooltipOverviewExample,
        additionalFiles: null,
        selectorName: null
    },
    'tooltip-position': {
        title: 'Tooltip with custom position',
        component: TooltipPositionExample,
        additionalFiles: null,
        selectorName: null
    },
};
const EXAMPLE_LIST = [
    AutocompleteOverviewExample,
    ButtonOverviewExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonTypesExample,
    CardFancyExample,
    CardOverviewExample,
    CdkTableBasicExample,
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    DatepickerApiExample,
    DatepickerFilterExample,
    DatepickerMinMaxExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DialogElementsExampleDialog, DialogElementsExample,
    DialogOverviewExampleDialog, DialogOverviewExample,
    DialogResultExampleDialog, DialogResultExample,
    GridListDynamicExample,
    GridListOverviewExample,
    IconOverviewExample,
    IconSvgExample,
    InputClearableExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    ListOverviewExample,
    ListSectionsExample,
    MenuIconsExample,
    MenuOverviewExample,
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
    ProgressBarConfigurableExample,
    ProgressBarOverviewExample,
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
    RadioNgModelExample,
    RadioOverviewExample,
    SelectFormExample,
    SelectOverviewExample,
    SidenavFabExample,
    SidenavOverviewExample,
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
    SliderConfigurableExample,
    SliderOverviewExample,
    PizzaPartyComponent, SnackBarComponentExample,
    SnackBarOverviewExample,
    SortOverviewExample,
    TableBasicExample,
    TableFilteringExample,
    TableOverviewExample,
    TablePaginationExample,
    TableSortingExample,
    TabsOverviewExample,
    TabsTemplateLabelExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    TooltipOverviewExample,
    TooltipPositionExample,
];
class ExampleModule {
}
ExampleModule.decorators = [
    { type: NgModule, args: [{
                declarations: EXAMPLE_LIST,
                entryComponents: EXAMPLE_LIST,
                imports: [
                    ExampleMaterialModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule
                ]
            },] },
];
/**
 * @nocollapse
 */
ExampleModule.ctorParameters = () => [];

/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
class ExampleData {
    /**
     * @param {?} example
     */
    constructor(example) {
        // TODO: figure out how do we get these variables.
        this.description = 'Some description for material';
        // TODO: use real example and delete the example/ folder.
        this.examplePath = '/assets/example/';
        this.exampleFiles = ['button-demo.html', 'button-demo.scss', 'button-demo.ts'];
        // TODO: extract these variables from example code.
        this.selectorName = 'button-demo';
        this.indexFilename = 'button-demo';
        this.componentName = 'ButtonDemo';
        if (example && EXAMPLE_COMPONENTS[example]) {
            this.examplePath = `/assets/plunker/examples/${example}/`;
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css']
                .map((extension) => `${example}-example.${extension}`);
            if (EXAMPLE_COMPONENTS[example].additionalFiles) {
                this.exampleFiles = this.exampleFiles.concat(EXAMPLE_COMPONENTS[example].additionalFiles);
            }
            this.selectorName = this.indexFilename = `${example}-example`;
            let exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
            if (EXAMPLE_COMPONENTS[example].title) {
                this.description = EXAMPLE_COMPONENTS[example].title;
            }
            else {
                this.description = exampleName.replace(/[\-]+/g, ' ') + ' Example';
            }
            if (EXAMPLE_COMPONENTS[example].selectorName) {
                this.componentName = EXAMPLE_COMPONENTS[example].selectorName;
            }
            else {
                this.componentName = exampleName.replace(/[\-]+/g, '') + 'Example';
            }
        }
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_LIST, ExampleModule, DatepickerOverviewExample, CardFancyExample, AutocompleteOverviewExample as ɵa, ButtonOverviewExample as ɵb, ButtonToggleExclusiveExample as ɵc, ButtonToggleOverviewExample as ɵd, ButtonTypesExample as ɵe, CardOverviewExample as ɵf, CdkTableBasicExample as ɵg, CheckboxConfigurableExample as ɵh, CheckboxOverviewExample as ɵi, ChipsOverviewExample as ɵj, ChipsStackedExample as ɵk, DatepickerApiExample as ɵl, DatepickerFilterExample as ɵm, DatepickerMinMaxExample as ɵn, DatepickerStartViewExample as ɵo, DatepickerTouchExample as ɵp, DialogElementsExample as ɵq, DialogElementsExampleDialog as ɵr, DialogOverviewExample as ɵs, DialogOverviewExampleDialog as ɵt, DialogResultExample as ɵu, DialogResultExampleDialog as ɵv, GridListDynamicExample as ɵw, GridListOverviewExample as ɵx, IconOverviewExample as ɵy, IconSvgExample as ɵz, InputClearableExample as ɵba, InputErrorsExample as ɵbb, InputFormExample as ɵbc, InputHintExample as ɵbd, InputOverviewExample as ɵbe, InputPrefixSuffixExample as ɵbf, ListOverviewExample as ɵbg, ListSectionsExample as ɵbh, ExampleMaterialModule as ɵcq, MenuIconsExample as ɵbi, MenuOverviewExample as ɵbj, PaginatorConfigurableExample as ɵbk, PaginatorOverviewExample as ɵbl, ProgressBarConfigurableExample as ɵbm, ProgressBarOverviewExample as ɵbn, ProgressSpinnerConfigurableExample as ɵbo, ProgressSpinnerOverviewExample as ɵbp, RadioNgModelExample as ɵbq, RadioOverviewExample as ɵbr, SelectFormExample as ɵbs, SelectOverviewExample as ɵbt, SidenavFabExample as ɵbu, SidenavOverviewExample as ɵbv, SlideToggleConfigurableExample as ɵbw, SlideToggleFormsExample as ɵbx, SlideToggleOverviewExample as ɵby, SliderConfigurableExample as ɵbz, SliderOverviewExample as ɵca, PizzaPartyComponent as ɵcc, SnackBarComponentExample as ɵcb, SnackBarOverviewExample as ɵcd, SortOverviewExample as ɵce, TableBasicExample as ɵcf, TableFilteringExample as ɵcg, TableOverviewExample as ɵch, TablePaginationExample as ɵci, TableSortingExample as ɵcj, TabsOverviewExample as ɵck, TabsTemplateLabelExample as ɵcl, ToolbarMultirowExample as ɵcm, ToolbarOverviewExample as ɵcn, TooltipOverviewExample as ɵco, TooltipPositionExample as ɵcp };
//# sourceMappingURL=material-examples.js.map
