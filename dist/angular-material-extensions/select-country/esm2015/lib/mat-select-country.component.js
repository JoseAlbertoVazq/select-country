import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { COUNTRIES_DB } from './db';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/autocomplete";
import * as i7 from "@angular/material/core";
const _c0 = ["countryAutocomplete"];
function MatSelectCountryComponent_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
function MatSelectCountryComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 7);
    i0.ɵɵelement(1, "mat-icon", 8);
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r3 == null ? null : country_r3.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("svgIcon", country_r3 == null ? null : country_r3.alpha2Code.toLowerCase());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", country_r3 == null ? null : country_r3.name, " - ", country_r3 == null ? null : country_r3.alpha3Code, "");
} }
/**
 * @author Anthony Nahas
 * @since 11.19
 * @version 1.0
 */
export class MatSelectCountryComponent {
    constructor() {
        this.placeHolder = 'Select country';
        this.onCountrySelected = new EventEmitter();
        this.countryFormControl = new FormControl();
        this.countries = COUNTRIES_DB;
        this.modelChanged = new Subject();
        this.debounceTime = 300;
        this.filterString = '';
    }
    ngOnInit() {
        this.subscription = this.modelChanged
            .pipe(startWith(''), debounceTime(this.debounceTime))
            .subscribe((value) => {
            this.filterString = value;
            this._filter(value);
        });
    }
    ngOnChanges(changes) {
        if (changes.country) {
            if (changes.country.currentValue) {
                const newValue = changes.country.currentValue.toUpperCase();
                this.selectedCountry = this.countries.find(country => country.name.toUpperCase() === newValue
                    || country.alpha2Code === newValue
                    || country.alpha3Code === newValue
                    || country.numericCode === newValue);
                this.countryFormControl.setValue(this.selectedCountry ? this.selectedCountry.name : '');
            }
            else {
                this.selectedCountry = undefined;
                this.countryFormControl.setValue('');
            }
        }
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        // if not filtered, fetch reduced array
        if (this.itemsLoadSize && filterValue === '') {
            this.filteredOptions = this.countries.slice(0, this.itemsLoadSize);
        }
        else {
            this.filteredOptions = this.countries.filter((option) => option.name.toLowerCase().includes(filterValue)
                || option.alpha2Code.toLowerCase().includes(filterValue)
                || option.alpha3Code.toLowerCase().includes(filterValue));
        }
    }
    onBlur() {
        if (this.countryFormControl.value || !this.nullable) {
            this.countryFormControl.setValue(this.selectedCountry ? this.selectedCountry.name : '');
        }
        else if (this.selectedCountry) {
            this.selectedCountry = null;
            this.onCountrySelected.emit(null);
        }
    }
    onOptionsSelected($event) {
        this.selectedCountry = this.countries.find(country => country.name === $event.option.value);
        this.onCountrySelected.emit(this.selectedCountry);
    }
    autocompleteScroll() {
        if (this.itemsLoadSize) {
            setTimeout(() => {
                if (this.statesAutocompleteRef &&
                    this.autocompleteTrigger &&
                    this.statesAutocompleteRef.panel) {
                    fromEvent(this.statesAutocompleteRef.panel.nativeElement, 'scroll')
                        .pipe(takeUntil(this.autocompleteTrigger.panelClosingActions))
                        .subscribe(() => {
                        const scrollTop = this.statesAutocompleteRef.panel.nativeElement
                            .scrollTop;
                        const scrollHeight = this.statesAutocompleteRef.panel.nativeElement
                            .scrollHeight;
                        const elementHeight = this.statesAutocompleteRef.panel.nativeElement
                            .clientHeight;
                        const atBottom = scrollHeight === scrollTop + elementHeight;
                        if (atBottom) {
                            // fetch more data if not filtered
                            if (this.filterString === '') {
                                const fromIndex = this.filteredOptions.length;
                                const toIndex = +this.filteredOptions.length + +this.itemsLoadSize;
                                this.filteredOptions = [...this.filteredOptions, ...this.countries.slice(fromIndex, toIndex)];
                            }
                        }
                    });
                }
            });
        }
    }
    inputChanged(value) {
        this.modelChanged.next(value);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
MatSelectCountryComponent.ɵfac = function MatSelectCountryComponent_Factory(t) { return new (t || MatSelectCountryComponent)(); };
MatSelectCountryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MatSelectCountryComponent, selectors: [["mat-select-country"]], viewQuery: function MatSelectCountryComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(MatAutocompleteTrigger, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.statesAutocompleteRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autocompleteTrigger = _t.first);
    } }, inputs: { appearance: "appearance", country: "country", label: "label", placeHolder: "placeHolder", disabled: "disabled", nullable: "nullable", readonly: "readonly", itemsLoadSize: "itemsLoadSize" }, outputs: { onCountrySelected: "onCountrySelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 9, consts: [[3, "appearance"], [4, "ngIf"], ["matSuffix", "", 1, "mr-12", "s-20", "secondary-text", 3, "svgIcon"], ["type", "text", "aria-label", "country", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "readonly", "disabled", "blur", "input"], [3, "opened", "optionSelected"], ["countryAutocomplete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "svgIcon"]], template: function MatSelectCountryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form");
        i0.ɵɵelementStart(1, "mat-form-field", 0);
        i0.ɵɵtemplate(2, MatSelectCountryComponent_mat_label_2_Template, 2, 1, "mat-label", 1);
        i0.ɵɵelement(3, "mat-icon", 2);
        i0.ɵɵelementStart(4, "input", 3);
        i0.ɵɵlistener("blur", function MatSelectCountryComponent_Template_input_blur_4_listener() { return ctx.onBlur(); })("input", function MatSelectCountryComponent_Template_input_input_4_listener($event) { return ctx.inputChanged($event.target.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-autocomplete", 4, 5);
        i0.ɵɵlistener("opened", function MatSelectCountryComponent_Template_mat_autocomplete_opened_5_listener() { return ctx.autocompleteScroll(); })("optionSelected", function MatSelectCountryComponent_Template_mat_autocomplete_optionSelected_5_listener($event) { return ctx.onOptionsSelected($event); });
        i0.ɵɵtemplate(7, MatSelectCountryComponent_mat_option_7_Template, 4, 4, "mat-option", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(6);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("appearance", ctx.appearance);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("svgIcon", ctx.selectedCountry == null ? null : ctx.selectedCountry.alpha2Code.toLowerCase());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", ctx.placeHolder)("formControl", ctx.countryFormControl)("matAutocomplete", _r1)("readonly", ctx.readonly)("disabled", ctx.disabled);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.filteredOptions);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.NgIf, i4.MatIcon, i2.MatSuffix, i5.MatInput, i1.DefaultValueAccessor, i6.MatAutocompleteTrigger, i1.NgControlStatus, i1.FormControlDirective, i6.MatAutocomplete, i3.NgForOf, i2.MatLabel, i7.MatOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatSelectCountryComponent, [{
        type: Component,
        args: [{
                selector: 'mat-select-country',
                templateUrl: 'mat-select-country.component.html',
                styleUrls: ['mat-select-country.component.scss']
            }]
    }], null, { appearance: [{
            type: Input
        }], country: [{
            type: Input
        }], label: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], disabled: [{
            type: Input
        }], nullable: [{
            type: Input
        }], readonly: [{
            type: Input
        }], itemsLoadSize: [{
            type: Input
        }], statesAutocompleteRef: [{
            type: ViewChild,
            args: ['countryAutocomplete']
        }], autocompleteTrigger: [{
            type: ViewChild,
            args: [MatAutocompleteTrigger]
        }], onCountrySelected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1jb3VudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvc2VsZWN0LWNvdW50cnkvIiwic291cmNlcyI6WyJsaWIvbWF0LXNlbGVjdC1jb3VudHJ5LmNvbXBvbmVudC50cyIsImxpYi9tYXQtc2VsZWN0LWNvdW50cnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFnRCxzQkFBc0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7OztJQ2JqSCxpQ0FBeUI7SUFBQSxZQUFTO0lBQUEsaUJBQVk7OztJQUFyQixlQUFTO0lBQVQsa0NBQVM7OztJQVFoQyxxQ0FDRTtJQUFBLDhCQUFtRTtJQUNuRSw2QkFBTztJQUFBLFlBQTJDO0lBQUEsaUJBQVE7SUFDNUQsaUJBQWE7OztJQUh1QyxtRUFBdUI7SUFDL0QsZUFBNkM7SUFBN0MseUZBQTZDO0lBQ2hELGVBQTJDO0lBQTNDLG9JQUEyQzs7QURnQjFEOzs7O0dBSUc7QUFNSCxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBVVcsZ0JBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQVE5QixzQkFBaUIsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVqRix1QkFBa0IsR0FBRyxJQUFJLFdBQVcs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RDtRQUFyRCwyR0FBcUQ7UUFDNUMsZUFBMkI7UUFBM0IsNkNBQTJCLHVDQUFBLHdCQUFBLDBCQUFBLDBCQUFBO1FBS2hDLGVBQXVDO1FBQXZDLDZDQUF1Qzs7a0RENEI1Qyx5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxTQUFTO21CQUFDLHFCQUFxQjs7a0JBQy9CLFNBQVM7bUJBQUMsc0JBQXNCOztrQkFFaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NPVU5UUklFU19EQn0gZnJvbSAnLi9kYic7XHJcbmltcG9ydCB7ZnJvbUV2ZW50LCBTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2RlYm91bmNlVGltZSwgc3RhcnRXaXRoLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtNYXRBdXRvY29tcGxldGUsIE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQsIE1hdEF1dG9jb21wbGV0ZVRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkQXBwZWFyYW5jZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcblxyXG4vKipcclxuICogQ291bnRyeSBpbnRlcmZhY2UgSVNPIDMxNjZcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGFscGhhMkNvZGU6IHN0cmluZztcclxuICBhbHBoYTNDb2RlOiBzdHJpbmc7XHJcbiAgbnVtZXJpY0NvZGU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBhdXRob3IgQW50aG9ueSBOYWhhc1xyXG4gKiBAc2luY2UgMTEuMTlcclxuICogQHZlcnNpb24gMS4wXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1zZWxlY3QtY291bnRyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICdtYXQtc2VsZWN0LWNvdW50cnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydtYXQtc2VsZWN0LWNvdW50cnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0Q291bnRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBhcHBlYXJhbmNlOiBNYXRGb3JtRmllbGRBcHBlYXJhbmNlO1xyXG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyID0gJ1NlbGVjdCBjb3VudHJ5JztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBudWxsYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpdGVtc0xvYWRTaXplOiBudW1iZXI7XHJcbiAgQFZpZXdDaGlsZCgnY291bnRyeUF1dG9jb21wbGV0ZScpIHN0YXRlc0F1dG9jb21wbGV0ZVJlZjogTWF0QXV0b2NvbXBsZXRlO1xyXG4gIEBWaWV3Q2hpbGQoTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcikgYXV0b2NvbXBsZXRlVHJpZ2dlcjogTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcjtcclxuXHJcbiAgQE91dHB1dCgpIG9uQ291bnRyeVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8Q291bnRyeT4gPSBuZXcgRXZlbnRFbWl0dGVyPENvdW50cnk+KCk7XHJcblxyXG4gIGNvdW50cnlGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIHNlbGVjdGVkQ291bnRyeTogQ291bnRyeTtcclxuICBjb3VudHJpZXM6IENvdW50cnlbXSA9IENPVU5UUklFU19EQjtcclxuICBmaWx0ZXJlZE9wdGlvbnM6IENvdW50cnlbXTtcclxuXHJcbiAgcHJpdmF0ZSBtb2RlbENoYW5nZWQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIGRlYm91bmNlVGltZSA9IDMwMDtcclxuXHJcbiAgZmlsdGVyU3RyaW5nID0gJyc7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm1vZGVsQ2hhbmdlZFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgoJycpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlVGltZSksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLmZpbHRlclN0cmluZyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX2ZpbHRlcih2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuY291bnRyeSkge1xyXG4gICAgICBpZiAoY2hhbmdlcy5jb3VudHJ5LmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY2hhbmdlcy5jb3VudHJ5LmN1cnJlbnRWYWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChjb3VudHJ5ID0+XHJcbiAgICAgICAgICBjb3VudHJ5Lm5hbWUudG9VcHBlckNhc2UoKSA9PT0gbmV3VmFsdWVcclxuICAgICAgICAgIHx8IGNvdW50cnkuYWxwaGEyQ29kZSA9PT0gbmV3VmFsdWVcclxuICAgICAgICAgIHx8IGNvdW50cnkuYWxwaGEzQ29kZSA9PT0gbmV3VmFsdWVcclxuICAgICAgICAgIHx8IGNvdW50cnkubnVtZXJpY0NvZGUgPT09IG5ld1ZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNvdW50cnlGb3JtQ29udHJvbC5zZXRWYWx1ZShcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID8gdGhpcy5zZWxlY3RlZENvdW50cnkubmFtZSA6ICcnXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNvdW50cnlGb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gaWYgbm90IGZpbHRlcmVkLCBmZXRjaCByZWR1Y2VkIGFycmF5XHJcbiAgICBpZiAodGhpcy5pdGVtc0xvYWRTaXplICYmIGZpbHRlclZhbHVlID09PSAnJykge1xyXG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuY291bnRyaWVzLnNsaWNlKDAsIHRoaXMuaXRlbXNMb2FkU2l6ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuY291bnRyaWVzLmZpbHRlcigob3B0aW9uOiBDb3VudHJ5KSA9PlxyXG4gICAgICAgIG9wdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpXHJcbiAgICAgICAgfHwgb3B0aW9uLmFscGhhMkNvZGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSlcclxuICAgICAgICB8fCBvcHRpb24uYWxwaGEzQ29kZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgaWYgKHRoaXMuY291bnRyeUZvcm1Db250cm9sLnZhbHVlIHx8ICF0aGlzLm51bGxhYmxlKSB7XHJcbiAgICAgIHRoaXMuY291bnRyeUZvcm1Db250cm9sLnNldFZhbHVlKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID8gdGhpcy5zZWxlY3RlZENvdW50cnkubmFtZSA6ICcnXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRDb3VudHJ5KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gbnVsbDtcclxuICAgICAgdGhpcy5vbkNvdW50cnlTZWxlY3RlZC5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PcHRpb25zU2VsZWN0ZWQoJGV2ZW50OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSA9IHRoaXMuY291bnRyaWVzLmZpbmQoY291bnRyeSA9PiBjb3VudHJ5Lm5hbWUgPT09ICRldmVudC5vcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5vbkNvdW50cnlTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRDb3VudHJ5KTtcclxuICB9XHJcblxyXG4gIGF1dG9jb21wbGV0ZVNjcm9sbCgpIHtcclxuICAgIGlmICh0aGlzLml0ZW1zTG9hZFNpemUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZXNBdXRvY29tcGxldGVSZWYgJiZcclxuICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlVHJpZ2dlciAmJlxyXG4gICAgICAgICAgdGhpcy5zdGF0ZXNBdXRvY29tcGxldGVSZWYucGFuZWxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGZyb21FdmVudCh0aGlzLnN0YXRlc0F1dG9jb21wbGV0ZVJlZi5wYW5lbC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuYXV0b2NvbXBsZXRlVHJpZ2dlci5wYW5lbENsb3NpbmdBY3Rpb25zKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc3RhdGVzQXV0b2NvbXBsZXRlUmVmLnBhbmVsLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5zdGF0ZXNBdXRvY29tcGxldGVSZWYucGFuZWwubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gdGhpcy5zdGF0ZXNBdXRvY29tcGxldGVSZWYucGFuZWwubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICBjb25zdCBhdEJvdHRvbSA9IHNjcm9sbEhlaWdodCA9PT0gc2Nyb2xsVG9wICsgZWxlbWVudEhlaWdodDtcclxuICAgICAgICAgICAgICBpZiAoYXRCb3R0b20pIHtcclxuICAgICAgICAgICAgICAgIC8vIGZldGNoIG1vcmUgZGF0YSBpZiBub3QgZmlsdGVyZWRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlclN0cmluZyA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0b0luZGV4OiBudW1iZXIgPSArdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoICsgK3RoaXMuaXRlbXNMb2FkU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSBbLi4udGhpcy5maWx0ZXJlZE9wdGlvbnMsIC4uLnRoaXMuY291bnRyaWVzLnNsaWNlKGZyb21JbmRleCwgdG9JbmRleCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dENoYW5nZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RlbENoYW5nZWQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxmb3JtPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCI+XHJcbiAgICA8bWF0LWxhYmVsICpuZ0lmPVwibGFiZWxcIj57e2xhYmVsfX08L21hdC1sYWJlbD5cclxuICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1yLTEyIHMtMjAgc2Vjb25kYXJ5LXRleHRcIiBtYXRTdWZmaXhcclxuICAgICAgICAgICAgICBbc3ZnSWNvbl09XCJzZWxlY3RlZENvdW50cnk/LmFscGhhMkNvZGUudG9Mb3dlckNhc2UoKVwiPjwvbWF0LWljb24+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2VIb2xkZXJcIiBhcmlhLWxhYmVsPVwiY291bnRyeVwiXHJcbiAgICAgICAgICAgbWF0SW5wdXQgW2Zvcm1Db250cm9sXT1cImNvdW50cnlGb3JtQ29udHJvbFwiXHJcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJjb3VudHJ5QXV0b2NvbXBsZXRlXCIgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiIChpbnB1dCk9XCJpbnB1dENoYW5nZWQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNjb3VudHJ5QXV0b2NvbXBsZXRlPVwibWF0QXV0b2NvbXBsZXRlXCIgKG9wZW5lZCk9XCJhdXRvY29tcGxldGVTY3JvbGwoKVwiIChvcHRpb25TZWxlY3RlZCk9XCJvbk9wdGlvbnNTZWxlY3RlZCgkZXZlbnQpXCI+XHJcbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBjb3VudHJ5IG9mIGZpbHRlcmVkT3B0aW9uc1wiIFt2YWx1ZV09XCJjb3VudHJ5Py5uYW1lXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIFtzdmdJY29uXT1cImNvdW50cnk/LmFscGhhMkNvZGUudG9Mb3dlckNhc2UoKVwiPjwvbWF0LWljb24+XHJcbiAgICAgICAgPHNtYWxsPnt7Y291bnRyeT8ubmFtZX19IC0ge3tjb3VudHJ5Py5hbHBoYTNDb2RlfX08L3NtYWxsPlxyXG4gICAgICA8L21hdC1vcHRpb24+XHJcbiAgICA8L21hdC1hdXRvY29tcGxldGU+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9mb3JtPlxyXG4iXX0=