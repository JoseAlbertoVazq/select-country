import { __read, __spread } from "tslib";
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
var _c0 = ["countryAutocomplete"];
function MatSelectCountryComponent_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
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
    var country_r3 = ctx.$implicit;
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
var MatSelectCountryComponent = /** @class */ (function () {
    function MatSelectCountryComponent() {
        this.placeHolder = 'Select country';
        this.onCountrySelected = new EventEmitter();
        this.countryFormControl = new FormControl();
        this.countries = COUNTRIES_DB;
        this.modelChanged = new Subject();
        this.debounceTime = 300;
        this.filterString = '';
    }
    MatSelectCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.modelChanged
            .pipe(startWith(''), debounceTime(this.debounceTime))
            .subscribe(function (value) {
            _this.filterString = value;
            _this._filter(value);
        });
    };
    MatSelectCountryComponent.prototype.ngOnChanges = function (changes) {
        if (changes.country) {
            if (changes.country.currentValue) {
                var newValue_1 = changes.country.currentValue.toUpperCase();
                this.selectedCountry = this.countries.find(function (country) {
                    return country.name.toUpperCase() === newValue_1
                        || country.alpha2Code === newValue_1
                        || country.alpha3Code === newValue_1
                        || country.numericCode === newValue_1;
                });
                this.countryFormControl.setValue(this.selectedCountry ? this.selectedCountry.name : '');
            }
            else {
                this.selectedCountry = undefined;
                this.countryFormControl.setValue('');
            }
        }
    };
    MatSelectCountryComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        // if not filtered, fetch reduced array
        if (this.itemsLoadSize && filterValue === '') {
            this.filteredOptions = this.countries.slice(0, this.itemsLoadSize);
        }
        else {
            this.filteredOptions = this.countries.filter(function (option) {
                return option.name.toLowerCase().includes(filterValue)
                    || option.alpha2Code.toLowerCase().includes(filterValue)
                    || option.alpha3Code.toLowerCase().includes(filterValue);
            });
        }
    };
    MatSelectCountryComponent.prototype.onBlur = function () {
        if (this.countryFormControl.value || !this.nullable) {
            this.countryFormControl.setValue(this.selectedCountry ? this.selectedCountry.name : '');
        }
        else if (this.selectedCountry) {
            this.selectedCountry = null;
            this.onCountrySelected.emit(null);
        }
    };
    MatSelectCountryComponent.prototype.onOptionsSelected = function ($event) {
        this.selectedCountry = this.countries.find(function (country) { return country.name === $event.option.value; });
        this.onCountrySelected.emit(this.selectedCountry);
    };
    MatSelectCountryComponent.prototype.autocompleteScroll = function () {
        var _this = this;
        if (this.itemsLoadSize) {
            setTimeout(function () {
                if (_this.statesAutocompleteRef &&
                    _this.autocompleteTrigger &&
                    _this.statesAutocompleteRef.panel) {
                    fromEvent(_this.statesAutocompleteRef.panel.nativeElement, 'scroll')
                        .pipe(takeUntil(_this.autocompleteTrigger.panelClosingActions))
                        .subscribe(function () {
                        var scrollTop = _this.statesAutocompleteRef.panel.nativeElement
                            .scrollTop;
                        var scrollHeight = _this.statesAutocompleteRef.panel.nativeElement
                            .scrollHeight;
                        var elementHeight = _this.statesAutocompleteRef.panel.nativeElement
                            .clientHeight;
                        var atBottom = scrollHeight === scrollTop + elementHeight;
                        if (atBottom) {
                            // fetch more data if not filtered
                            if (_this.filterString === '') {
                                var fromIndex = _this.filteredOptions.length;
                                var toIndex = +_this.filteredOptions.length + +_this.itemsLoadSize;
                                _this.filteredOptions = __spread(_this.filteredOptions, _this.countries.slice(fromIndex, toIndex));
                            }
                        }
                    });
                }
            });
        }
    };
    MatSelectCountryComponent.prototype.inputChanged = function (value) {
        this.modelChanged.next(value);
    };
    MatSelectCountryComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
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
            var _r1 = i0.ɵɵreference(6);
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
    return MatSelectCountryComponent;
}());
export { MatSelectCountryComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1jb3VudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvc2VsZWN0LWNvdW50cnkvIiwic291cmNlcyI6WyJsaWIvbWF0LXNlbGVjdC1jb3VudHJ5LmNvbXBvbmVudC50cyIsImxpYi9tYXQtc2VsZWN0LWNvdW50cnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBZ0Qsc0JBQXNCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7SUNiakgsaUNBQXlCO0lBQUEsWUFBUztJQUFBLGlCQUFZOzs7SUFBckIsZUFBUztJQUFULGtDQUFTOzs7SUFRaEMscUNBQ0U7SUFBQSw4QkFBbUU7SUFDbkUsNkJBQU87SUFBQSxZQUEyQztJQUFBLGlCQUFRO0lBQzVELGlCQUFhOzs7SUFIdUMsbUVBQXVCO0lBQy9ELGVBQTZDO0lBQTdDLHlGQUE2QztJQUNoRCxlQUEyQztJQUEzQyxvSUFBMkM7O0FEZ0IxRDs7OztHQUlHO0FBQ0g7SUFBQTtRQVVXLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFROUIsc0JBQWlCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFakYsdUJBQWtCLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUV2Qyxj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QUF6QiwyQ0FBeUI7WUFDNUIsZUFBYTtZQUFiLGdDQUFhO1lBRWQsZUFBcUQ7WUFBckQsMkdBQXFEO1lBQzVDLGVBQTJCO1lBQTNCLDZDQUEyQix1Q0FBQSx3QkFBQSwwQkFBQSwwQkFBQTtZQUtoQyxlQUF1QztZQUF2Qyw2Q0FBdUM7O29DRFZ6RDtDQXlLQyxBQXhJRCxJQXdJQztTQW5JWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLFNBQVM7bUJBQUMscUJBQXFCOztrQkFDL0IsU0FBUzttQkFBQyxzQkFBc0I7O2tCQUVoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q09VTlRSSUVTX0RCfSBmcm9tICcuL2RiJztcclxuaW1wb3J0IHtmcm9tRXZlbnQsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBzdGFydFdpdGgsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZSwgTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCwgTWF0QXV0b2NvbXBsZXRlVHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRBcHBlYXJhbmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuXHJcbi8qKlxyXG4gKiBDb3VudHJ5IGludGVyZmFjZSBJU08gMzE2NlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudHJ5IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgYWxwaGEyQ29kZTogc3RyaW5nO1xyXG4gIGFscGhhM0NvZGU6IHN0cmluZztcclxuICBudW1lcmljQ29kZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGF1dGhvciBBbnRob255IE5haGFzXHJcbiAqIEBzaW5jZSAxMS4xOVxyXG4gKiBAdmVyc2lvbiAxLjBcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXNlbGVjdC1jb3VudHJ5JyxcclxuICB0ZW1wbGF0ZVVybDogJ21hdC1zZWxlY3QtY291bnRyeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ21hdC1zZWxlY3QtY291bnRyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRTZWxlY3RDb3VudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIGFwcGVhcmFuY2U6IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2U7XHJcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnU2VsZWN0IGNvdW50cnknO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG51bGxhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGl0ZW1zTG9hZFNpemU6IG51bWJlcjtcclxuICBAVmlld0NoaWxkKCdjb3VudHJ5QXV0b2NvbXBsZXRlJykgc3RhdGVzQXV0b2NvbXBsZXRlUmVmOiBNYXRBdXRvY29tcGxldGU7XHJcbiAgQFZpZXdDaGlsZChNYXRBdXRvY29tcGxldGVUcmlnZ2VyKSBhdXRvY29tcGxldGVUcmlnZ2VyOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xyXG5cclxuICBAT3V0cHV0KCkgb25Db3VudHJ5U2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxDb3VudHJ5PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q291bnRyeT4oKTtcclxuXHJcbiAgY291bnRyeUZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgc2VsZWN0ZWRDb3VudHJ5OiBDb3VudHJ5O1xyXG4gIGNvdW50cmllczogQ291bnRyeVtdID0gQ09VTlRSSUVTX0RCO1xyXG4gIGZpbHRlcmVkT3B0aW9uczogQ291bnRyeVtdO1xyXG5cclxuICBwcml2YXRlIG1vZGVsQ2hhbmdlZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgZGVib3VuY2VUaW1lID0gMzAwO1xyXG5cclxuICBmaWx0ZXJTdHJpbmcgPSAnJztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubW9kZWxDaGFuZ2VkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCgnJyksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyU3RyaW5nID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyKHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5jb3VudHJ5KSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmNvdW50cnkuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBjaGFuZ2VzLmNvdW50cnkuY3VycmVudFZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnkgPSB0aGlzLmNvdW50cmllcy5maW5kKGNvdW50cnkgPT5cclxuICAgICAgICAgIGNvdW50cnkubmFtZS50b1VwcGVyQ2FzZSgpID09PSBuZXdWYWx1ZVxyXG4gICAgICAgICAgfHwgY291bnRyeS5hbHBoYTJDb2RlID09PSBuZXdWYWx1ZVxyXG4gICAgICAgICAgfHwgY291bnRyeS5hbHBoYTNDb2RlID09PSBuZXdWYWx1ZVxyXG4gICAgICAgICAgfHwgY291bnRyeS5udW1lcmljQ29kZSA9PT0gbmV3VmFsdWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY291bnRyeUZvcm1Db250cm9sLnNldFZhbHVlKFxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnkgPyB0aGlzLnNlbGVjdGVkQ291bnRyeS5uYW1lIDogJydcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY291bnRyeUZvcm1Db250cm9sLnNldFZhbHVlKCcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBpZiBub3QgZmlsdGVyZWQsIGZldGNoIHJlZHVjZWQgYXJyYXlcclxuICAgIGlmICh0aGlzLml0ZW1zTG9hZFNpemUgJiYgZmlsdGVyVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5jb3VudHJpZXMuc2xpY2UoMCwgdGhpcy5pdGVtc0xvYWRTaXplKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKChvcHRpb246IENvdW50cnkpID0+XHJcbiAgICAgICAgb3B0aW9uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSlcclxuICAgICAgICB8fCBvcHRpb24uYWxwaGEyQ29kZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKVxyXG4gICAgICAgIHx8IG9wdGlvbi5hbHBoYTNDb2RlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICBpZiAodGhpcy5jb3VudHJ5Rm9ybUNvbnRyb2wudmFsdWUgfHwgIXRoaXMubnVsbGFibGUpIHtcclxuICAgICAgdGhpcy5jb3VudHJ5Rm9ybUNvbnRyb2wuc2V0VmFsdWUoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnkgPyB0aGlzLnNlbGVjdGVkQ291bnRyeS5uYW1lIDogJydcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZENvdW50cnkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnkgPSBudWxsO1xyXG4gICAgICB0aGlzLm9uQ291bnRyeVNlbGVjdGVkLmVtaXQobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9wdGlvbnNTZWxlY3RlZCgkZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChjb3VudHJ5ID0+IGNvdW50cnkubmFtZSA9PT0gJGV2ZW50Lm9wdGlvbi52YWx1ZSk7XHJcbiAgICB0aGlzLm9uQ291bnRyeVNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZENvdW50cnkpO1xyXG4gIH1cclxuXHJcbiAgYXV0b2NvbXBsZXRlU2Nyb2xsKCkge1xyXG4gICAgaWYgKHRoaXMuaXRlbXNMb2FkU2l6ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLnN0YXRlc0F1dG9jb21wbGV0ZVJlZiAmJlxyXG4gICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVUcmlnZ2VyICYmXHJcbiAgICAgICAgICB0aGlzLnN0YXRlc0F1dG9jb21wbGV0ZVJlZi5wYW5lbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZnJvbUV2ZW50KHRoaXMuc3RhdGVzQXV0b2NvbXBsZXRlUmVmLnBhbmVsLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5hdXRvY29tcGxldGVUcmlnZ2VyLnBhbmVsQ2xvc2luZ0FjdGlvbnMpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zdGF0ZXNBdXRvY29tcGxldGVSZWYucGFuZWwubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLnN0YXRlc0F1dG9jb21wbGV0ZVJlZi5wYW5lbC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSB0aGlzLnN0YXRlc0F1dG9jb21wbGV0ZVJlZi5wYW5lbC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgIGNvbnN0IGF0Qm90dG9tID0gc2Nyb2xsSGVpZ2h0ID09PSBzY3JvbGxUb3AgKyBlbGVtZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgIGlmIChhdEJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZmV0Y2ggbW9yZSBkYXRhIGlmIG5vdCBmaWx0ZXJlZFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyU3RyaW5nID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRvSW5kZXg6IG51bWJlciA9ICt0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGggKyArdGhpcy5pdGVtc0xvYWRTaXplO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IFsuLi50aGlzLmZpbHRlcmVkT3B0aW9ucywgLi4udGhpcy5jb3VudHJpZXMuc2xpY2UoZnJvbUluZGV4LCB0b0luZGV4KV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGlucHV0Q2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlZC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiPGZvcm0+XHJcbiAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIj5cclxuICAgIDxtYXQtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPnt7bGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgPG1hdC1pY29uIGNsYXNzPVwibXItMTIgcy0yMCBzZWNvbmRhcnktdGV4dFwiIG1hdFN1ZmZpeFxyXG4gICAgICAgICAgICAgIFtzdmdJY29uXT1cInNlbGVjdGVkQ291bnRyeT8uYWxwaGEyQ29kZS50b0xvd2VyQ2FzZSgpXCI+PC9tYXQtaWNvbj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiIGFyaWEtbGFiZWw9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICBtYXRJbnB1dCBbZm9ybUNvbnRyb2xdPVwiY291bnRyeUZvcm1Db250cm9sXCJcclxuICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImNvdW50cnlBdXRvY29tcGxldGVcIiBbcmVhZG9ubHldPVwicmVhZG9ubHlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgIChibHVyKT1cIm9uQmx1cigpXCIgKGlucHV0KT1cImlucHV0Q2hhbmdlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxyXG4gICAgPG1hdC1hdXRvY29tcGxldGUgI2NvdW50cnlBdXRvY29tcGxldGU9XCJtYXRBdXRvY29tcGxldGVcIiAob3BlbmVkKT1cImF1dG9jb21wbGV0ZVNjcm9sbCgpXCIgKG9wdGlvblNlbGVjdGVkKT1cIm9uT3B0aW9uc1NlbGVjdGVkKCRldmVudClcIj5cclxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGNvdW50cnkgb2YgZmlsdGVyZWRPcHRpb25zXCIgW3ZhbHVlXT1cImNvdW50cnk/Lm5hbWVcIj5cclxuICAgICAgICA8bWF0LWljb24gW3N2Z0ljb25dPVwiY291bnRyeT8uYWxwaGEyQ29kZS50b0xvd2VyQ2FzZSgpXCI+PC9tYXQtaWNvbj5cclxuICAgICAgICA8c21hbGw+e3tjb3VudHJ5Py5uYW1lfX0gLSB7e2NvdW50cnk/LmFscGhhM0NvZGV9fTwvc21hbGw+XHJcbiAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG48L2Zvcm0+XHJcbiJdfQ==