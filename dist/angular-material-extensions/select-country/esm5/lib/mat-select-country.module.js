import { __values } from "tslib";
import { NgModule } from '@angular/core';
import { MatSelectCountryComponent } from './mat-select-country.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { COUNTRIES_DB } from './db';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
/**
 * @author Anthony Nahas
 * @since 06.11.19
 */
var MatSelectCountryModule = /** @class */ (function () {
    function MatSelectCountryModule(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.registerCountries();
    }
    MatSelectCountryModule.prototype.registerCountries = function () {
        var e_1, _a;
        try {
            for (var COUNTRIES_DB_1 = __values(COUNTRIES_DB), COUNTRIES_DB_1_1 = COUNTRIES_DB_1.next(); !COUNTRIES_DB_1_1.done; COUNTRIES_DB_1_1 = COUNTRIES_DB_1.next()) {
                var country = COUNTRIES_DB_1_1.value;
                var countryAlpha2Code = country.alpha2Code.toLowerCase();
                this.iconRegistry
                    .addSvgIcon(countryAlpha2Code, this.sanitizer
                    .bypassSecurityTrustResourceUrl("assets/svg-country-flags/svg/" + countryAlpha2Code + ".svg"));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (COUNTRIES_DB_1_1 && !COUNTRIES_DB_1_1.done && (_a = COUNTRIES_DB_1.return)) _a.call(COUNTRIES_DB_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MatSelectCountryModule.ɵmod = i0.ɵɵdefineNgModule({ type: MatSelectCountryModule });
    MatSelectCountryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MatSelectCountryModule_Factory(t) { return new (t || MatSelectCountryModule)(i0.ɵɵinject(i1.MatIconRegistry), i0.ɵɵinject(i2.DomSanitizer)); }, imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                MatButtonModule,
                MatMenuModule,
                MatInputModule,
                MatAutocompleteModule,
                MatIconModule
                // FlexLayoutModule
            ]] });
    return MatSelectCountryModule;
}());
export { MatSelectCountryModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatSelectCountryModule, { declarations: [MatSelectCountryComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatMenuModule,
        MatInputModule,
        MatAutocompleteModule,
        MatIconModule
        // FlexLayoutModule
    ], exports: [MatSelectCountryComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MatSelectCountryModule, [{
        type: NgModule,
        args: [{
                declarations: [MatSelectCountryComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    MatButtonModule,
                    MatMenuModule,
                    MatInputModule,
                    MatAutocompleteModule,
                    MatIconModule
                    // FlexLayoutModule
                ],
                exports: [MatSelectCountryComponent]
            }]
    }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1jb3VudHJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvc2VsZWN0LWNvdW50cnkvIiwic291cmNlcyI6WyJsaWIvbWF0LXNlbGVjdC1jb3VudHJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBbUIsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQUdsQzs7O0dBR0c7QUFDSDtJQWtCRSxnQ0FBb0IsWUFBNkIsRUFBVSxTQUF1QjtRQUE5RCxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ2hGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrREFBaUIsR0FBakI7OztZQUNFLEtBQXNCLElBQUEsaUJBQUEsU0FBQSxZQUFZLENBQUEsMENBQUEsb0VBQUU7Z0JBQS9CLElBQU0sT0FBTyx5QkFBQTtnQkFDaEIsSUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsWUFBWTtxQkFDZCxVQUFVLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVM7cUJBQzFDLDhCQUE4QixDQUFDLGtDQUFnQyxpQkFBaUIsU0FBTSxDQUFDLENBQUMsQ0FBQzthQUMvRjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs4REFiVSxzQkFBc0I7K0hBQXRCLHNCQUFzQiwrRUFkeEI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxxQkFBcUI7Z0JBQ3JCLGFBQWE7Z0JBQ2IsbUJBQW1CO2FBQ3BCO2lDQS9CSDtDQWlEQyxBQS9CRCxJQStCQztTQWZZLHNCQUFzQjt3RkFBdEIsc0JBQXNCLG1CQWZsQix5QkFBeUIsYUFFdEMsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsbUJBQW1CO2lCQUVYLHlCQUF5QjtrREFFeEIsc0JBQXNCO2NBaEJsQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0U2VsZWN0Q291bnRyeUNvbXBvbmVudH0gZnJvbSAnLi9tYXQtc2VsZWN0LWNvdW50cnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSwgTWF0SWNvblJlZ2lzdHJ5IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7Q09VTlRSSUVTX0RCfSBmcm9tICcuL2RiJztcclxuXHJcblxyXG4vKipcclxuICogQGF1dGhvciBBbnRob255IE5haGFzXHJcbiAqIEBzaW5jZSAwNi4xMS4xOVxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNYXRTZWxlY3RDb3VudHJ5Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZVxyXG4gICAgLy8gRmxleExheW91dE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW01hdFNlbGVjdENvdW50cnlDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRTZWxlY3RDb3VudHJ5TW9kdWxlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpY29uUmVnaXN0cnk6IE1hdEljb25SZWdpc3RyeSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgdGhpcy5yZWdpc3RlckNvdW50cmllcygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJDb3VudHJpZXMoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNvdW50cnkgb2YgQ09VTlRSSUVTX0RCKSB7XHJcbiAgICAgIGNvbnN0IGNvdW50cnlBbHBoYTJDb2RlID0gY291bnRyeS5hbHBoYTJDb2RlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMuaWNvblJlZ2lzdHJ5XHJcbiAgICAgICAgLmFkZFN2Z0ljb24oY291bnRyeUFscGhhMkNvZGUsIHRoaXMuc2FuaXRpemVyXHJcbiAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGBhc3NldHMvc3ZnLWNvdW50cnktZmxhZ3Mvc3ZnLyR7Y291bnRyeUFscGhhMkNvZGV9LnN2Z2ApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==