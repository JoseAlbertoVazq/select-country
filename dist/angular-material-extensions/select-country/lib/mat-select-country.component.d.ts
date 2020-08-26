import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import * as i0 from "@angular/core";
/**
 * Country interface ISO 3166
 */
export interface Country {
    name: string;
    alpha2Code: string;
    alpha3Code: string;
    numericCode: string;
}
/**
 * @author Anthony Nahas
 * @since 11.19
 * @version 1.0
 */
export declare class MatSelectCountryComponent implements OnInit, OnChanges, OnDestroy {
    appearance: MatFormFieldAppearance;
    country: string;
    label: string;
    placeHolder: string;
    disabled: boolean;
    nullable: boolean;
    readonly: boolean;
    itemsLoadSize: number;
    statesAutocompleteRef: MatAutocomplete;
    autocompleteTrigger: MatAutocompleteTrigger;
    onCountrySelected: EventEmitter<Country>;
    countryFormControl: FormControl;
    selectedCountry: Country;
    countries: Country[];
    filteredOptions: Country[];
    private modelChanged;
    private subscription;
    debounceTime: number;
    filterString: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _filter;
    onBlur(): void;
    onOptionsSelected($event: MatAutocompleteSelectedEvent): void;
    autocompleteScroll(): void;
    inputChanged(value: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MatSelectCountryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatSelectCountryComponent, "mat-select-country", never, { "appearance": "appearance"; "country": "country"; "label": "label"; "placeHolder": "placeHolder"; "disabled": "disabled"; "nullable": "nullable"; "readonly": "readonly"; "itemsLoadSize": "itemsLoadSize"; }, { "onCountrySelected": "onCountrySelected"; }, never, never>;
}
