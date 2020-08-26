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
export class MatSelectCountryModule {
    constructor(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.registerCountries();
    }
    registerCountries() {
        for (const country of COUNTRIES_DB) {
            const countryAlpha2Code = country.alpha2Code.toLowerCase();
            this.iconRegistry
                .addSvgIcon(countryAlpha2Code, this.sanitizer
                .bypassSecurityTrustResourceUrl(`assets/svg-country-flags/svg/${countryAlpha2Code}.svg`));
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1jb3VudHJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLW1hdGVyaWFsLWV4dGVuc2lvbnMvc2VsZWN0LWNvdW50cnkvIiwic291cmNlcyI6WyJsaWIvbWF0LXNlbGVjdC1jb3VudHJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFtQixNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBR2xDOzs7R0FHRztBQWlCSCxNQUFNLE9BQU8sc0JBQXNCO0lBRWpDLFlBQW9CLFlBQTZCLEVBQVUsU0FBdUI7UUFBOUQsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUNoRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsS0FBSyxNQUFNLE9BQU8sSUFBSSxZQUFZLEVBQUU7WUFDbEMsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZO2lCQUNkLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDMUMsOEJBQThCLENBQUMsZ0NBQWdDLGlCQUFpQixNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9GO0lBQ0gsQ0FBQzs7MERBYlUsc0JBQXNCOzJIQUF0QixzQkFBc0IsK0VBZHhCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixhQUFhO1lBQ2IsY0FBYztZQUNkLHFCQUFxQjtZQUNyQixhQUFhO1lBQ2IsbUJBQW1CO1NBQ3BCO3dGQUdVLHNCQUFzQixtQkFmbEIseUJBQXlCLGFBRXRDLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsYUFBYTtRQUNiLG1CQUFtQjtpQkFFWCx5QkFBeUI7a0RBRXhCLHNCQUFzQjtjQWhCbEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01hdFNlbGVjdENvdW50cnlDb21wb25lbnR9IGZyb20gJy4vbWF0LXNlbGVjdC1jb3VudHJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUsIE1hdEljb25SZWdpc3RyeSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge0NPVU5UUklFU19EQn0gZnJvbSAnLi9kYic7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBhdXRob3IgQW50aG9ueSBOYWhhc1xyXG4gKiBAc2luY2UgMDYuMTEuMTlcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTWF0U2VsZWN0Q291bnRyeUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGVcclxuICAgIC8vIEZsZXhMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtNYXRTZWxlY3RDb3VudHJ5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0Q291bnRyeU1vZHVsZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnksIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJDb3VudHJpZXMoKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyQ291bnRyaWVzKCkge1xyXG4gICAgZm9yIChjb25zdCBjb3VudHJ5IG9mIENPVU5UUklFU19EQikge1xyXG4gICAgICBjb25zdCBjb3VudHJ5QWxwaGEyQ29kZSA9IGNvdW50cnkuYWxwaGEyQ29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB0aGlzLmljb25SZWdpc3RyeVxyXG4gICAgICAgIC5hZGRTdmdJY29uKGNvdW50cnlBbHBoYTJDb2RlLCB0aGlzLnNhbml0aXplclxyXG4gICAgICAgICAgLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChgYXNzZXRzL3N2Zy1jb3VudHJ5LWZsYWdzL3N2Zy8ke2NvdW50cnlBbHBoYTJDb2RlfS5zdmdgKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=