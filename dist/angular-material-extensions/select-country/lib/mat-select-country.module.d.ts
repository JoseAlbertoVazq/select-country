import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "./mat-select-country.component";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common/http";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/menu";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/autocomplete";
import * as i9 from "@angular/material/icon";
/**
 * @author Anthony Nahas
 * @since 06.11.19
 */
export declare class MatSelectCountryModule {
    private iconRegistry;
    private sanitizer;
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer);
    registerCountries(): void;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MatSelectCountryModule, [typeof i1.MatSelectCountryComponent], [typeof i2.CommonModule, typeof i3.FormsModule, typeof i3.ReactiveFormsModule, typeof i4.HttpClientModule, typeof i5.MatButtonModule, typeof i6.MatMenuModule, typeof i7.MatInputModule, typeof i8.MatAutocompleteModule, typeof i9.MatIconModule], [typeof i1.MatSelectCountryComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<MatSelectCountryModule>;
}
